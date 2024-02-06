import { Card } from '@material-tailwind/react';
import ImageCarousel from './Carousel.jsx';
import IconBar from './IconBar.jsx';

const AboutMe = () => {
	return (
		<>
			<section id="about" className="py-12 px-6">
				<div className="py-12 container mx-auto flex flex-row">
					<div className="container mx-auto px-4 flex flex-col justify-between py-12">
						<Card
							color="transparent"
							shadow={false}
							className="px-4 content-center"
						>
							<div className="flex flex-row items-center">
								<div className="text-2xl font-bold text-blue-gray-800">
									About Me
								</div>
								<IconBar />
							</div>

							<div
								color="text-blue-gray-800"
								className="mt-1 font-normal"
							>
								I spent ten years in the military before I found web development
								and fell in love with it. I&apos;m a father, husband, and a
								full-stack web developer. I&apos;m passionate about learning new
								technologies and building things that help people.
							</div>
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
