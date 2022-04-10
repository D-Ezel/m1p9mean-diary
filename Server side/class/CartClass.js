export function CartClass (cartItemsOld) {
	this.items = cartItemsOld.items || {};
	this.sumQty = cartItemsOld.sumQty || 0;
	this.sumPrice = cartItemsOld.sumPrice || 0;

	this.add = (item, id) => {
		let storedItem = this.items[id];
		if(!storedItem) {
			storedItem = this.items[id] = {item: item, qty: 0, price: 0 };
		}
		storedItem.qty++;
		storedItem.price = storedItem.item.price * storedItem.qty;
		this.sumQty++;
		this.sumPrice += storedItem.item.price;
	};

	this.drop = (id) => {
		let storedItem = this.items[id];
		storedItem.qty--;
		storedItem.price = storedItem.item.price * storedItem.qty;
		this.sumQty--;
		this.sumPrice -= storedItem.item.price;
		if(storedItem.qty < 1) {
			delete this.items[id];
		}
	}
}