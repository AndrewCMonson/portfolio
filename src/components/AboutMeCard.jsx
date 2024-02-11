import IconBar from './IconBar';
import avatar from '../assets/img/avatar2.jpg';
import { Transition } from '@headlessui/react';

const AboutMeCard = () => {
	return (
		<>
			<Transition.Child
				className="min-w-80 container mx-auto flex flex-col justify-center sm:w-1/2 2xl:w-1/3 mt-8 px-8"
				enter="transition-transform duration-2000"
				enterFrom="transform translate-x-96"
				enterTo="transform translate-x-0"
				leave="transition-transform duration-150"
				leaveFrom="transform translate-y-0"
				leaveTo="transform -translate-y-48"
			>
					<div className="border-solid border-4 border-black rounded-lg overflow-hidden mx-auto">
						<img
							src={avatar}
							alt="profile"
							className="w-full h-full object-cover"
						/>
					</div>
					<IconBar />
			</Transition.Child>
		</>
	);
};
export default AboutMeCard;
