import style from "./style.module.css";

type Props = {
	title: string;
	total: number;
};

function Data(props: Props) {
	return (
		<div className={style.userData}>
			<h1 className={style.userData__title}>{props.title}</h1>
			<p className={style.userData__total}>{props.total}</p>
		</div>
	);
}

export default Data;
