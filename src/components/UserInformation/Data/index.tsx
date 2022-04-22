import { useState } from "react";
import { IFollows, IRepos } from "../../../context/interfaces";

import Modal from "../../Modal";

import style from "./style.module.css";

type Props = {
	title: string;
	total: number;
	content: {
		repos?: IRepos[];
		follows?: IFollows[];
	};
};

function Data(props: Props) {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const handleModalVisibility = (type: string) => {
		if (type === "close") return setModalIsVisible(false);

		if (type === "open") return setModalIsVisible(true);
	};

	return (
		<>
			<button
				disabled={props.content.repos || props.content.follows ? false : true}
				className={style.userData}
				onClick={() => handleModalVisibility("open")}
			>
				<h1 className={style.userData__title}>{props.title}</h1>
				<p className={style.userData__total}>{props.total}</p>
			</button>

			<Modal
				type={props.title}
				content={props.content}
				isVisible={modalIsVisible}
				handleModalVisibility={handleModalVisibility}
			/>
		</>
	);
}

export default Data;
