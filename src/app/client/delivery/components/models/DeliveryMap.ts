import { Coordinate } from './../../../../models/Coordinate';
import { Ordered } from './../../../checkout/models/Ordered';
export class DeliveryMap {
	constructor(
		public _id: string ="",
		public orderedref: Ordered = null,
		public description: string = null,
		public coordinate: Coordinate = null
	){}
}