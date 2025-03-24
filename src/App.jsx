import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Presentation from "./pages/Presentation";
import Passions from "./pages/Passions";
import Projets from "./pages/Projets";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Accueil />
			<Presentation />
			<Passions />
			<Projets />
			<Competences />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
