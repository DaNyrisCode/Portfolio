/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Presentation from "../pages/Presentation";
import { ThemeProvider } from "../context/ThemeContext";

test("Affiche le titre de la section Présentation", () => {
	render(
		<ThemeProvider>
			<Presentation />
		</ThemeProvider>
	);

	const titre = screen.getByRole("heading", { name: /qui suis-je/i });
	expect(titre).toBeInTheDocument();
});
