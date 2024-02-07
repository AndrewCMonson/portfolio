import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
	Avatar,
} from '@material-tailwind/react';
import { Transition } from '@headlessui/react';

const Resume = () => {
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

			<div className="w-[32rem]">
				<Timeline>
					<Transition.Child
						enter="transition-transform duration-2000"
						enterFrom="transform translate-x-96"
						enterTo="transform translate-x-0"
						leave="transition-transform duration-150"
						leaveFrom="transform translate-y-0"
						leaveTo="transform -translate-y-48"
					>
						<TimelineItem>
							<TimelineConnector />
							<TimelineHeader>
								<TimelineIcon className="p-0">
									<Avatar
										size="sm"
										src="https://docs.material-tailwind.com/img/team-1.jpg"
										alt="user 1"
										withBorder
									/>
								</TimelineIcon>
								<div className="flex flex-col">
									<Typography variant="h5" color="blue-gray-800">
										Full-stack Web Developer
									</Typography>
									<Typography variant="small" color="blue-gray-800">
										Freelance/Student
									</Typography>
								</div>
							</TimelineHeader>
							<TimelineBody className="pb-8">
								<Typography
									color="blue-gray-800"
									className="font-normal blue-gray-800"
								>
									The key to more success is to have a lot of pillows. Put it
									this way, it took me twenty five years to get these plants,
									twenty five years of blood sweat and tears, and I&apos;m never
									giving up, I&apos;m just getting started. I&apos;m up to
									something. Fan luv.
								</Typography>
							</TimelineBody>
						</TimelineItem>
					</Transition.Child>
					<Transition.Child
						enter="transition-transform duration-2000"
						enterFrom="transform -translate-x-96"
						enterTo="transform translate-x-0"
						leave="transition-transform duration-150"
						leaveFrom="transform translate-y-0"
						leaveTo="transform -translate-y-48"
					>
						<TimelineItem>
							<TimelineConnector />
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
									<Typography variant="h5" color="blue-gray-800">
										Sr. Talent Advisor
									</Typography>
									<Typography variant="small" color="blue-gray-800">
										Elevate Digital
									</Typography>
								</div>
							</TimelineHeader>
							<TimelineBody className="pb-8">
								<Typography
									color="blue-gray-800"
									className="font-normal blue-gray-800"
								>
									The key to more success is to have a lot of pillows. Put it
									this way, it took me twenty five years to get these plants,
									twenty five years of blood sweat and tears, and I&apos;m never
									giving up, I&apos;m just getting started. I&apos;m up to
									something. Fan luv.
								</Typography>
							</TimelineBody>
						</TimelineItem>
					</Transition.Child>
					<Transition.Child
						enter="transition-transform duration-2000"
						enterFrom="transform translate-x-96"
						enterTo="transform translate-x-0"
						leave="transition-transform duration-150"
						leaveFrom="transform translate-y-0"
						leaveTo="transform -translate-y-48"
					>
						<TimelineItem>
							<TimelineConnector />
							<TimelineHeader>
								<TimelineIcon className="p-0">
									<Avatar
										size="sm"
										src="https://docs.material-tailwind.com/img/team-3.jpg"
										alt="user 3"
										withBorder
									/>
								</TimelineIcon>
								<div className="flex flex-col">
									<Typography variant="h5" color="blue-gray-800">
										Sr. Technical Recruiter
									</Typography>
									<Typography variant="small" color="blue-gray-800">
										Elevate Digital
									</Typography>
								</div>
							</TimelineHeader>
							<TimelineBody className="pb-8">
								<Typography
									color="blue-gray-800"
									className="font-normal blue-gray-800"
								>
									The key to more success is to have a lot of pillows. Put it
									this way, it took me twenty five years to get these plants,
									twenty five years of blood sweat and tears, and I&apos;m never
									giving up, I&apos;m just getting started. I&apos;m up to
									something. Fan luv.
								</Typography>
							</TimelineBody>
						</TimelineItem>
					</Transition.Child>
					<Transition.Child
						enter="transition-transform duration-2000"
						enterFrom="transform -translate-x-96"
						enterTo="transform translate-x-0"
						leave="transition-transform duration-150"
						leaveFrom="transform translate-y-0"
						leaveTo="transform -translate-y-48"
					>
						<TimelineItem>
							<TimelineConnector />
							<TimelineHeader>
								<TimelineIcon className="p-0">
									<Avatar
										size="sm"
										src="https://docs.material-tailwind.com/img/team-3.jpg"
										alt="user 3"
										withBorder
									/>
								</TimelineIcon>
								<div className="flex flex-col">
									<Typography variant="h5" color="blue-gray-800">
										Education and Training Program Manager
									</Typography>
									<Typography variant="small" color="blue-gray-800">
										United States Air Force
									</Typography>
								</div>
							</TimelineHeader>
							<TimelineBody>
								<Typography
									color="blue-gray-800"
									className="font-normal blue-gray-800"
								>
									The key to more success is to have a lot of pillows. Put it
									this way, it took me twenty five years to get these plants,
									twenty five years of blood sweat and tears, and I&apos;m never
									giving up, I&apos;m just getting started. I&apos;m up to
									something. Fan luv.
								</Typography>
							</TimelineBody>
						</TimelineItem>
					</Transition.Child>
				</Timeline>
			</div>
		</section>
	);
}

export default Resume;