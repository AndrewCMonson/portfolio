import Hero from '../components/Hero';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Button } from '@material-tailwind/react';

const LandingPage = () => {
	const [clicked, setClicked] = useState(false);

	const navigate = useNavigate();

	const handleClick = event => {
		event.preventDefault();

		setTimeout(() => {
			navigate('/about');
		}, 2000);

		setClicked(true);
	};

	return (
		<>
			<section className="h-full flex flex-col items-center justify-center">
				<Transition
					appear={true}
					show={true}
					enter="transition-all duration-2000"
					enterFrom="transform -translate-y-48 opacity-0"
					enterTo="transform translate-y-0 opacity-100"
					leave="transition-all duration-150"
					leaveFrom="transform translate-y-0 opacity-100"
					leaveTo="transform -translate-y-48 opacity-0"
				>
					<div
						className={`container mx-auto flex flex-col items-center justify-center ${
							clicked
								? 'transition-all duration-2000 transform -translate-y-96 opacity-0'
								: ''
						}`}
					>
						<Hero />
						<div className="">
								<Button
									variant="outlined"
									ripple={true}
									size="sm"
									onClick={handleClick}
									className='text-snow border-snow hover:bg-snow hover:text-oxford-blue'
								>
									See my Portfolio
								</Button>
						</div>
					</div>
				</Transition>
			</section>
		</>
	);
};
export default LandingPage;
