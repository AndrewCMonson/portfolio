import TechnologyBar from "./TechnologyBar";

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
				<TechnologyBar />
			</div>
		</>
	);
};
export default Hero;
