// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useSectionAnimation from "../hooks/useSectionAnimation";
import img1 from "../assets/daymode-500.avif";
import img2 from "../assets/darkmode-500.avif";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

function Presentation() {
	const { isDarkMode } = useTheme();
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	const { ref, isInView } = useSectionAnimation(0.7, false);

	{
		/* Suivis de la souris rotation/parallax */
	}
	const handleMouseMove = (e) => {
		const { width, height, left, top } =
			e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 10;
		const y = (e.clientY - top - height / 2) / 10;

		setRotateX(-y);
		setRotateY(x);
	};

	{
		/* Reset du Suivis*/
	}
	const handleMouseLeave = () => {
		setRotateX(0);
		setRotateY(0);
	};

	return (
		<section
			className="presentation"
			id="presentation"
			ref={ref}
		>
			<div className="section-title">
				<h2>Présentation</h2>
			</div>

			<div className="content">
				<motion.h3
					initial={{ opacity: 0, x: -50 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 1 }}
				>
					Qui suis-je ?
				</motion.h3>

				<motion.p
					initial={{ opacity: 0, x: 50 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 1, delay: 0.3 }}
				>
					{!isDarkMode
						? "Je suis Marina, développeuse front-end passionnée par le design, le code et l’expérience utilisateur. J’aime créer des interfaces modernes, épurées et accessibles, où l’esthétique se met au service de la fluidité. Curieuse et investie, je mets ma créativité au cœur de chaque projet pour concevoir des expériences à la fois techniques et intuitives."
						: "Je suis Nyris, exploratrice du web et artisane du numérique. Inspirée par la nature, les jeux vidéo et les mondes imaginaires, j’aime créer des interfaces qui racontent une histoire. Chaque projet est pour moi une opportunité d’apprendre, d’expérimenter et de mêler code, créativité et esthétique. Mon objectif : concevoir des expériences web simples, sensibles et immersives."}
				</motion.p>
			</div>

			<motion.div
				className="image-container"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={isInView ? { opacity: 1, scale: 1 } : {}}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				{/* Parallax */}
				<motion.img
					src={!isDarkMode ? img1 : img2}
					alt="Nyris"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					animate={{ rotateX, rotateY }}
					transition={{ type: "spring", stiffness: 900, damping: 90 }}
				/>
			</motion.div>
		</section>
	);
}

export default Presentation;
