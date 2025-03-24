import { useTheme } from "../context/ThemeContext";
import IconMoon from "../assets/nouvelle-lune-100.svg?react";
import IconSun from "../assets/soleil-100.svg?react";

function Footer() {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<footer className="footer">
			Designed by {!isDarkMode ? "Marina" : "Nyris"}
			<button
				className="theme-toggle"
				onClick={toggleTheme}
			>
				{!isDarkMode ? (
					<IconMoon className="theme-icon" />
				) : (
					<IconSun className="theme-icon" />
				)}
			</button>
		</footer>
	);
}

export default Footer;
