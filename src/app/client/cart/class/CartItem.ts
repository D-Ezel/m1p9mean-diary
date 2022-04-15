import { Dishes } from './../../dishes/models/Dishes';
export class CartItem {
	constructor(
		public item: Dishes = null,
		public qty: number = 0,
        public price: number = 0
	) {}
}