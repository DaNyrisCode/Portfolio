// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Accueil() {
	const { isDarkMode } = useTheme();

	return (
		<section
			className="hero"
			key={isDarkMode ? "dark" : "light"}
		>
			<motion.h1
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				{!isDarkMode
					? "Marina, Développeuse Web qui allie sa passion pour le Dessin au Code."
					: "Bienvenue dans mon univers, où chaque ligne de code raconte une histoire."}
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
			>
				{!isDarkMode
					? "Bienvenue sur mon portfolio ! Découvrez mes projets."
					: "N'hésitez pas à consulter mes projets et mes passions."}
			</motion.p>

			<div className="buttons-container">
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1, duration: 0.5 }}
				>
					Voir mes Projets
				</motion.button>

				{isDarkMode && (
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.5, duration: 0.5 }}
					>
						Mes Passions
					</motion.button>
				)}
			</div>
		</section>
	);
}

export default Accueil;
