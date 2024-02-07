import IconBar from './IconBar';
import avatar from '../assets/img/avatar2.jpg';

const AboutMeCard = () => {
  return (
		<>
			
				<div className='container mx-auto flex flex-col justify-center w-1/2 mt-8 px-4'>
					<div className="border-solid border-4 border-black rounded-lg overflow-hidden mx-auto">
						<img
							src={avatar}
							alt="profile"
							className="w-full h-full object-cover"
						/>
					</div>
					<IconBar />
				</div>
			
		</>
	);
}
export default AboutMeCard