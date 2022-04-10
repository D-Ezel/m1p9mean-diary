export function CheckoutMapClass(checkoutReq, cart) {
	this.accountref = checkoutReq.accountref || "";
	this.type_checkout = checkoutReq.type_checkout || {};
	this.typeOfDelivery = checkoutReq.typeOfDelivery || "";
	this.deliveryMap = checkoutReq.deliveryMap || {};
	this.timeToDelivery = checkoutReq.timeToDelivery || "";
	this.sumQty = cart.sumQty;
	this.sumPrice = cart.sumPrice;
}