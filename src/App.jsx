import Nav from './components/Navbar.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const App = () => {
	const location = useLocation();

	return (
		<>
			<Transition
				appear={true}
				show={true}
				enter="transition-all duration-2000"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-all duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				className={'h-full flex flex-col'}
			>
				<div>{location.pathname === '/' ? null : <Nav />}</div>
				<div className="h-full flex flex-col">
					<Outlet />
				</div>
			</Transition>
		</>
	);
};
export default App;
