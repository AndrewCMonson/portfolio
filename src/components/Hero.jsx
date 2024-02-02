const Hero = () => {
	return (
		<>
			<section className="bg-white md:h-1/2">
				<div className="flex flex-row items-center justify-evenly container mx-auto mt-2">
					<div className="w-1/2 flex justify-center items-center ">
						<div className="p-3 flex flex-row justify-center">
							<img
								src="../src/assets/img/Personal_Avatar.JPG"
								alt="avatar"
								className="rounded-lg shadow-lg object-cover object-center max-h-96"
							/>
						</div>
					</div>
					<div className="w-1/2 flex flex-col text-center container  md:items-center">
						<div className="text-blue-gray-900 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
							I&apos;m Andrew
						</div>
						<div className="text-blue-gray-900 text-xs sm:text-sm md:text-lg md:block">
							I build full stack web apps
						</div>
						<div className="flex flex-row justify-center">
							<img
								src="../src/assets/img/react.png"
								alt="react"
								className="w-6 h-6 md:w-10 md:h-10"
							/>
							<img
								src="../src/assets/img/nodejs.png"
								alt="nodejs"
								className="-6 h-6 md:w-10 md:h-10"
							/>
							<img
								src="../src/assets/img/mongo.png"
								alt="mongo"
								className="-6 h-6 md:w-10 md:h-10"
							/>
							<img
								src="../src/assets/img/typescript.png"
								alt="typescript"
								className="-6 h-6 md:w-10 md:h-10"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Hero;
