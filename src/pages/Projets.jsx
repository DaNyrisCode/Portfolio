/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useSectionAnimation from "../hooks/useSectionAnimation";
import ModalProjet from "../components/ModalProjet";

function Projets() {
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		fetch("/projets.json")
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.error("Erreur de chargement :", error));
	}, []);

	const { ref, isInView } = useSectionAnimation(0.2, false);

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
				{/* Mes Projets */}
				{projects.map((projet) => (
					<motion.div
						key={projet.id}
						className="projet-card"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: projet.id * 0.1 }}
						onClick={() => setSelectedProject(projet)}
					>
						<img
							src={projet.image}
							alt={`Image du projet ${projet.title}`}
							loading="lazy"
						/>
						<h3>{projet.title}</h3>
						<p>{projet.description}</p>
					</motion.div>
				))}
			</div>
			{/* Modal pour description du projet */}
			<ModalProjet
				projet={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
}

export default Projets;
