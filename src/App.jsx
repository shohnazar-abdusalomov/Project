import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer"
import Feedback from "./components/feedback/Feedback";
import "./App.css";
import Latest from "./components/Latest/Latest.jsx";



function App() {
	return (
		<div className="container">
			<Header/>
			<Latest/>
			<Hero/>
			<Feedback/>
			<Footer/>
		</div>
	);
}

export default App;




