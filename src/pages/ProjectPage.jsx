import projects from '../data/projects';
import Project from '../components/Project';


const ProjectPage = () => {
  return (
		<section id="projects" className="h-full py-12 px-6 bg-blue-gray-800">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
				<p className="text-blue-gray-200">
					Here are some of the projects I&apos;ve worked on recently.
				</p>
				<p className="text-blue-gray-200">
					You can check out my Github{' '}
					<a
						href="https://www.github.com/AndrewCMonson"
						target="_blank"
						rel="noreferrer"
						className="underline underline-offset-2 hover:text-white"
					>
						here
					</a>
				</p>
			</div>
			<div className="grid grid-cols-1 w-100 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<Project
						key={index}
						title={project.name}
						description={project.description}
						image={project.img}
						link={project.src}
					/>
				))}
			</div>
		</section>
	);
}
export default ProjectPage