import Nav from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
	return (
		<>
			<div>
				<Nav />
			</div>
			<div className="h-full flex flex-col">
				<Hero />
				<Projects />
				<ContactForm />
				<Footer />
			</div>
		</>
	);
};
export default App;
