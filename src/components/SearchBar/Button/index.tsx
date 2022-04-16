import style from "./style.module.css";

type Props = {
	handleSearch: () => void;
};

function Button(props: Props) {
	return (
		<button className={style.button} onClick={props.handleSearch}>
			<i className={`bi bi-search ${style.button__icon}`}></i>
		</button>
	);
}

export default Button;
