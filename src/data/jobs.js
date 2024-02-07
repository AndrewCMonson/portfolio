import elevate from '../assets/img/elevatedigital.png';
import usaf from '../assets/img/usaf-logo.png'
import react from '../assets/img/react.png';

const jobs = [
    {
        title: 'Full-stack Web Developer',
        company: 'Freelance/Student',
        date: '2023 - Present',
        description: ['I am currently a freelance web developer, working on various projects and open source community projects.', 'My toolkit includes React, Node.js, Express, MongoDB, and more.', 'Check out my Projects page to see what I have been working on.'],
        image: react
    },
    {
        title: 'Sr. Talent Advisor',
        company: 'Elevate Digital',
        date: '2022 - Present',
        description: ['I am currently a Sr. Talent Advisor at Elevate Digital, where I help companies find the best talent for their open positions and advise tech leaders on best practices for hiring.'],
        image: elevate
    },
    {
        title: 'Sr Technical Recruiter',
        company: 'Elevate Digital',
        date: '2021 - 2022',
        description: ['I was a Sr. Technical Recruiter at Elevate Digital, where I was the front-line for recruiting top-tier technical talent. This is where I found my interest in web development.'],
        image: elevate
    },
    {
        title: 'Education and Training Program Manager',
        company: 'United States Air Force',
        date: '2019 - 2021',
        description: ['I was an Education and Training Program Manager in the United States Air Force, where I managed the training and education of over 5,000 personnel.'],
        image: usaf
    },
    {
        title: 'Integrated Flight Controls Systems Manager',
        company: 'United States Air Force',
        date: '2012 - 2019',
        description: ['I was an Integrated Flight Controls Systems Manager in the United States Air Force, where I managed the flight controls systems of the HH-60G helicopter. I spent three years overseas, including two deployments to Afghanistan and one to Somalia.'],
        image: usaf
    }
]

export default jobs;