import proShop from '../assets/img/ProShop.png';
import kookies from '../assets/img/KurstiesKookies.png';
import yourSchools from '../assets/img/YourSchools.png';

const Projects = () => {
	return (
		<>
			<div className="container mx-auto">
				

				<div className="grid grid-cols-1 w-100 gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="md:hover:-translate-y-1 md:hover:-translate-x-1 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
						<a
							href="https://www.github.com/AndrewCMonson/kursties-kookies"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={kookies}
								alt=""
								className="w-full h-56 object-cover object-center"
							/>
							<div className="p-4">
								<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
									Kurstie&apos;s Kookies
								</h3>
								<p className="text-blue-gray-800">
									eCommerce application built with Node.js, Express, MySQL, and
									Handlebars.js.{' '}
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
								src={proShop}
								alt=""
								className="w-full h-56 object-cover object-center"
							/>
							<div className="p-4">
								<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
									PROShop
								</h3>
								<p className="text-blue-gray-800">
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
								src={yourSchools}
								alt=""
								className="w-full h-56 object-cover object-center"
							/>

							<div className="p-4">
								<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
									YourSchools (WIP)
								</h3>
								<p className="text-blue-gray-800">
									Preschool and Daycare finder built using MongoDB, React,
									Express and Node.js.
								</p>
							</div>
						</a>
					</div>
					<div className="md:hover:-translate-y-1 md:hover:-translate-x-1 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
						<a
							href="https://www.github.com/AndrewCMonson/kursties-kookies"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={kookies}
								alt=""
								className="w-full h-56 object-cover object-center"
							/>
							<div className="p-4">
								<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
									Kurstie&apos;s Kookies
								</h3>
								<p className="text-blue-gray-800">
									eCommerce application built with Node.js, Express, MySQL, and
									Handlebars.js.{' '}
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
								src={proShop}
								alt=""
								className="w-full h-56 object-cover object-center"
							/>
							<div className="p-4">
								<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
									PROShop
								</h3>
								<p className="text-blue-gray-800">
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
								src={yourSchools}
								alt=""
								className="w-full h-56 object-cover object-center"
							/>

							<div className="p-4">
								<h3 className="text-xl font-bold text-blue-gray-900 mb-2">
									YourSchools (WIP)
								</h3>
								<p className="text-blue-gray-800">
									Preschool and Daycare finder built using MongoDB, React,
									Express and Node.js.
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default Projects;
