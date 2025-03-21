/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useSectionAnimation from "../hooks/useSectionAnimation";

function Projets() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("/projets.json")
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.error("Erreur de chargement :", error));
	}, []);

	const { ref, isInView } = useSectionAnimation(0.6, false);

	return (
		<section
			className="projets"
			id="projets"
			ref={ref}
		>
			<div className="section-title">
				<h2>Projets</h2>
			</div>
			<div className="projet-container">
				{projects.map((projet) => (
					<motion.div
						key={projet.id}
						className="projet-card"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: projet.id * 0.1 }}
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
