import project02a from '$lib/assets/works/02/project-02-a.webp';
import project02b from '$lib/assets/works/02/project-02-b.webp';
import type { Project } from '../works';

export const studyBuddy: Project = {
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
};
