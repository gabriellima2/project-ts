interface BasicUserInformation {
	avatar_url: string;
	login: string;
}

export interface IDescription extends BasicUserInformation {
	public_repos: number;
	followers: number;
	following: number;
}

export interface IRepo {
	id: number;
	name: string;
	description: string;
	html_url: string;
}

export interface IFollow extends BasicUserInformation {
	html_url: string;
	id: number;
}

export interface IUser {
	description: IDescription;
	repos: IRepo[];
	following: IFollow[];
	followers: IFollow[];
}

export interface IContext {
	user: IUser;
	searchResult: (newUser: IUser) => void;
}
