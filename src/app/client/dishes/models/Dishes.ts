import { TypeResto } from './../../resto-ekaly/models/TypeResto';
import { Resto } from './../../resto-ekaly/models/Resto';
export class Dishes {
	constructor(
		public _id: string = "",
		public name: string = null,
		public description: string = null,
		public price: number = 0,
		public restoref: Resto = null,
		public typeref: TypeResto = null,
		public picture: string = "https://picsum.photos/id/984/900/500",
		public clickColor: boolean = false
	) {}
}