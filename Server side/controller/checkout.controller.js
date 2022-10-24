import mongoose from "mongoose";
import { CheckoutMapClass } from "../class/CheckoutMapClass.js";
import { CartItemClass } from "../class/CartItemClass.js";
import OrderedModel from "../models/ordered.js";
import CartItemModel from "../models/cart_item.js";
import OrderedPaidModel from "../models/ordered_paid.js";
import TypeCheckoutModel from "../models/type_checkout.js";
import CodeReceivedOrderedModel from "../models/code_received_ordered.js"

const checkoutMap = (req, next) => {
	const checkoutMap =  new CheckoutMapClass(req.body, req.session.cart);
	const ordered = new OrderedModel(checkoutMap);
	ordered.state = 10;
	const typeCheckout = new TypeCheckoutModel(checkoutMap.type_checkout);
	typeCheckout.orderedref = ordered._id;
	saveCheckout(req.session.cart, ordered, typeCheckout, next);
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

const saveCheckout = (cart, ordered, typeCheckout, next) => {
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
				await typeCheckout.save((err) => {
					if (err) return next(err);
				})
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
						codeReceivedOrdered.save((error) => {
							if (error) return next(error);
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