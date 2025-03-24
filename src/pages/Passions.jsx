/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Passions() {
	const { isDarkMode } = useTheme();

	if (!isDarkMode) return null;

	return (
		<section
			className="passions"
			id="passions"
		>
			<div className="section-title">
				<h2>Mes Passions</h2>
				<p>Bienvenue dans mon univers créatif et ludique 💫</p>
			</div>

			<div className="passion-content">
				<motion.div
					className="passion-block"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h3>🎨 Le Dessin</h3>
					<p>
						Depuis toujours, le dessin est mon échappatoire. Crayon,
						aquarelle, encre... chaque trait raconte une histoire.
						Cette sensibilité visuelle me pousse à créer des
						interfaces harmonieuses et sensibles.
					</p>
					{/* Tu peux mettre une galerie ou une image ici plus tard */}
				</motion.div>

				<motion.div
					className="passion-block"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<h3>🎮 Satisfactory</h3>
					<p>
						J'adore les jeux de construction, de logique et
						d’optimisation. Satisfactory est un parfait mélange
						entre créativité, rigueur et organisation. Il stimule la
						réflexion, l'efficacité et la gestion de systèmes
						complexes — un vrai terrain d'entraînement pour l'esprit
						d’un développeur !
					</p>
					{/* Optionnel : capture d’écran ou lien vers le jeu */}
				</motion.div>
			</div>
		</section>
	);
}

export default Passions;
