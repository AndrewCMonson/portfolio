import react from '../assets/img/react.png';
import mongo from '../assets/img/mongo.png';
import node from '../assets/img/nodejs.png';
import typescript from '../assets/img/typescript.png';

const Hero = () => {
	return (
		<>
				<div className="flex flex-col text-center container md:items-center py-2">
					<div className="text-blue-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						I&apos;m Andrew
					</div>
					<div className="text-blue-gray-900 text-xs sm:text-sm md:text-lg md:block">
						I build full stack web apps
					</div>
					<div className="flex flex-row justify-center">
						<img src={react} alt="react" className="w-6 h-6 md:w-10 md:h-10" />
						<img src={node} alt="nodejs" className="-6 h-6 md:w-10 md:h-10" />
						<img src={mongo} alt="mongo" className="-6 h-6 md:w-10 md:h-10" />
						<img
							src={typescript}
							alt="typescript"
							className="-6 h-6 md:w-10 md:h-10"
						/>
					</div>
				</div>
		</>
	);
};
export default Hero;
