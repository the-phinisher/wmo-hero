import { Link } from "react-router-dom";

const HeroesList = ({ heroes, title }) => {
	return (
		<div className="heroes">
			<h2>{title}</h2>
			{heroes.map((hero) => (
				<Link to={`/heroes/${hero.id}`} key={hero.id}>
					<div className="hero-preview">
						<h2>{hero.name}</h2>
					</div>
				</Link>
			))}
		</div>
	);
};

export default HeroesList;
