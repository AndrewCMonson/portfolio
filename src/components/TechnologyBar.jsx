import react from '../assets/img/react.png';
import mongo from '../assets/img/mongo.png';
import node from '../assets/img/nodejs.png';
import typescript from '../assets/img/typescript.png';

const TechnologyBar = () => {
	return (
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
	);
};
export default TechnologyBar;
