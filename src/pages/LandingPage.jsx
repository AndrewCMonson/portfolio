import Hero from '../components/Hero';
import { Transition } from '@headlessui/react';

const LandingPage = () => {
	return (
		<>
			<section className="h-full flex flex-col items-center justify-center">
				<Transition
					appear={true}
					show={true}
					enter="transition-opacity duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Hero />
				</Transition>
			</section>
		</>
	);
};
export default LandingPage;
