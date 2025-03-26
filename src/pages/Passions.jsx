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
						Depuis toujours, le dessin est mon refuge et mon terrain
						de jeu créatif. C’est à travers lui que j'exprime mes
						émotions et raconte des histoires. Cette sensibilité
						artistique influence ma manière d’aborder le Web design,
						entre harmonie, douceur et fluidité. Inspirée par la
						nature, je révèle sa beauté sur un bout de papier.
					</p>
				</div>
				<Carousel images={slides.dessin} />
			</div>

			<div className="passion-block reverse">
				<div className="text">
					<h3>Jeux Vidéo</h3>
					<p>
						Tombée dans les jeux vidéo quand j’étais petite, j’y ai
						trouvé un terrain propice pour nourrir ma curiosité, ma
						logique et mon sens du détail. Des titres comme
						Satisfactory stimulent mon goût pour l’optimisation, la
						gestion de flux et l’analyse. Les jeux en coopération,
						quant à eux, m’ont appris à collaborer, à communiquer
						efficacement et à penser en équipe. Ces expériences
						m’inspirent dans le code, où chaque défi devient une
						mission à relever avec créativité, méthode et agilité.
					</p>
				</div>
				<Carousel images={slides.jeux} />
			</div>
		</section>
	);
}

export default Passions;
