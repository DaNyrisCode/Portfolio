import { createContext, useState, useContext } from "react";

{
	/* Contexte pour basculer entre Light Mode et Dark Mode */
}
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Toogle pour basculer entre le mode clair et sombre
	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
		document.body.classList.toggle("dark-mode", !isDarkMode);
	};

	// Fournit isDarkMode et toggleTheme à tous les enfants du Provider
	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
