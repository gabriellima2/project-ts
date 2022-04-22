import { AxiosResponse } from "axios";

import { IDescription, IRepos, Follow, IUser } from "../../context/interfaces";
import api from "../../services/api";

async function request(value: string) {
	try {
		const userResponse: AxiosResponse<IDescription> = await api.get(
			`/users/${value}`
		);

		const reposResponse: AxiosResponse<[IRepos]> = await api.get(
			`/users/${value}/repos`
		);

		const followingResponse: AxiosResponse<[Follow]> = await api.get(
			`/users/${value}/following`
		);

		const followersResponse: AxiosResponse<[Follow]> = await api.get(
			`/users/${value}/followers`
		);

		const response: IUser = {
			description: userResponse.data,
			repos: reposResponse.data,
			followers: followersResponse.data,
			following: followingResponse.data
		};

		return response;
	} catch (err) {
		console.error(err);
	}
}

export default request;
