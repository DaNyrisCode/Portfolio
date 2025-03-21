// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useSectionAnimation from "../hooks/useSectionAnimation"; // ✅ Import du hook
import img1 from "../assets/daymode-500.avif";
import img2 from "../assets/darkmode-500.avif";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

function Presentation() {
	const { isDarkMode } = useTheme();
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	const { ref, isInView } = useSectionAnimation(0.7, false);

	const handleMouseMove = (e) => {
		const { width, height, left, top } =
			e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 10;
		const y = (e.clientY - top - height / 2) / 10;

		setRotateX(-y);
		setRotateY(x);
	};

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
						? "Je suis Marina, une développeuse web passionnée par le design et le code. Mon objectif est de créer des interfaces modernes, fluides et accessibles. J’aime explorer de nouvelles technologies et allier ma passion pour l’art au développement."
						: "Je suis Nyris, une développeuse web et exploratrice du numérique, toujours en quête d’innovation et d’expériences immersives. Passionnée par le code, l’art et les univers fantastiques, j’aime façonner des interfaces modernes où design et technologie se rencontrent. Curieuse et créative, j’aime expérimenter pour concevoir des expériences uniques, alliant interactivité, fluidité et esthétisme."}
				</motion.p>
			</div>

			<motion.div
				className="image-container"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={isInView ? { opacity: 1, scale: 1 } : {}}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
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
