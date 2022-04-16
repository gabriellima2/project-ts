import Container from "@mui/material/Container";

import UserInformation from "../UserInformation";

import defaultStyle from "../../style/default";

function UserContainer() {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "25px",
				padding: "40px 20px",
				borderBottomLeftRadius: `${defaultStyle.border}`,
				borderBottomRightRadius: `${defaultStyle.border}`,
				backgroundColor: `${defaultStyle.bgColor}`
			}}
		>
			<UserInformation />
		</Container>
	);
}

export default UserContainer;
