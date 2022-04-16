import { useContext } from "react";
import { Avatar, Box } from "@mui/material";

import Data from "./Data";

import { UserContext } from "../../context/User";

function UserInformation() {
	const { user } = useContext(UserContext);

	return (
		<>
			<Avatar
				src={user.avatar_url}
				alt={`Foto de ${user?.login}`}
				sx={{ height: 75, width: 75 }}
			/>
			<p style={{ fontSize: "1.1em" }}>{user?.login || "Faça uma busca!"}</p>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: "40px"
				}}
			>
				<Data title="Followers" total={user?.followers || 0} />
				<Data title="Repos" total={user?.public_repos || 0} />
				<Data title="Following" total={user?.following || 0} />
			</Box>
		</>
	);
}

export default UserInformation;
