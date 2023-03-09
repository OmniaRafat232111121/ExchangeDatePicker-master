import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
	return (
		<header>
			<h3>Exchange Rate Date Picker</h3>
			
          
			<button
				className="nav-btn"
				>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;