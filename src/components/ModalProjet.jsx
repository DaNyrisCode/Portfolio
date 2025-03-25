/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { X } from "lucide-react";
import skills from "../../public/skills.json";

function ModalProjet({ projet, onClose }) {
	const [iconMap, setIconMap] = useState({});

	useEffect(() => {
		// Construction des icônes en fonction des noms
		const map = {};
		skills.hardSkills.forEach((skill) => {
			const iconSet = skill.icon.startsWith("Fa")
				? FaIcons
				: skill.icon.startsWith("Si")
				? SiIcons
				: MdIcons;

			map[skill.name.toLowerCase()] = {
				Icon: iconSet[skill.icon],
				color: skill.color,
			};
		});
		setIconMap(map);
	}, []);

	{
		/* Gestion fermeture modal */
	}
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [onClose]);

	if (!projet) return null;

	return (
		<AnimatePresence>
			{/* Fond derrière la modale */}
			<motion.div
				className="modal-backdrop"
				onClick={onClose}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{/* Contenu principal de la modale */}
				<motion.div
					className="modal-content"
					onClick={(e) => e.stopPropagation()}
					initial={{ y: "-20%", opacity: 0 }}
					animate={{ y: "0%", opacity: 1 }}
					exit={{ y: "-20%", opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{/* Bouton de fermeture */}
					<button
						className="close-btn"
						onClick={onClose}
						aria-label="Fermer"
					>
						<X size={24} />
					</button>

					{/* Image et titre du projet */}
					<img
						src={projet.image}
						alt={projet.title}
					/>
					<h3>{projet.title}</h3>
					<p className="modal-description">{projet.details}</p>

					{/* Icônes des technologies utilisées */}
					<div className="technos">
						{projet.technos?.map((tech, index) => {
							const techData = iconMap[tech.toLowerCase()];
							if (!techData) return null;
							const { Icon, color } = techData;
							return (
								<Icon
									key={index}
									title={tech}
									style={{ color, fontSize: "2rem" }}
								/>
							);
						})}
					</div>

					{/* Liens externes vers GitHub et site en ligne */}
					<div className="modal-links">
						<a
							href={projet.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Lien GitHub du projet ${projet.title}`}
						>
							<i className="fa-brands fa-github"></i> GitHub
						</a>
						{projet.live && (
							<a
								href={projet.live}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Lien GitHub Pages du projet ${projet.title}`}
							>
								<i className="fa-solid fa-globe"></i> Live
							</a>
						)}
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

export default ModalProjet;
