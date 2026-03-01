import project03a from '$lib/assets/works/03/project-03-a.webp';
import project03b from '$lib/assets/works/03/project-03-b.webp';
import type { Project } from '../works';

export const jobifyWeb: Project = {
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
};
