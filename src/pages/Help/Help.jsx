import { NavLink, Outlet } from "react-router-dom";

import "./styles.scss"

function Help() {
	return (
		<div className="help-page">
			<h1>Help Page</h1>

			<nav>
				<NavLink to="add">Adding Tasks</NavLink> |{" "}
				<NavLink to="remove">Removing Tasks</NavLink> |{" "}
				<NavLink to="change">Changing Status</NavLink>
			</nav>

			<hr />

			<Outlet />
		</div>
	);
}

export default Help;