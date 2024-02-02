const About = () => {
	return (
		<section className="flex flex-col h-full">
			<div className="text-center my-12 container mx-auto">
				<h2 className="text-4xl font-bold text-blue-gray-900">About Me</h2>
				<p className="text-blue-gray-400">Everyone has a story.</p>
			</div>
			<div className="container mx-auto px-4">
				<p className="w-1/2">After a 10 year career in the military, I decided to become a technical recruiter. Along the way, I fell in love with the industry and decided to pursue development myself.</p>
				<p className="w-1/2">I have experience with JavaScript, React, Node.js, and MongoDB. I am currently learning Typescript and AWS.</p>
			</div>
		</section>
	); 
};
export default About;
