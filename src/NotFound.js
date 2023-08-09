import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<h2>This page doesn't exist</h2>
			<p>This page wasn't found</p>
			<Link to="/">
				<button>Go back to homepage</button>
			</Link>
		</div>
	);
};

export default NotFound;
