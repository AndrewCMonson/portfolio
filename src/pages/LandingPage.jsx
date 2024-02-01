import Hero from '../components/Hero.jsx';
import Projects from '../components/Projects.jsx';

const LandingPage = () => {
	return (
		<>
			<div className="h-full flex flex-col">
				<Hero />
				<Projects />
			</div>
		</>
	);
};
export default LandingPage;
