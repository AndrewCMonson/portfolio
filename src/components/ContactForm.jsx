import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import isEmail from 'validator/lib/isEmail';

const ContactForm = () => {
	const [sent, setSent] = useState(false);
	const [formData, setFormData] = useState({
		name: {
			value: '',
			valid: false,
		},
		email: {
			value: '',
			valid: false,
		},
		message: {
			value: '',
			valid: false,
		},
	});
	const [error, setError] = useState({
		name: '',
		email: '',
		message: '',
	});

	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_3ofq4ss',
				'template_z4522v4',
				form.current,
				'95DDJB338hFkpfoIn'
			)
			.then(
				result => {
					console.log(result.text);
					setSent(true);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	const { name, email, message } = formData;


	const handleChange = e => {
		switch (e.target.name) {
			case 'name':
				if (e.target.value === '') {
					setFormData({
						...formData,
						name: {
							value: e.target.value,
							valid: false,
						},
					});
				} else {
					setError({ ...error, name: '' });
					setFormData({
						...formData,
						name: {
							value: e.target.value,
							valid: true,
						},
					});
				}
				break;
			case 'email':
				if(!isEmail(e.target.value)){
					setFormData({
						...formData,
						email: {
							value: e.target.value,
							valid: false,
						},
					});
				} else {
					setError({ ...error, email: '' });
					setFormData({
						...formData,
						email: {
							value: e.target.value,
							valid: true,
						},
					});
				}
				break;
			case 'message':
				if(e.target.value === ''){
					setFormData({
						...formData,
						message: {
							value: e.target.value,
							valid: false,
						},
					});
				} else {
					setError({ ...error, message: '' });
					setFormData({
						...formData,
						message: {
							value: e.target.value,
							valid: true,
						},
					});
				}
				break;
			default:
				break;
		}
	};

	const handleMouseOut = e => {
		switch (e.target.name) {
			case 'name':
				!name.valid
					? setError({ ...error, name: 'Name is required' })
					: setError({ ...error, name: '' });
				break;
			case 'email':
				!email.valid
					? setError({ ...error, email: 'A valid email is required' })
					: setError({ ...error, email: '' });
				break;
			case 'message':
				!message.valid
					? setError({ ...error, message: 'Message is required' })
					: setError({ ...error, message: '' });
				break;
			default:
				break;
		}
	};

	return (
		<>
			<section
				id="contact"
				className="container mx-auto px-4 flex justify-center py-12"
			>
				<Card
					color="transparent"
					shadow={false}
					className="px-4 content-center"
				>
					<Typography variant="h4" color="blue-gray">
						I&apos;d love to hear from you!
					</Typography>
					<Typography color="gray" className="mt-1 font-normal">
						Shoot me an email and let me know how I can help.
					</Typography>
					<form
						className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
						ref={form}
						onSubmit={sendEmail}
					>
						<div className="mb-1 flex flex-col gap-6 content-center">
							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Your Name
							</Typography>
							<Input
								size="lg"
								placeholder="John Doe"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: 'before:content-none after:content-none',
								}}
								name="name"
								value={name.value}
								onChange={e => handleChange(e)}
								onMouseOut={e => handleMouseOut(e)}
							/>
							{error.name && (
								<Typography color="red" className="mt-2">
									{error.name}
								</Typography>
							)}
							<Typography variant="h6" color="blue-gray" className="-mb-3">
								Your Email
							</Typography>
							<Input
								size="lg"
								placeholder="name@mail.com"
								className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
								labelProps={{
									className: 'before:content-none after:content-none',
								}}
								name="email"
								value={email.value}
								onChange={e => handleChange(e)}
								onMouseOut={e => handleMouseOut(e)}
							/>
							{error.email && (
								<Typography color="red" className="mt-2">
									{error.email}
								</Typography>
							)}
							<div className="w-80 max-w-screen-lg sm:w-96">
								<div className="relative w-full min-w-[200px]">
									<textarea
										className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
										placeholder=" "
										name="message"
										onChange={e => handleChange(e)}
										value={message.value}
										onMouseOut={e => handleMouseOut(e)}
									></textarea>
									{error.message && (
										<Typography color="red" className="mt-2">
											{error.message}
										</Typography>
									)}
									<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
										Message
									</label>
								</div>
							</div>
						</div>
						{name.valid && email.valid && message.valid && !sent ? (
							<Button className="mt-6 bg-blue-gray-700" fullWidth type="submit">
								{sent ? 'Email Sent!' : 'Send Message'}
							</Button>
						) : (
							<Button
								className="mt-6 bg-blue-gray-700"
								fullWidth
								type="submit"
								disabled
							>
								{sent ? 'Email Sent!' : 'Please complete the form'}
							</Button>
						)}
					</form>
				</Card>
			</section>
		</>
	);
};

export default ContactForm;
