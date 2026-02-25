import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer"
import "./App.css";
import Latest from "./components/Latest/Latest.jsx";



function App() {
	return (
		<div className="container">
			<Header/>
			<Latest/>
			<Hero/>
			<Footer/>
		</div>
	);
}

export default App;




