import { MouseEvent } from "react";
import { IFollows, IRepos } from "../../context/interfaces";
import Follows from "../UserInformation/Follows";
import Repos from "../UserInformation/Repos";

import style from "./style.module.css";

type ModalProps = {
	type: string;
	content: {
		repos?: IRepos[];
		follows?: IFollows[];
	};
	handleModalVisibility: (type: string) => void;
	isVisible: boolean;
};

function Modal(props: ModalProps) {
	if (!props.isVisible) return null;

	return (
		<div
			className={style.container}
			onClick={(e: MouseEvent) => {
				e.stopPropagation();
				props.handleModalVisibility("close");
			}}
		>
			<div className={style.container__modal}>
				{props.type === "Repos" ? (
					<Repos content={props.content.repos} />
				) : (
					<Follows content={props.content.follows} />
				)}
				<button
					className={style.modal__button}
					onClick={() => props.handleModalVisibility("close")}
				>
					<i className="bi bi-x-circle"></i>
				</button>
			</div>
		</div>
	);
}

export default Modal;
