import AboutMeCard from '../components/AboutMeCard.jsx';
import AboutMeText from '../components/AboutMeText.jsx';
import { Transition } from '@headlessui/react';

const About = () => {
	return (
		<>
			<section className="flex flex-col justify-center container mx-auto h-full mt-8">
				<Transition.Child
					className="flex flex-col items-center pb-8"
					enter="transition-all duration-2000"
					enterFrom="transform -translate-y-96 opacity-0"
					enterTo="transform translate-x-0 opacity-100"
					leave="transition-transform duration-150"
					leaveFrom="transform translate-y-0"
					leaveTo="transform -translate-y-48"
				>
					<h1 className="text-4xl font-bold text-snow">About Me</h1>
					<div className="h-1 w-20 bg-[#215675] mx-auto mt-2"></div>
				</Transition.Child>

				<div className="flex flex-col">
					<AboutMeCard />
					<AboutMeText />
				</div>
			</section>
		</>
	);
};
export default About;
