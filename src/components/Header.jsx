import { useState, useEffect } from "react";

function Header() {
	const [isSticky, setIsSticky] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	return (
		<header className={`header ${isSticky ? "sticky" : ""}`}>
			<div className="nav-wrapper">
				<button
					className="hamburger"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Menu"
				>
					<span className={`bar ${menuOpen ? "open" : ""}`}></span>
					<span className={`bar ${menuOpen ? "open" : ""}`}></span>
					<span className={`bar ${menuOpen ? "open" : ""}`}></span>
				</button>

				<nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
					<ul>
						<li>
							<a
								href="#home"
								onClick={handleLinkClick}
							>
								Accueil
							</a>
						</li>
						<li>
							<a
								href="#presentation"
								onClick={handleLinkClick}
							>
								Présentation
							</a>
						</li>
						<li>
							<a
								href="#projets"
								onClick={handleLinkClick}
							>
								Projets
							</a>
						</li>
						<li>
							<a
								href="#competences"
								onClick={handleLinkClick}
							>
								Compétences
							</a>
						</li>
						<li>
							<a
								href="#contact"
								onClick={handleLinkClick}
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
