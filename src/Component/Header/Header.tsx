import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
	// const navRef = useRef<HTMLElement|null>(null);

	// const showNavbar = () => {
	// 	navRef.current.classList.toggle(
	// 		"responsive_nav"
	// 	);
	// };

	return (
		<header>
			<h3>Exchange Rate Date Picker</h3>
			<nav >
				<a href="/home">Home</a>
				<a href="/calender">Calender</a>
                <a href="/details">Details</a>

				
				
				<button
					className="nav-btn nav-close-btn"
					>
					<FaTimes />
                    
				</button>
			</nav>
          
			<button
				className="nav-btn"
				>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;