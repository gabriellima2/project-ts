import TextField from "@mui/material/TextField";

import { InputChange, KeyDown } from "../types";

type Props = {
	value: string;
	handleChange: (e: InputChange) => void;
	handleKeyDown: (e: KeyDown) => void;
};

function Input(props: Props) {
	return (
		<TextField
			label="Username"
			variant="standard"
			size="small"
			autoFocus={true}
			fullWidth={true}
			value={props.value}
			onChange={props.handleChange}
			onKeyDown={props.handleKeyDown}
			sx={{
				input: { color: "#fff", padding: "3px 10px" },
				label: { color: "#ffffff8b", padding: "0px 10px" }
			}}
		/>
	);
}

export default Input;
