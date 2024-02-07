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

const Resume = () => {
	return (
		<section className="container mx-auto flex flex-col items-center justify-center mt-16">
			<div className='flex flex-col items-center'>
				<Typography variant="h3" color="blue-gray">
					How&apos;d I get here?
				</Typography>
				<Typography variant="h6" color="blue-gray" className="pb-8">
					(it&apos;s been a ride)
				</Typography>
			</div>
			
			<div className="w-[32rem]">
				<Timeline>
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
								<Typography variant="h5" color="blue-gray">
									Full-stack Web Developer
								</Typography>
								<Typography variant="small" color="blue-gray">
									Freelance/Student
								</Typography>
							</div>
						</TimelineHeader>
						<TimelineBody className="pb-8">
							<Typography color="gary" className="font-normal text-gray-600">
								The key to more success is to have a lot of pillows. Put it this
								way, it took me twenty five years to get these plants, twenty
								five years of blood sweat and tears, and I&apos;m never giving
								up, I&apos;m just getting started. I&apos;m up to something. Fan
								luv.
							</Typography>
						</TimelineBody>
					</TimelineItem>
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
								<Typography variant="h5" color="blue-gray">
									Sr. Talent Advisor
								</Typography>
								<Typography variant="small" color="blue-gray">
									Elevate Digital
								</Typography>
							</div>
						</TimelineHeader>
						<TimelineBody className="pb-8">
							<Typography color="gary" className="font-normal text-gray-600">
								The key to more success is to have a lot of pillows. Put it this
								way, it took me twenty five years to get these plants, twenty
								five years of blood sweat and tears, and I&apos;m never giving
								up, I&apos;m just getting started. I&apos;m up to something. Fan
								luv.
							</Typography>
						</TimelineBody>
					</TimelineItem>
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
								<Typography variant="h5" color="blue-gray">
									Sr. Technical Recruiter
								</Typography>
								<Typography variant="small" color="blue-gray">
									Elevate Digital
								</Typography>
							</div>
						</TimelineHeader>
						<TimelineBody className='pb-8'>
							<Typography color="gary" className="font-normal text-gray-600">
								The key to more success is to have a lot of pillows. Put it this
								way, it took me twenty five years to get these plants, twenty
								five years of blood sweat and tears, and I&apos;m never giving
								up, I&apos;m just getting started. I&apos;m up to something. Fan
								luv.
							</Typography>
						</TimelineBody>
					</TimelineItem>
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
								<Typography variant="h5" color="blue-gray">
									Education and Training Program Manager
								</Typography>
								<Typography variant="small" color="blue-gray">
									United States Air Force
								</Typography>
							</div>
						</TimelineHeader>
						<TimelineBody>
							<Typography color="gary" className="font-normal text-gray-600">
								The key to more success is to have a lot of pillows. Put it this
								way, it took me twenty five years to get these plants, twenty
								five years of blood sweat and tears, and I&apos;m never giving
								up, I&apos;m just getting started. I&apos;m up to something. Fan
								luv.
							</Typography>
						</TimelineBody>
					</TimelineItem>
				</Timeline>
			</div>
		</section>
	);
}

export default Resume;