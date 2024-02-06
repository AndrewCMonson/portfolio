import react from '../assets/img/react.png';
import mongo from '../assets/img/mongo.png';
import node from '../assets/img/nodejs.png';
import typescript from '../assets/img/typescript.png';
import { Button } from '@material-tailwind/react';
import { Transition } from '@headlessui/react';


const Hero = () => {
	return (
		<>
			<Transition
				appear={true}
				show={true}
				enter="transition ease-in-out duration-1000 transform"
				enterFrom="translate-x-full translate-y-full"
				enterTo="translate-x-0"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<section className="bg-white py-12 px-6">
					<div className="container mx-auto">
						<div className="flex flex-col text-center container  md:items-center">
							<div className="text-blue-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
								I&apos;m Andrew
							</div>
							<div className="text-blue-gray-900 text-xs sm:text-sm md:text-lg md:block">
								I build full stack web apps
							</div>
							<div className="flex flex-row justify-center">
								<img
									src={react}
									alt="react"
									className="w-6 h-6 md:w-10 md:h-10"
								/>
								<img
									src={node}
									alt="nodejs"
									className="-6 h-6 md:w-10 md:h-10"
								/>
								<img
									src={mongo}
									alt="mongo"
									className="-6 h-6 md:w-10 md:h-10"
								/>
								<img
									src={typescript}
									alt="typescript"
									className="-6 h-6 md:w-10 md:h-10"
								/>
							</div>
							<div className="py-4">
								<a
									href="/projects"
									className="text-blue-gray-900 text-xs sm:text-sm md:text-lg md:block"
								>
									<Button variant="outlined" ripple={true} size="sm">
										See my Portfolio
									</Button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</Transition>
		</>
	);
};
export default Hero;
