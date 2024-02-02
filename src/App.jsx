import Nav from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import ContactForm from './components/ContactForm.jsx';
import useScrollDirection from './hooks/useScrollDirection.js';

const App = () => {
	const scrollDirection = useScrollDirection();

	return (
		<>
			<div
				className={`sticky ${
					scrollDirection === 'down' ? '-top-24' : 'top-0'
				}`}
			>
				<Nav />
			</div>

			<div className="h-full flex flex-col bg-blue-gray-800">
				<Hero />
				<Projects />
				<section className="container mx-auto flex flex-col justify-center">
					<ContactForm />
				</section>
			</div>
		</>
	);
};
export default App;
