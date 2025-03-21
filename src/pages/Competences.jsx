/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import useSectionAnimation from "../hooks/useSectionAnimation";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";

function Competences() {
	const { ref, isInView } = useSectionAnimation(0.7, false);
	const [skills, setSkills] = useState({ hardSkills: [], softSkills: [] });

	useEffect(() => {
		fetch("/skills.json")
			.then((response) => response.json())
			.then((data) => setSkills(data))
			.catch((error) => console.error("Erreur de chargement :", error));
	}, []);

	const getIcon = (iconName) => {
		return (
			FaIcons[iconName] || SiIcons[iconName] || MdIcons[iconName] || null
		);
	};

	return (
		<section
			className="competences"
			id="competences"
			ref={ref}
		>
			<div className="section-title">
				<h2>Compétences</h2>
			</div>

			{/* Hard Skills */}
			<div className="hard-skills-container">
				<h3>Hard Skills</h3>
				<motion.div
					className="tech-skills"
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: 1 }}
				>
					{skills.hardSkills.map((skill, index) => {
						const IconComponent = getIcon(skill.icon);
						return (
							<motion.div
								key={index}
								className="skill"
							>
								{IconComponent && (
									<IconComponent
										className="icon"
										style={{ color: skill.color }}
									/>
								)}
								<span>{skill.name}</span>
							</motion.div>
						);
					})}
				</motion.div>
			</div>

			{/* Soft Skills */}
			<div className="soft-skills-container">
				<h3>Soft Skills</h3>
				<motion.div
					className="soft-skills-grid"
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, delay: 0.3 }}
				>
					{skills.softSkills.map((skill, index) => {
						const IconComponent = getIcon(skill.icon);
						return (
							<motion.div
								key={index}
								className="soft-skill-card"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div className="icon-wrapper">
									{IconComponent && (
										<IconComponent className="soft-skill-icon" />
									)}
								</div>
								<h4>{skill.name}</h4>
								<p>{skill.description}</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

export default Competences;
