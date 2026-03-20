import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
	return (
		<header className='header'>
			<div className='title'>Todo App</div>

			<nav className='menu'>
				<NavLink
					to='/'
					className={({ isActive }) => (isActive ? "active" : "")}>
					Home
				</NavLink>
				<NavLink to='/add'>Add Task</NavLink>
				<NavLink to='/help'>Help</NavLink>
			</nav>
		</header>
	);
}

export default Header;
