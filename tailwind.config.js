import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
export default withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			'md-lg': '800px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			transitionDuration: {
				2000: '2000ms',
				5000: '5000ms',
			},
			colors: {
				'oxford-blue': '#215675',
				'battleship-gray': '#838E83',
				'snow': '#FFFBFC',
			},
		},
	},
	plugins: [],
});
