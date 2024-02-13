import {
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Avatar,
} from '@material-tailwind/react';

import { Transition } from '@headlessui/react';
import { useCallback } from 'react';

const Job = ({ index, title, company, description, isLast, image, date }) => {
	const changeEveryOther = useCallback(index => {
		return index % 2 === 0
			? 'transform translate-x-96'
			: 'transform -translate-x-96';
	}, []);

	return (
		<>
			<Transition.Child
				enter="transition-all duration-2000"
				enterFrom={`transform ${changeEveryOther(index)} opacity-0`}
				enterTo="transform translate-x-0 opacity-100"
				leave="transition-transform duration-150"
				leaveFrom="transform translate-y-0"
				leaveTo="transform -translate-y-48"
			>
				<TimelineItem>
					{!isLast && <TimelineConnector />}
					<TimelineHeader>
						<TimelineIcon className="p-0">
							<Avatar
								size="sm"
								src={image}
								alt="user 2"
								withBorder
								className="bg-white -translate-y-.5 transform"
							/>
						</TimelineIcon>
						<div className="flex flex-col">
							<div className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-snow">
								{title}
							</div>

							<div className="text-sm text-black italic">
								{company}
							</div>
							<div className="text-sm text-black">{date}</div>
						</div>
					</TimelineHeader>
					<TimelineBody className="pb-8 text-snow">
						<ul className="list-disc list-inside">
							{description.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</TimelineBody>
				</TimelineItem>
			</Transition.Child>
		</>
	);
};
export default Job;
