import { Dishes } from './../../dishes/models/Dishes';
import { Coordinate } from './../../../models/Coordinate';
import { TypeResto } from './TypeResto';
export class Resto {
	constructor(
		public _id: string = "",
		public name: string = null,
		public type: Array<TypeResto> = new Array(),
		public coordinate: Coordinate = null,
		public dishes: Array<Dishes> = new Array(),
		public km: number = 0
	) {}
}