import { CartItem } from './../../cart/class/CartItem';
import { Accounts } from './../../account/models/Accounts';
export class Ordered {
	constructor(
		public _id: string = "",
		public accountref: Accounts = null,
		public cart_item: Array<CartItem> = new Array(), 
		public sumQty: number = 0,
		public sumPrice: number = 0,
		public typeOfDelivery: string = null,
		public timeToDelivery: string = null,
		public created_at: Date = null,
		public state: number = 0
	){}
}