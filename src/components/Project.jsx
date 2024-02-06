import PropTypes from "prop-types";

const Project = ({project}) => {
  return (
		<>
			<div className="md:hover:-translate-y-1 md:hover:-translate-x-1 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
				<a
					href={project.src}
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={project.img}
						alt=""
						className="w-full h-56 object-cover object-center"
					/>
					<div className="p-4">
						<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
							{project.name}
						</h3>
						<p className="text-blue-gray-800">
							{project.description}
						</p>
					</div>
				</a>
			</div>
		</>
	);
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}


export default Project