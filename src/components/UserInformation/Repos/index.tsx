import { IRepos } from "../../../context/interfaces";

import style from "./style.module.css";

type ReposProps = {
	content: IRepos[] | undefined;
};

function Repos({ content }: ReposProps) {
	if (!content) return null;

	return (
		<ul className={style.container}>
			{content.map((repo) => (
				<li className={style.item} key={repo.id}>
					<h1 className={style.item__title}>{repo.name}</h1>
					<p className={style.item__description}>{repo.description}</p>
					<a className={style.item__link} target="_blank" href={repo.html_url}>
						<i className="bi bi-github"></i>
					</a>
				</li>
			))}
		</ul>
	);
}

export default Repos;
