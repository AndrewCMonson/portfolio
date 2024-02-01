import { Typography } from "@material-tailwind/react";


const Hero = () => {
  return (
		<>
			<div className="flex flex-row items-center justify-center bg-blue-gray-900">
				<div className=" w-1/2">
					<div className="p-3">
						<img
							src="../src/assets/img/Personal_Avatar.JPG"
							alt="avatar"
							className="rounded-lg shadow-lg mx-auto  w-3/4 h-3/4 lg:w-1/2 lg:h-1/2"
						/>
					</div>
				</div>
				<div className="w-1/2 flex flex-col text-center container">
					<div className="text-white xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl">
						I&apos;m Andrew
					</div>
					<Typography variant="small" color="white" className=" md:block">
						I build web applications
					</Typography>
				</div>
			</div>
		</>
	);
}
export default Hero