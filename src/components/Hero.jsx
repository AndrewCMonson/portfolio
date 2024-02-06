import react from '../assets/img/react.png';
import mongo from '../assets/img/mongo.png';
import node from '../assets/img/nodejs.png';
import typescript from '../assets/img/typescript.png';
import { Button } from '@material-tailwind/react';
import { Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
	const [clicked, setClicked] = useState(false);

	const navigate = useNavigate();

	const handleClick = event => {
		event.preventDefault();

		setTimeout(() => {
			navigate('/projects');
		}, 2000);

		setClicked(true);
	};

	return (
		<>
			<section className="py-12 px-6 h-full">
				<Transition.Child
					enter="transition-transform duration-2000"
					enterFrom="transform -translate-y-48"
					enterTo="transform translate-y-0"
					leave="transition-transform duration-150"
					leaveFrom="transform translate-y-0"
					leaveTo="transform -translate-y-48"
				>
					<div
						className={`container mx-auto ${
							clicked
								? 'transition-all duration-2000 transform -translate-y-96 opacity-0'
								: ''
						}`}
					>
						<div className="flex flex-col text-center container  md:items-center">
							<div className="text-blue-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
									<Button
										href="/projects"
										variant='outlined'
										ripple={true}
										size="sm"
										onClick={handleClick}
									>
										See my Portfolio
									</Button>
								</a>
							</div>
						</div>
					</div>
				</Transition.Child>
				
			</section>
		</>
	);
};
export default Hero;
