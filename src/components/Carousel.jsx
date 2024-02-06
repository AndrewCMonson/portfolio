import { Carousel } from '@material-tailwind/react';
import avatar from '../assets/img/avatar2.jpg';
import family from '../assets/img/family.jpg';
import helo from '../assets/img/helo.png';

const ImageCarousel = () => {
	return (
		<Carousel className="rounded-xl" autoplay loop >
			<img
				src={family}
				alt="family picture"
				className="h-full w-full object-cover"
			/>

			<img
				src={avatar}
				alt="air force picture"
				className="h-full w-full object-cover h-fit"
			/>

			<img 
				src={helo} 
				alt="helicopter" 
				className="h-full w-full object-cover" 
			/>
		</Carousel>
	);
};

export default ImageCarousel;
