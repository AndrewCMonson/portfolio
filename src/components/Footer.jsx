const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<div className="w-100 text-center container mx-auto text-blue-gray-900">
			andrew &copy; {date}
		</div>
	);
};
export default Footer;
