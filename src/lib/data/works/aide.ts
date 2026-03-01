// 3D Designs
import aideBack from '$lib/assets/works/aide/3d-designs/back-view-of-aide-robot.jpg';
import aideBackOpen from '$lib/assets/works/aide/3d-designs/back-view-with-top-opened-of-aide-robot.jpg';
import aideFront from '$lib/assets/works/aide/3d-designs/front-image-for-aide-robot.jpg';
import aideTop from '$lib/assets/works/aide/3d-designs/top-view-of-aide-robot.jpg';

// Electronic Designs
import electronicAssembly from '$lib/assets/works/aide/electronic-designs/electronic-assembly-of-aide-robot.jpg';
import electronicParts from '$lib/assets/works/aide/electronic-designs/electronic-parts-of-aide-robot.jpg';

// Engineering Design
import comprehensiveChassis from '$lib/assets/works/aide/engineering-design/comprehensive-chassis-design-of-aide-robot.jpg';
import simpleChassis from '$lib/assets/works/aide/engineering-design/simple-chassis-design-of-aide-robot.jpg';

// Screenshots
import buildingAide from '$lib/assets/works/aide/screenshots/building-aide.jpg';
import robotAssembly from '$lib/assets/works/aide/screenshots/robot-assembly.jpg';
import semiCompleteAssembly from '$lib/assets/works/aide/screenshots/semi-complete-assembly.jpg';
import webControlInterface from '$lib/assets/works/aide/screenshots/web-control-interface.jpg';

import type { Project } from '../works';

export const aideDeliveryRobot: Project = {
	slug: 'aide-delivery-robot',
	title: 'AIDE ROBOT',
	shortDescription: 'Autonomous delivery robot with remote monitoring.',
	description:
		'Design and development of a package delivery robot. A software and hardware prototype enabling real-time control and monitoring of an autonomous delivery robot.',
	tags: ['C', 'JavaScript', 'HTML', 'Blender', 'AutoCAD', 'Fritzing'],
	year: '2023',
	industry: 'Robotics',
	client: 'University Project',
	image: aideFront,
	hoverImage: aideBack,
	github: 'https://github.com/davidudo/aide',
	sections: [
		{
			items: [
				{
					title: 'Introduction',
					content:
						'This project provides an overview of the design and development of a mobile robot for package delivery purposes. Our team comprised of three members who collaborated on various aspects of the project, including system design, hardware implementation, software implementation, and testing.'
				},
				{
					title: 'Problem Statement',
					content:
						"Traditional package delivery systems are usually slow, expensive, and ineffective. Finding a more efficient approach to deliver products promptly and affordably has become vital due to the growth of e-commerce and the need for courier services. In the context of an academic setting, confidential packages must be delivered with a high degree of assurance that they won't be compromised."
				}
			],
			images: [aideTop, aideBackOpen]
		},
		{
			items: [
				{
					title: 'Aim & Objective',
					content:
						'To build a package delivery robot for delivering packages. It can be controlled to navigate through streets and sidewalks with ease, avoid obstacles, and securely deliver packages.'
				},
				{
					title: 'Design Requirements',
					content:
						'The mobile robot was designed with the following requirements in mind: package delivery, secure package storage, remote control and monitoring, and obstacle avoidance.'
				}
			],
			images: [simpleChassis, comprehensiveChassis]
		},
		{
			items: [
				{
					title: 'System Architecture',
					content:
						'The mobile robot consists of four main components: an obstacle avoiding system, a package handling system, a control and communication system, and a power supply system. These components work together to ensure the robot can navigate, recognize and handle packages, and communicate with its operator.'
				},
				{
					title: 'Electronic Design',
					content:
						'The electronic subsystem integrates sensors, actuators, and other components to enable navigation and package handling. The chassis is made of aluminium sheet metal, chosen for its light weight and strength properties.'
				}
			],
			images: [electronicParts, electronicAssembly]
		},
		{
			items: [
				{
					title: 'Hardware Implementation',
					content:
						'The robot uses a combination of sensors, actuators, and other electronic hardware components to navigate and handle packages. The chassis is made up of an aluminium sheet metal which was chosen because of its light weight and strength property.'
				},
				{
					title: 'Software Implementation',
					content:
						"The package delivery robot was programmed using C++, while the web control app was built using JavaScript. C++ was used for low-level programming tasks such as controlling the robot's movement, unlocking the solenoid, and sounding the buzzer. The programming code was modularized to allow for easy maintenance and future enhancements."
				}
			],
			images: [buildingAide, robotAssembly]
		},
		{
			items: [
				{
					title: 'Testing & Results',
					content:
						'We extensively tested and debugged the robot to ensure it performed as intended. After evaluation, the robot was successful in securing and delivering packages and detecting and avoiding obstacles. The robot can only move linearly if the storage unit is mounted but can turn if removed.'
				},
				{
					title: 'Future Enhancements',
					content:
						'Future enhancements include incorporating more powerful batteries (12V 10A rating), designing the robot to be more rugged and durable, or using lighter materials like fibreglass for chassis fabrication. More advanced sensors like GPS and compass modules can be incorporated to enable autonomous navigation.'
				},
				{
					title: 'Limitations & Challenges',
					content:
						"The robot required a battery with a higher capacity which was difficult to obtain. The 7.4V 2200mAh battery was insufficient due to the DC gear motors' power consumption. The robot's mobility was limited on difficult terrain and had difficulty turning when the storage unit was mounted. The GPS module and load cell did not function properly, so the robot was unable to navigate autonomously or detect package weight."
				}
			],
			images: [semiCompleteAssembly, webControlInterface]
		}
	]
};
