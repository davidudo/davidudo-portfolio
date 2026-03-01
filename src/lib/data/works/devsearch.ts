import project01a from '$lib/assets/works/01/project-01-a.webp';
import project01b from '$lib/assets/works/01/project-01-b.webp';
import type { Project } from '../works';

export const devsearch: Project = {
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
	],
	metrics: [
		{ value: '35%', label: 'Increase in completed sign-ups' },
		{ value: '22%', label: 'Boost in daily active users' },
		{ value: '3x', label: 'Faster mobile navigation' },
		{ value: '85%', label: 'User satisfaction rate' }
	],
	testimonial: {
		quote:
			'They made crypto feel approachable. The design is stunning and the UX feels effortless.',
		name: 'Jared Lin',
		role: 'Product Manager'
	}
};
