import { Timeline } from '@material-tailwind/react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Job from '../components/Job.jsx';
import TechnologyBar from '../components/TechnologyBar.jsx';
import jobs from '../data/jobs.js';
import Resume from '../../public/Andrew_Monson.pdf';

const ResumePage = () => {
	return (
		<section className="container mx-auto flex flex-col items-center justify-center mt-8">
			<Transition.Child
				className="flex flex-col items-center pb-8"
				enter="transition-transform duration-2000"
				enterFrom="transform -translate-y-96"
				enterTo="transform translate-x-0"
				leave="transition-transform duration-150"
				leaveFrom="transform translate-y-0"
				leaveTo="transform -translate-y-48"
			>
				<div className="text-4xl font-bold text-oxford-blue">
					How&apos;d I get here?
				</div>
				<div className="h-1 w-20 bg-[#333333] mx-auto mt-2"></div>
				<Link to={Resume} target="_blank" download>
					Download a copy
				</Link>
				<TechnologyBar />
			</Transition.Child>
			<div className="md:w-[40rem] mx-8 sm:mb-0">
				<Timeline>
					{jobs.map((job, index) => (
						<Job
							key={index}
							index={index}
							title={job.title}
							company={job.company}
							description={job.description}
							image={job.image}
							date={job.date}
							isLast={index + 1 === jobs.length ? true : false}
						/>
					))}
				</Timeline>
			</div>
		</section>
	);
};
export default ResumePage;
