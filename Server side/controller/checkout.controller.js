import mongoose from "mongoose";
import { CheckoutMapClass } from "../class/CheckoutMapClass.js";
import { CartItemClass } from "../class/CartItemClass.js";
import OrderedModel from "../models/ordered.js";
import CartItemModel from "../models/cart_item.js";
import OrderedPaidModel from "../models/ordered_paid.js";
import TypeCheckoutModel from "../models/type_checkout.js";
import CodeReceivedOrderedModel from "../models/code_received_ordered.js"
import Nexmo from 'nexmo';
import { nexmo } from '../config.js';

const {apiKey, apiSecret} = nexmo
const nexmoApi = new Nexmo({
	apiKey:apiKey,
	apiSecret:apiSecret
});

const checkoutMap = (req, next) => {
	const checkoutMap =  new CheckoutMapClass(req.body, req.session.cart);
	const ordered = new OrderedModel(checkoutMap);
	ordered.state = 10;
	const typeCheckout = new TypeCheckoutModel(checkoutMap.type_checkout);
	typeCheckout.orderedref = ordered._id;
	saveCheckout(req.session.cart, ordered, typeCheckout, req.body.toNumber, next);
}

const generatorCodeReceived = () => {
	const chiffres = "0123456789";
	let randNum;
	let randStr = "";
	let useList;
	for (let i = 1; i <= 6; i++) {
		useList = chiffres;
		randNum = Math.floor(Math.random() * useList.length);
		randStr = randStr + useList.charAt(randNum);
	}
	return randStr;
}

const saveCheckout = (cart, ordered, typeCheckout, toNumber, next) => {
	const lengthCart = Object.keys(cart.items).length;
	try {
		mongoose.startSession().then(async (session) => {
			session.withTransaction(async() => {
				for(let i=0; i<lengthCart; i++) {
					let cartItemClass = new CartItemClass(cart, ordered._id, i);
					let CartItem = new CartItemModel(cartItemClass);
					ordered.cart_item.push(CartItem._id);
					await CartItem.save((err) => {
						if (err) return next(err);
					})
				}
				await ordered.save((err) => {
					if (err) return next(err);
					const orderedPaid = new OrderedPaidModel({
						orderedref:ordered._id, 
						type_checkout:typeCheckout._id
					});
					orderedPaid.save((error) => {
						if (error) return next(error);
						const code = generatorCodeReceived();
						const codeReceivedOrdered = new CodeReceivedOrderedModel({
							orderedref: ordered._id,
							codeReceivedToValidate: code
						});
						typeCheckout.save((err) => {
							if (err) return next(err);
							codeReceivedOrdered.save((error) => {
								if (error) return next(error);
								nexmoApi.message.sendSms(
									"+261343152742", "+261"+toNumber, "code de recu livraison:"+code, {type: 'unicode'},
									(err, responseData) => {
										if (responseData) {
											console.log("eto le t mety")
											console.log(responseData)
										}
									}
								);
							})
						})
					})
				})
			});
			session.endSession();
			return Promise.resolve(ordered);
		})
		.then((orderedInserted) => {
			next(null, orderedInserted);
		});
	} catch(e) {
		return next(e)
	}
}

export {
	checkoutMap
}