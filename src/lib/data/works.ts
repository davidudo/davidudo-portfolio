import project01a from '$lib/assets/works/project-01-a.avif';
import project01b from '$lib/assets/works/project-01-b.svg';

export interface Project {
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	tags: string[];
	year: string;
	image: string;
	hoverImage?: string;
	link?: string;
	sections?: {
		items: { title: string; content: string }[];
		images?: string[];
	}[];
}

export const PROJECTS: Project[] = [
	{
		slug: 'aura',
		title: 'AURA',
		shortDescription: 'Confidence and radiance through skincare.',
		description:
			'Aura is dedicated to promoting confidence and radiance in women with innovative skincare and nutritional supplements.',
		tags: ['Branding', 'UX'],
		year: '2020',
		image: project01a,
		hoverImage: project01b,
		link: 'https://example.com',
		sections: [
			{
				items: [
					{
						title: 'Concept',
						content:
							'Aura is dedicated to promoting confidence and radiance in women with innovative skincare and nutritional supplements.'
					},
					{
						title: 'Development',
						content:
							'Aura is dedicated to promoting confidence and radiance in women with innovative skincare and nutritional supplements.'
					}
				],
				images: [project01a, project01a]
			},
			{
				items: [
					{
						title: 'Problem',
						content:
							'Development optimizes the website’s performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings'
					}
				],
				images: [project01a, project01a]
			},
			{
				items: [
					{
						title: 'Solution',
						content:
							'Development optimizes the website’s performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings'
					}
				],
				images: [project01a]
			}
		]
	},
	{
		slug: 'aura-2',
		title: 'AURA',
		shortDescription: 'Confidence and radiance through skincare.',
		description:
			'Aura is dedicated to promoting confidence and radiance in women with innovative skincare and nutritional supplements.',
		tags: ['Branding', 'UX'],
		year: '2020',
		image: project01a,
		hoverImage: project01b,
		link: 'https://example.com',
		sections: [
			{
				items: [
					{
						title: 'Concept',
						content: 'Placeholder Concept for Aura 2.'
					}
				],
				images: [project01a]
			}
		]
	},
	{
		slug: 'aura-3',
		title: 'AURA',
		shortDescription: 'Confidence and radiance through skincare.',
		description:
			'Aura is dedicated to promoting confidence and radiance in women with innovative skincare and nutritional supplements.',
		tags: ['Branding', 'UX'],
		year: '2020',
		image: project01a,
		hoverImage: project01b,
		link: 'https://example.com',
		sections: [
			{
				items: [
					{
						title: 'Concept',
						content: 'Placeholder Concept for Aura 3.'
					}
				],
				images: [project01a]
			}
		]
	},
	{
		slug: 'aura-4',
		title: 'AURA',
		shortDescription: 'Confidence and radiance through skincare.',
		description:
			'Aura is dedicated to promoting confidence and radiance in women with innovative skincare and nutritional supplements.',
		tags: ['Branding', 'UX'],
		year: '2020',
		image: project01a,
		hoverImage: project01b,
		link: 'https://example.com',
		sections: [
			{
				items: [
					{
						title: 'Concept',
						content: 'Placeholder Concept for Aura 4.'
					}
				],
				images: [project01a]
			}
		]
	}
];
