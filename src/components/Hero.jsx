const Hero = () => {
	return (
		<>
			<section className="md:pt-12 bg-blue-gray-900 md:h-1/2">
				<div className="flex flex-row items-center justify-evenly container mx-auto">
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
						<div className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
							I&apos;m Andrew
						</div>
						<div className="text-white text-xs sm:text-sm md:text-lg md:block">
							I build full stack web apps
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Hero;
