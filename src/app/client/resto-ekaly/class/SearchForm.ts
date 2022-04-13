export class SearchForm {
	constructor(
		public searchInput: string = null,
		public nearestResto: boolean = true,
		public minimumPrice: number = -1
	) {}
}