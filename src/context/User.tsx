import { createContext, ReactNode, useState } from "react";

import { IUser, IContext } from "./interfaces";

type Props = {
	children: ReactNode;
};

const UserContext = createContext({} as IContext);

function UserContextProvider({ children }: Props) {
	const [user, setUser] = useState({} as IUser);

	const searchResult = (newUser: IUser) => setUser(newUser);

	return (
		<UserContext.Provider value={{ user, searchResult }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserContextProvider };
