import { Timeline, Typography } from '@material-tailwind/react';
import { Transition } from '@headlessui/react';
import Job from '../components/Job.jsx';
import jobs from '../data/jobs.js';

const ResumePage  = () => {
	return (
		<section className="container mx-auto flex flex-col items-center justify-center mt-8">
			<Transition.Child
				className="flex flex-col items-center"
				enter="transition-transform duration-2000"
				enterFrom="transform -translate-y-96"
				enterTo="transform translate-x-0"
				leave="transition-transform duration-150"
				leaveFrom="transform translate-y-0"
				leaveTo="transform -translate-y-48"
			>
				<Typography variant="h3" color="blue-gray-800">
					How&apos;d I get here?
				</Typography>
				<Typography variant="h6" color="blue-gray-800" className="pb-8">
					(it&apos;s been a ride)
				</Typography>
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
							isLast={index + 1 === jobs.length ? true : false}
						/>
					))}
				</Timeline>
			</div>
		</section>
	);
};
export default ResumePage;
