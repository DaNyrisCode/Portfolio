// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import greenbg from "../assets/feuilles-1400.avif";
import purplebg from "../assets/violet-1400.avif";
import useSectionAnimation from "../hooks/useSectionAnimation";

function Accueil() {
	const { isDarkMode } = useTheme();
	const { ref, isInView } = useSectionAnimation(0.7, false);

	return (
		<section
			className="hero"
			id="home"
			ref={ref}
		>
			{/* Fond decran */}
			<picture className="hero-img">
				<source
					srcSet={
						!isDarkMode ? "/feuilles-800.avif" : "/violet-800.avif"
					}
					media="(max-width: 768px)"
					type="image/avif"
				/>
				<img
					src={!isDarkMode ? greenbg : purplebg}
					alt="Fond décoratif de l'accueil"
					loading="lazy"
					decoding="async"
				/>
			</picture>

			{/* Phrases d'accueil */}
			<div className="hero-content">
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
				>
					{!isDarkMode
						? "Marina, Développeuse Web qui allie sa passion pour le Dessin au Code."
						: "Bienvenue dans mon univers, où chaque ligne de code raconte une histoire."}
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 0.3, duration: 1 }}
				>
					{!isDarkMode
						? "Bienvenue sur mon portfolio ! Découvrez mes projets."
						: "N'hésitez pas à consulter mes projets et mes passions."}
				</motion.p>
			</div>

			{/* Boutons Projets & Passions*/}
			<div className="buttons-container">
				<motion.a
					href="#projets"
					className="btn-link"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					Mes Projets
				</motion.a>

				{isDarkMode && (
					<motion.a
						href="#passions"
						className="btn-link"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.6, duration: 0.5 }}
					>
						Mes Passions
					</motion.a>
				)}
			</div>
		</section>
	);
}

export default Accueil;
