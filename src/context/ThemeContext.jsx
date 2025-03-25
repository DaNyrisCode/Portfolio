import { createContext, useState, useContext } from "react";

/* Contexte pour basculer entre Light Mode et Dark Mode */
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Toggle entre mode clair et sombre
	const toggleTheme = () => {
		const newMode = !isDarkMode;
		setIsDarkMode(newMode);

		document.body.classList.toggle("dark-mode", newMode);

		// Remonte la page en haut si on active le mode nuit
		if (newMode) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	// Fournit isDarkMode et toggleTheme à toute l'app
	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
