import AboutMeCard from '../components/AboutMeCard.jsx';
import AboutMeText from '../components/AboutMeText.jsx';

const About = () => {
	return (
		<>
			<section className="flex flex-col container mx-auto h-full mt-8">
				<h1 className="text-4xl font-bold text-center">About Me</h1>
				<div className="h-1 w-20 bg-[#333333] mx-auto mt-2"></div>
				<div className='flex flex-col md:flex-row'>
					<AboutMeCard />
					<AboutMeText />
				</div>
			</section>
		</>
	);
};
export default About;
