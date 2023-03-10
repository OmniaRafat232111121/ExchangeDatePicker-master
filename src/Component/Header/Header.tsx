import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
	return (
		<header>
			<h3>
				<a href="/">
				Exchange Rate Date Picker
				</a>
			</h3>
			
          
			<button
				className="nav-btn"
				>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;