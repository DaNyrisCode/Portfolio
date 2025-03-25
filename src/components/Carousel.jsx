/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

{
	/*Carousel pour mes Passions*/
}
function Carousel({ images = [], delay = 9000 }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (images.length === 0) return;

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, delay);

		return () => clearInterval(interval);
	}, [images, delay]);

	return (
		<div className="carousel-wrapper">
			<AnimatePresence mode="wait">
				{images.length > 0 && (
					<motion.img
						key={images[currentIndex]?.src}
						src={images[currentIndex]?.src}
						alt={images[currentIndex]?.alt}
						className="carousel-image"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.5 }}
						loading="lazy"
					/>
				)}
			</AnimatePresence>

			{/* Petit dot passif */}
			<div
				className="carousel-dots"
				aria-hidden="true"
			>
				{images.map((_, index) => (
					<span
						key={index}
						className={`dot ${
							index === currentIndex ? "active" : ""
						}`}
					></span>
				))}
			</div>
		</div>
	);
}

export default Carousel;
