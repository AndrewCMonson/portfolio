import projects from '../data/projects';
import Project from '../components/Project';
import { Transition } from '@headlessui/react';

const ProjectPage = () => {
	return (
		<Transition
			appear={true}
			show={true}
			enter="transition-opacity duration-2000"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			className={'h-full flex flex-col '}
		>
			<section id="projects" className="h-full py-12 px-6 container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-oxford-blue">
						Projects
					</h2>
					<div className="h-1 w-20 bg-[#333333] mx-auto my-2"></div>
					<p className="text-blue-gray-800">
						Here are some of the projects I&apos;ve worked on recently.
					</p>
					<p className="text-blue-gray-800">
						You can check out my Github{' '}
						<a
							href="https://www.github.com/AndrewCMonson"
							target="_blank"
							rel="noreferrer"
							className="underline underline-offset-2 hover:text-blue-gray-400"
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
		</Transition>
	);
};
export default ProjectPage;
