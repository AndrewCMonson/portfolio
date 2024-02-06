import Projects from "../components/Projects"

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
			<Projects />
		</section>
	);
}
export default ProjectPage