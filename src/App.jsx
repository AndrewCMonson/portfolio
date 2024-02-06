import Nav from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<>
			<div>
				<Nav />
			</div>
			<div className="h-full flex flex-col">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
export default App;
