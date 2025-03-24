/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
	const [messageSent, setMessageSent] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("https://formspree.io/f/xqapbdwk", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			setMessageSent(true);
			setFormData({ name: "", email: "", message: "" });
		}
	};

	return (
		<section
			className="contact"
			id="contact"
		>
			<div className="section-title">
				<h2>Contact</h2>
			</div>

			{messageSent ? (
				<motion.p
					className="confirmation-message"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					Merci pour votre message 💌 Je vous répondrai très vite !
				</motion.p>
			) : (
				<form
					className="contact-form"
					onSubmit={handleSubmit}
				>
					<motion.div
						className="form-group"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<label htmlFor="name">Nom</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							placeholder="Votre nom"
						/>
					</motion.div>

					<motion.div
						className="form-group"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							placeholder="Votre email"
						/>
					</motion.div>

					<motion.div
						className="form-group"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							value={formData.message}
							onChange={handleChange}
							required
							placeholder="Votre message"
						></textarea>
					</motion.div>

					<motion.button
						type="submit"
						className="submit-btn"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Envoyer
					</motion.button>
				</form>
			)}
		</section>
	);
}

export default Contact;
