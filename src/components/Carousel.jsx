/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel({ images = [], delay = 9000 }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, delay);

		return () => clearInterval(interval);
	}, [images.length, delay]);

	return (
		<div className="carousel-wrapper">
			<AnimatePresence mode="wait">
				<motion.img
					key={images[currentIndex]?.src}
					src={images[currentIndex]?.src}
					alt={images[currentIndex]?.alt}
					className="carousel-image"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5 }}
				/>
			</AnimatePresence>
		</div>
	);
}

export default Carousel;
