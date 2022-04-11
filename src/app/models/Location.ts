import { Point } from './Point';
import { City } from './City';
import { Coordinate } from './Coordinate';
export class Location {
	constructor(
		public _id: string = "",
		public name: string = null,
		public coordinate: Coordinate = null,
		public cityref: City = null,
		public point: Array<Point> = null
	) {}
}