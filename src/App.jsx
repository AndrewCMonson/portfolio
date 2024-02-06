import Nav from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<>
			<div>
				<Nav />
			</div>
			<div className="h-full flex flex-col ">
				<Outlet />
			</div>
			
		</>
	);
};
export default App;
