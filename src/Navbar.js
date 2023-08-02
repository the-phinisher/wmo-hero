const Navbar = () => {
	return (
		<nav
			className="navbar"
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
			}}
		>
			<h1
				style={{
					textAlign: "left",
				}}
			>
				Tour of Heroes
			</h1>
			<div
				className="links"
				style={{
					width: "fit-content",
				}}
			>
				<a href="/">Dashboard</a>
				<a href="/heroes">Heroes</a>
			</div>
		</nav>
	);
};

export default Navbar;
