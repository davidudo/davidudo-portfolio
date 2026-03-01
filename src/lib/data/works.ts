import { aideDeliveryRobot } from './works/aide';
import { devsearch } from './works/devsearch';
import { studyBuddy } from './works/study-buddy';
import { jobifyWeb } from './works/jobify-web';

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
	github?: string;
	link?: string;
	client?: string;
	sections?: {
		items: { title: string; content: string }[];
		images?: string[];
	}[];
	metrics?: {
		value: string;
		label: string;
	}[];
	testimonial?: {
		quote: string;
		name: string;
		role: string;
		avatar?: string;
	};
}

export const PROJECTS: Project[] = [aideDeliveryRobot];
