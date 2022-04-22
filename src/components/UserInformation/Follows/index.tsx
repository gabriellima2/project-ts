import { Avatar } from "@mui/material";
import { IFollow } from "../../../context/interfaces";

import style from "./style.module.css";

type FollowsProps = {
	content: IFollow[] | undefined;
};

function Follows({ content }: FollowsProps) {
	if (!content) return null;

	return (
		<ul className={style.container}>
			{content.map((follow) => (
				<li className={style.item} key={follow.id}>
					<Avatar
						src={follow.avatar_url}
						alt={`Foto de ${follow.login}`}
						sx={{ width: 90, height: 90 }}
					/>
					<p className={style.item__username}>{follow.login}</p>
					<a
						className={style.item__link}
						target="_blank"
						href={follow.html_url}
					>
						<i className="bi bi-github"></i>
					</a>
				</li>
			))}
		</ul>
	);
}

export default Follows;
