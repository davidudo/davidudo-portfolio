import project01a from '$lib/assets/works/01/project-01-a.webp';
import project01b from '$lib/assets/works/01/project-01-b.webp';
import project02a from '$lib/assets/works/02/project-02-a.webp';
import project02b from '$lib/assets/works/02/project-02-b.webp';
import project03a from '$lib/assets/works/03/project-03-a.webp';
import project03b from '$lib/assets/works/03/project-03-b.webp';
import project04a from '$lib/assets/works/04/project-04-a.webp';
import project04b from '$lib/assets/works/04/project-04-b.webp';

export interface Project {
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	tags: string[];
	year: string;
	industry: string;
	image: string;
	hoverImage?: string;
	link?: string;
	client?: string;
	sections?: {
		items: { title: string; content: string }[];
		images?: string[];
	}[];
}

export const PROJECTS: Project[] = [
	{
		slug: 'devsearch',
		title: 'DEVSEARCH',
		shortDescription: 'Project sharing and discovery platform for developers.',
		description:
			'A full-stack platform for developers to share projects, connect, and receive feedback, featuring real-time messaging and project rating.',
		tags: ['Django', 'Python', 'PostgreSQL', 'REST API'],
		year: '2022',
		industry: 'Software Development',
		client: 'Personal Project',
		image: project01a,
		hoverImage: project01b,
		link: 'https://github.com/davidudo',
		sections: [
			{
				items: [
					{
						title: 'Concept',
						content:
							'DevSearch was designed as a central hub for developers to showcase their work and find collaborators, filling the gap between simple code repos and social networks.'
					},
					{
						title: 'Core Features',
						content:
							'Integrated a real-time messaging system, project review functionality, and a secure password reset system via email.'
					}
				],
				images: [project01a, project01b]
			}
		]
	},
	{
		slug: 'study-buddy',
		title: 'STUDY BUDDY',
		shortDescription: 'A dynamic social learning web application.',
		description:
			'An interactive platform enabling users to create and participate in topic-specific discussion rooms for collaborative learning.',
		tags: ['Django', 'Python', 'CRUD', 'Auth'],
		year: '2022',
		industry: 'EdTech',
		client: 'Personal Project',
		image: project02a,
		hoverImage: project02b,
		link: 'https://github.com/davidudo',
		sections: [
			{
				items: [
					{
						title: 'Dynamic Rooms',
						content:
							'Implemented real-time search with sorting and pagination, significantly improving content discoverability across discussion rooms.'
					}
				],
				images: [project02a, project02b]
			}
		]
	},
	{
		slug: 'jobify-web',
		title: 'JOBIFY WEB',
		shortDescription: 'Full-stack job posting and tracking application.',
		description:
			'Architected and built a comprehensive job board with custom authentication and full CRUD operations for job listings.',
		tags: ['Node.js', 'Express', 'React', 'MongoDB'],
		year: '2022',
		industry: 'HR Tech',
		client: 'Personal Project',
		image: project03a,
		hoverImage: project03b,
		link: 'https://github.com/davidudo',
		sections: [
			{
				items: [
					{
						title: 'Architecture',
						content:
							'Developed a decoupled architecture with a React frontend and a robust Node/Express backend, secured by a custom JWT-based Auth system.'
					}
				],
				images: [project03a, project03b]
			}
		]
	},
	{
		slug: 'aide-delivery-robot',
		title: 'AIDE ROBOT',
		shortDescription: 'Autonomous delivery robot with remote monitoring.',
		description:
			'A software and hardware prototype enabling real-time control and monitoring of an autonomous delivery robot.',
		tags: ['C', 'Blender', 'SolidWorks', 'Web Interface'],
		year: '2023',
		industry: 'Robotics',
		client: 'University Project',
		image: project04a,
		hoverImage: project04b,
		link: 'https://github.com/davidudo',
		sections: [
			{
				items: [
					{
						title: 'Monitoring Interface',
						content:
							'Built a responsive web interface to allow operators to track the robot’s status and control its movements in real-time.'
					}
				],
				images: [project04a, project04b]
			}
		]
	}
];
