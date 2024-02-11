import react from '../assets/img/react.png';
import mongo from '../assets/img/mongo.png';
import node from '../assets/img/nodejs.png';
import typescript from '../assets/img/typescript.png';

const Hero = () => {
	return (
		<>
			<div className="flex flex-col text-center container md:items-center py-2">
				<div className="text-oxford-blue text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
					Andrew Monson
				</div>
				<div className="text-oxford-blue text-md sm:text-lg md:text-xl md:block">
					I build full stack web apps
				</div>
				<div className="flex flex-row justify-center">
					<img
						src={react}
						alt="react"
						className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
					/>
					<img
						src={node}
						alt="nodejs"
						className="-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
					/>
					<img
						src={mongo}
						alt="mongo"
						className="-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
					/>
					<img
						src={typescript}
						alt="typescript"
						className="-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
					/>
				</div>
			</div>
		</>
	);
};
export default Hero;
