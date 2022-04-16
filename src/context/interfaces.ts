export interface IUser {
	avatar_url: string;
	login: string;
	public_repos: number;
	followers: number;
	following: number;
}

export interface IContext {
	user: IUser;
	searchResult: (newUser: IUser) => void;
}
