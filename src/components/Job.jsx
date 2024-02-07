import {
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Avatar,
} from '@material-tailwind/react';

import { Transition } from '@headlessui/react';

const Job = ({ index, title, company, description, isLast }) => {

	
    const changeEveryOther = index => {
		return index % 2 === 0
			? 'transform translate-x-96'
			: 'transform -translate-x-96';
	};

    

	return (
		<>
			<Transition.Child
				enter="transition-transform duration-2000"
				enterFrom={`transform ${changeEveryOther(index)}`}
				enterTo="transform translate-x-0"
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
								src="https://docs.material-tailwind.com/img/team-2.jpg"
								alt="user 2"
								withBorder
							/>
						</TimelineIcon>
						<div className="flex flex-col">
							<div className="text-sm md:text-base lg:text-lg xl:text-xl font-bold">
								{title}
							</div>
							<div className="text-sm italic">{company}</div>
						</div>
					</TimelineHeader>
					<TimelineBody className="pb-8">
						<p className="text-sm font-normal blue-gray-800">{description}</p>
					</TimelineBody>
				</TimelineItem>
			</Transition.Child>
		</>
	);
};
export default Job;
