import { Profile } from './Profile';
export class Accounts {
	constructor(
		public _id: string = "",
		public first_name: string = null,
		public last_name: string = null,
		public birth_date: Date = null,
		public email: string = null,
		public profile: Profile = null,
		public password: string = null,
		public created_at: Date = null,
		public token: string = null
	) {}
} 