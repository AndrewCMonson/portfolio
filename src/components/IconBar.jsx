import { IconButton } from '@material-tailwind/react';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconBar = () => {
	return (
		<div className="flex gap-4 px-4 py-4 flex-row container mx-auto justify-center">
			<a
				href="https://www.linkedin.com/in/andrew-c-monson/"
				target="_blank"
				rel="noreferrer"
			>
				<IconButton className="rounded bg-[#215675] hover:shadow-[#215675]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
					<FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
				</IconButton>
			</a>
			<a
				href="https://github.com/AndrewCMonson"
				target="_blank"
				rel="noreferrer"
			>
				<IconButton className="rounded bg-[#215675] hover:shadow-[#215675]/20 focus:shadow-[#333333]/20 active:shadow-[#ea4c89]/10">
					<FontAwesomeIcon icon={faGithub} size="2xl" />
				</IconButton>
			</a>
		</div>
	);
};

export default IconBar;
