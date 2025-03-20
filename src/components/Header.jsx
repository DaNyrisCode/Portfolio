// eslint-disable-next-line no-unused-vars
import { img } from "framer-motion/client";
import IconMoon from "../assets/nouvelle-lune-100.svg?react";
import IconSun from "../assets/soleil-100.svg?react";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function Header() {
	const { isDarkMode, toggleTheme } = useTheme();
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`header ${isSticky ? "sticky" : ""}`}>
			<nav>
				<ul>
					<li>
						<a href="#home">Accueil</a>
					</li>
					<li>
						<a href="#presentation">Présentation</a>
					</li>
					<li>
						<a href="#projets">Projets</a>
					</li>
					<li>
						<a href="#competences">Compétences</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
			<button
				className="theme-toggle"
				onClick={toggleTheme}
			>
				{isDarkMode ? (
					<IconMoon className="theme-icon" />
				) : (
					<IconSun className="theme-icon" />
				)}
			</button>
		</header>
	);
}

export default Header;
