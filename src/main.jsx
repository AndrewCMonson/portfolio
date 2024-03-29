import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage.jsx';
import WildcardPage from './pages/WildcardPage.jsx';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />} >
			<Route index={true} path='/' element={<LandingPage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/projects' element={<ProjectPage />} />
			<Route path='/resume' element={<ResumePage />} />
			<Route path='/contact' element={<ContactPage />} />
			<Route path='*' element={<WildcardPage />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
