

const Project = ({ title, description, image, link}) => {
	return (
		<>
			<div className="md:hover:-translate-y-1 md:hover:-translate-x-1 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
				<a href={link} target="_blank" rel="noreferrer">
					<img
						src={image}
						alt=""
						className="w-full h-56 object-cover object-center"
					/>
					<div className="p-4">
						<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
							{title}
						</h3>
						<p className="text-blue-gray-800">{description}</p>
					</div>
				</a>
			</div>
		</>
	);
};

export default Project;
