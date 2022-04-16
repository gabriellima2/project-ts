import UserContainer from "../UserContainer";
import SearchBar from "../SearchBar";

function Container() {
	return (
		<main
			style={{
				width: "500px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "10px"
			}}
		>
			<SearchBar />
			<UserContainer />
		</main>
	);
}

export default Container;
