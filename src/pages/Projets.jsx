/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Projets() {
	const { isDarkMode } = useTheme();
	const [projects, setProjects] = useState([]);

	// Charger les projets depuis le JSON
	useEffect(() => {
		fetch("/public/projets.json")
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.error("Erreur de chargement :", error));
	}, []);

	return (
		<section
			className="projets"
			id="projets"
			key={isDarkMode ? "dark" : "light"}
		>
			<div className="section-title">
				<h2>Mes Projets</h2>
			</div>
			<div className="projet-container">
				{projects.map((projet) => (
					<motion.div
						key={projet.id}
						className="projet-card"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: projet.id * 0.2 }}
					>
						<img
							src={projet.image}
							alt={projet.title}
						/>
						<h3>{projet.title}</h3>
						<p>{projet.description}</p>
						<div className="buttons">
							<a
								href={projet.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-github"></i> GitHub
							</a>
							{projet.live && (
								<a
									href={projet.live}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fa-solid fa-globe"></i> Live
								</a>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default Projets;
