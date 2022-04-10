export function CartItemClass(cart, orderedID, indice) {
    this.dishesref = cart.items[Object.keys(cart.items)[indice]].item._id;
	this.ordered = orderedID;
	this.qty = cart.items[Object.keys(cart.items)[indice]].qty;
	this.price = cart.items[Object.keys(cart.items)[indice]].price;
	
    //this.created_at = cart.items[Object.keys(cart.items)[indice]].created_at;
}