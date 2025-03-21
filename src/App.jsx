import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Presentation from "./pages/Presentation";
import Projets from "./pages/Projets";
import Competences from "./pages/Competences";

function App() {
	return (
		<>
			<Header />
			<Accueil />
			<Presentation />
			<Projets />
			<Competences />
		</>
	);
}

export default App;
