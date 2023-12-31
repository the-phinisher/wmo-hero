import HeroesList from "./HeroesList";
import useFetch from "./useFetch";

const Home = () => {
	const {
		data: heroes,
		isPending,
		error,
	} = useFetch("http://localhost:8000/heroes");

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{heroes && (
				<HeroesList
					heroes={heroes.filter((hero) => hero.id < 5)}
					title="Top heroes!"
				/>
			)}
		</div>
	);
};

export default Home;
