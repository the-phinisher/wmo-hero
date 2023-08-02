import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Heroes from "./Heroes";
import { Router, Route, Switch } from "wouter";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<div className="content">
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route exact path="/heroes">
						<Heroes />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
