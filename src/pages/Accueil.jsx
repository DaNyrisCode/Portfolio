// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import useSectionAnimation from "../hooks/useSectionAnimation";

function Accueil() {
	const { isDarkMode } = useTheme();
	const { ref, isInView } = useSectionAnimation(0.6, false);

	return (
		<section
			className="hero"
			id="home"
			ref={ref}
		>
			{!isDarkMode ? (
				<img
					className="hero-img"
					src="./src/assets/feuilles-1400.avif"
					alt=""
				/>
			) : (
				<img
					className="hero-img"
					src="./src/assets/violet-1400.avif"
					alt=""
				/>
			)}
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

			<div className="buttons-container">
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					<a href="#projets">Voir mes Projets</a>
				</motion.button>

				{isDarkMode && (
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.9, duration: 0.5 }}
					>
						<a href="#passions">Mes Passions</a>
					</motion.button>
				)}
			</div>
		</section>
	);
}

export default Accueil;
