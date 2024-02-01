const Projects = () => {
	return (
		<>
			<section id="projects" className="pt-12 md:pt-20 px-6 h-2/3">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-blue-gray-900 mb-4">
							Projects
						</h2>
						<p className="text-blue-gray-400">
							Here are some of the projects I&apos;ve worked on recently.
						</p>
						<p className="text-blue-gray-400">
							You can checkout my Github{' '}
							<a
								href="https://www.github.com/AndrewCMonson"
								target="_blank"
								rel="noreferrer"
								className="underline underline-offset-2 hover:text-blue-gray-900"
							>
								here
							</a>
						</p>
					</div>

					<div className="grid grid-cols-1 w-100 gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="md:hover:-translate-y-1 md:hover:-translate-x-1 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
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
										eCommerce site built with Node.js, Express, MySQL, and
										Handlebars.js.{' '}
										<a
											href="https://infinite-depths-65606-d9aa1a1e89cd.herokuapp.com/"
											target="_blank"
											rel="noreferrer"
											className="hover:underline"
										>
											Live site
										</a>
									</p>
								</div>
							</a>
						</div>

						<div className="md:hover:-translate-y-1 md:hover:-translate-x-1 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
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

						<div className="md:hover:-translate-y-1 md:hover:-translate-x-1 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
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
