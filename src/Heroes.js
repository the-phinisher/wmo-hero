import HeroesList from "./HeroesList";
import useFetch from "./useFetch";

const Heroes = () => {
	const {
		data: heroes,
		isPending,
		error,
	} = useFetch("http://localhost:8000/heroes");

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{heroes && <HeroesList heroes={heroes} title="All heroes!" />}
		</div>
	);
};

export default Heroes;
