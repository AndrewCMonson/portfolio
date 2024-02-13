import ContactForm from '../components/ContactForm';
import { Transition } from '@headlessui/react';

const ContactPage = () => {
	return (
		<>
			<Transition.Child
				appear={true}
				show={true}
				enter="transition-all duration-2000"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				className={'h-full flex flex-col '}
			>
				<div className="h-full flex flex-row items-center bg-transparent -translate-y-4">
					<ContactForm />
				</div>
			</Transition.Child>
		</>
	);
};
export default ContactPage;
