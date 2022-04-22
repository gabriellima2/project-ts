import { useContext } from "react";
import { Avatar, Box } from "@mui/material";

import Data from "./Data";

import { UserContext } from "../../context/User";

function UserInformation() {
	const { user } = useContext(UserContext);

	return (
		<>
			<Avatar
				src={user.description?.avatar_url || ""}
				alt={`Foto de ${user.description?.login || ""}`}
				sx={{ height: 75, width: 75 }}
			/>
			<p style={{ fontSize: "1.1em" }}>
				{user.description?.login || "Faça uma busca!"}
			</p>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: "40px"
				}}
			>
				<Data
					title="Following"
					total={user.description?.following || 0}
					content={{ follows: user?.following }}
				/>
				<Data
					title="Repos"
					total={user.description?.public_repos || 0}
					content={{ repos: user?.repos }}
				/>
				<Data
					title="Followers"
					total={user.description?.followers || 0}
					content={{ follows: user?.followers }}
				/>
			</Box>
		</>
	);
}

export default UserInformation;
