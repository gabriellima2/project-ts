import { MouseEvent } from "react";

import Follows from "../UserInformation/Follows";
import Repos from "../UserInformation/Repos";

import { IFollow, IRepo } from "../../context/interfaces";

import style from "./style.module.css";

type ModalProps = {
	type: string;
	content: {
		repos?: IRepo[];
		follows?: IFollow[];
	};
	handleModalVisibility: (type: string) => void;
	isVisible: boolean;
};

function Modal(props: ModalProps) {
	if (!props.isVisible) return null;

	return (
		<div
			className={style.container}
			onClick={() => {
				props.handleModalVisibility("close");
			}}
		>
			<div
				className={style.container__modal}
				onClick={(e: MouseEvent) => e.stopPropagation()}
			>
				<div className={style.modal__content}>
					{props.type === "Repos" ? (
						<Repos content={props.content.repos} />
					) : (
						<Follows content={props.content.follows} />
					)}
				</div>

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
