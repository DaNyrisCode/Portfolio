/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

{
	/* Section Passions visible qu'en Dark Mode */
}
function Passions() {
	const { isDarkMode } = useTheme();
	const [slides, setSlides] = useState({ dessin: [], jeux: [] });

	useEffect(() => {
		fetch("/passions.json")
			.then((res) => res.json())
			.then((data) => setSlides(data))
			.catch((err) => console.error("Erreur chargement passions :", err));
	}, []);

	if (!isDarkMode) return null;

	return (
		<section
			className="passions"
			id="passions"
		>
			<div className="section-title">
				<h2>Passions</h2>
			</div>

			<div className="passion-block">
				<div className="text">
					<h3>Dessin</h3>
					<p>
						Depuis toujours, j’aime m’exprimer à travers le dessin.
						C’est un moyen d’explorer des univers, raconter des
						émotions, et libérer ma créativité. Passionée par la
						nature, je révèle sa beauté sur un bout de papiers.
					</p>
				</div>
				<Carousel images={slides.dessin} />
			</div>

			<div className="passion-block reverse">
				<div className="text">
					<h3>Jeux Vidéo</h3>
					<p>
						Les jeux m’accompagnent depuis toujours. Satisfactory,
						notamment, est un jeu de logique et de gestion qui
						stimule l’analyse, l’optimisation, et la créativité.
						Ainsi que de nombreux jeux Coop qui me permettent de
						développer mes compétences en collaboration.
					</p>
				</div>
				<Carousel images={slides.jeux} />
			</div>
		</section>
	);
}

export default Passions;
