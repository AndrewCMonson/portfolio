import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
export default withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			transitionDuration: {
				2000: '2000ms',
				5000: '5000ms',
			},
      colors: {
        'oxford-blue': '#1B2A41',
        'battleship-gray': '#838E83'
      }
		},
	},
	plugins: [],
});
