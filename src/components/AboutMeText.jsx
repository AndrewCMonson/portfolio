import { Transition } from '@headlessui/react';

const AboutMeText = () => {
  return (
		<>
			<Transition.Child
				enter="transition-all duration-2000"
				enterFrom="transform  opacity-0"
				enterTo="transform  opactiy-100"
				leave="transition-transform duration-150"
				leaveFrom="transform translate-y-0"
				leaveTo="transform -translate-y-48"
			>
				<div className="container mx-auto px-8">
					<p className="text-sm md:text-sm xl:text-lg mt-2 px-4 py-6 text-snow">
						A father, husband and software engineer. I spent a decade in the
						United States Air Force before entering the tech industry as a
						technical recruiter. Not long after, I discovered my love for web
						development and am now pursuing it as a career. My toolbelt includes
						MongoDB, Express, React, Node.js, and more. I&apos;ve never met a
						challenge I didn&apos;t like and am always looking for new
						opportunities to learn. When I&apos;m not working, I enjoy running,
						golfing, and spending time with my family.
					</p>
				</div>
			</Transition.Child>
		</>
	);
}
export default AboutMeText