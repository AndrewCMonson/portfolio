import Nav from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import ContactForm from './components/ContactForm.jsx';
import useScrollDirection from './hooks/useScrollDirection.js';
import Footer from './components/Footer.jsx';

const App = () => {
	const scrollDirection = useScrollDirection();

	return (
		<>
			<div
				className={`sticky ${scrollDirection === 'down' ? '-top-24' : 'top-0'}`}
			>
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
