import { Card, Typography } from '@material-tailwind/react';
import ImageCarousel from './Carousel.jsx';

const AboutMe = () => {
	return (
		<>
			<section id="about" className="py-12 px-6 bg-blue-gray-800 h-1/2 ">
				<div className="py-12 container mx-auto flex flex-row">
					<div className="container mx-auto px-4 flex justify-center py-12 bg-blue-gray-800">
						<Card
							color="transparent"
							shadow={false}
							className="px-4 content-center"
						>
							<Typography variant="h4" color="white">
								About Me
							</Typography>
							<Typography color="white" className="mt-1 font-normal">
								I spent ten years in the military before I found web development
								and fell in love with it. I&apos;m a father, husband, and a
								full-stack web developer. I&apos;m passionate about learning new
								technologies and building things that help people.
							</Typography>
						</Card>
					</div>
					<div className="container mx-auto w-1/2 hidden xl:flex">
						<ImageCarousel />
					</div>
				</div>
			</section>
		</>
	);
};
export default AboutMe;
