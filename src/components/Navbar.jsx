import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import navData from '../data/navData';
import {
	Navbar,
	Typography,
	IconButton,
	Collapse,
} from '@material-tailwind/react';

const Nav = () => {
	const [openNav, setOpenNav] = useState(false);
	const navBarRef = useRef(null);
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleClickOutside = (event) => {
		if (
			navBarRef.current &&
			!navBarRef.current.contains(event.target) &&
			window.innerWidth < 960
		) {
			setOpenNav(false);
		}
	};

	useEffect(() => {
		setOpenNav(false);
	}
	, [pathname]);

	const navList = (
		<ul className=" mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			{navData.map((item, index) => {
				return (
					<li key={index}>
						{pathname === item.path ? (
							<Typography
								as="li"
								variant="small"
								className="p-1 font-normal text-white bg-oxford-blue rounded-md"
							>
								<span className="flex items-center">{item.title}</span>
							</Typography>
						) : (
							<Typography
								as="li"
								variant="small"
								className={`p-1 font-normal text-snow ${
									openNav ? 'hover:bg-transparent' : 'hover:bg-oxford-blue'
								} hover:rounded-md`}
							>
								<Link to={item.path} className="flex items-center">
									{item.title}
								</Link>
							</Typography>
						)}
					</li>
				);
			})}
		</ul>
	);
	
	return (
		<Navbar
			className="top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
			color="transparent"
			shadow={true}
			ref={navBarRef}
		>
			<div className="flex items-center justify-between">
				<div>
					{location.pathname !== '/' ? (
						<h5 className="text-snow text-xl">
							<a href="/">
								<span >andrew</span>
							</a>
						</h5>
					) : null}
				</div>
				<div className="flex items-center gap-4">
					<div className="mr-4 hidden lg:block">{navList}</div>
					<IconButton
						variant="text"
						className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								className="h-6 w-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</IconButton>
				</div>
			</div>
			<Collapse open={openNav}>{navList}</Collapse>
		</Navbar>
	);
};

export default Nav;
