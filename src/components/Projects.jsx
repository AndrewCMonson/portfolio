const Projects = () => {
	return (
		<>
			<section id="projects" className="py-12">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-blue-gray-900 mb-4">
							Projects
						</h2>
						<p className="text-blue-gray-400">
							Here are some of the projects I&apos;ve worked on recently.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
							<a
								href="https://www.github.com/AndrewCMonson/kursties-kookies"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="../src/assets/img/KurstiesKookies.png"
									alt=""
									className="w-full h-56 object-cover object-center"
								/>
								<div className="p-4">
									<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
										Kurstie&apos;s Kookies
									</h3>
									<p className="text-blue-gray-400">
										eCommerce site built with Node.js, Express, Handlebars.js.
									</p>
								</div>
							</a>
						</div>

						<div className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
							<a
								href="https://www.github.com/AndrewCMonson/proshop"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="../src/assets/img/PROShop.png"
									alt=""
									className="w-full h-56 object-cover object-center"
								/>
								<div className="p-4">
									<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
										PROShop
									</h3>
									<p className="text-blue-gray-400">
										eCommerce application built with MongoDB, React, Redux,
										Express and Node.js.
									</p>
								</div>
							</a>
						</div>

						<div className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
							<a
								href="https://www.github.com/AndrewCMonson/no-name-react"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="../src/assets/img/YourSchools.png"
									alt=""
									className="w-full h-56 object-cover object-center"
								/>

								<div className="p-4">
									<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
										YourSchools (WIP)
									</h3>
									<p className="text-blue-gray-400">
										Preschool and Daycare finder built using MongoDB, React,
										Express and Node.js.
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Projects;
