import { CartItem } from './CartItem';
export class Cart {
    constructor(
        public itemDish: Array<CartItem> = new Array(),
        public sumQty: number = 0,
        public sumPrice: number = 0
    ){}
}