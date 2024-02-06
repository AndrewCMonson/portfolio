import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom'
import About from './pages/About';
import ProjectPage from './pages/ProjectPage.jsx';
import Resume from './pages/Resume';
import ContactPage from './pages/ContactPage';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />} >
			<Route index={true} path='/' element={<About />} />
			<Route path='/about' element={<About />} />
			<Route path='/projects' element={<ProjectPage />} />
			<Route path='/resume' element={<Resume />} />
			<Route path='/contact' element={<ContactPage />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
