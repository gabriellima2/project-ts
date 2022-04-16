import { useState, useContext } from "react";

import { AxiosResponse } from "axios";

import Box from "@mui/material/Box";

import Input from "./Input";
import Button from "./Button";

import { InputChange, KeyDown } from "./types";

import { UserContext } from "../../context/User";
import defaultStyle from "../../style/default";
import api from "../../services/api";

function SearchBar() {
	const [value, setValue] = useState("");
	const { searchResult } = useContext(UserContext);

	const handleChange = (e: InputChange) => setValue(e.target.value);

	const handleKeyDown = ({ key }: KeyDown) => {
		if (key !== "Enter") return;

		handleSearch();
	};

	const handleSearch = async () => {
		if (!value) return;

		try {
			const response: AxiosResponse = await api.get(`/users/${value}`);

			searchResult(response.data);
		} catch (err) {
			console.error(err);
		}

		setValue("");
	};

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				gap: "10px",
				padding: "10px 20px",
				borderTopLeftRadius: `${defaultStyle.border}`,
				borderTopRightRadius: `${defaultStyle.border}`,
				backgroundColor: `${defaultStyle.bgColor}`
			}}
		>
			<Input
				value={value}
				handleChange={handleChange}
				handleKeyDown={handleKeyDown}
			/>
			<Button handleSearch={handleSearch} />
		</Box>
	);
}

export default SearchBar;
