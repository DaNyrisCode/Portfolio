import { useTheme } from "../context/ThemeContext";
import IconMoon from "../assets/nouvelle-lune-100.svg?react";
import IconSun from "../assets/soleil-100.svg?react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
	const { isDarkMode, toggleTheme } = useTheme();
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<p className="footer-text">
				Un site façonné avec soin et créativité. Merci pour votre
				attention.
			</p>

			<div className="footer-links">
				<a
					href="https://github.com/DaNyrisCode?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<FaGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/marina-k-nyris/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<FaLinkedin />
				</a>
			</div>

			<p className="footer-signature">
				© {year} {!isDarkMode ? "Marina" : "Nyris"} – Tous droits
				réservés
			</p>

			<button
				className="theme-toggle"
				onClick={toggleTheme}
				aria-label="Changer le thème visuel du site"
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
