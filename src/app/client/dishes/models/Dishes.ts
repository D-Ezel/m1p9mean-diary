export class Dishes {
	constructor(
		public _id: string = "",
		public name: string = null,
		public description: string = null,
		public price: number = 0,
		public restoref: string = null
	) {}
}