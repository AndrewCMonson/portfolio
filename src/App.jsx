import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar.jsx';



const App = () => {
	return (
		<>
			<Nav />
			<main className='flex-auto'>
				<Outlet />
			</main>
		</>
	);
};
export default App;
