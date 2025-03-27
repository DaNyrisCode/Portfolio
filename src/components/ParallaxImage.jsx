/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

function ParallaxImage({ src, alt }) {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

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
		<motion.div
			className="image-container"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, delay: 0.3 }}
		>
			<motion.img
				src={src}
				alt={alt}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				animate={{ rotateX, rotateY }}
				transition={{ type: "spring", stiffness: 900, damping: 90 }}
			/>
		</motion.div>
	);
}

export default ParallaxImage;
