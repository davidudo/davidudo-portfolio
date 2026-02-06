<script lang="ts">
	import filmsImg from '$lib/assets/playground/movies.webp';
	import joggingImg from '$lib/assets/playground/morning-jogging.webp';
	import workoutImg from '$lib/assets/playground/home-workout.webp';
	import PS4Img from '$lib/assets/playground/ps4-sessions.webp';
	import booksImg from '$lib/assets/playground/tech-books.webp';
	import learningImg from '$lib/assets/playground/new-stack.webp';
	import rebuildingImg from '$lib/assets/playground/rebuilding-tools.webp';
	import mathsImg from '$lib/assets/playground/maths-problems.webp';
	import roboticsImg from '$lib/assets/playground/robotics.webp';

	// Custom action for viewport-relative parallax
	function parallax(node: HTMLElement, { speed = 0.1 } = {}) {
		let ticking = false;

		function update() {
			const rect = node.getBoundingClientRect();
			const viewportHeight = window.innerHeight;

			// Only animate if element is roughly in view (with some buffer)
			if (rect.top < viewportHeight && rect.bottom > 0) {
				const elementCenter = rect.top + rect.height / 2;
				const viewportCenter = viewportHeight / 2;
				const distanceFromCenter = elementCenter - viewportCenter;

				// Calculate offset: 0 when centered, moves up/down as it leaves center
				const offset = distanceFromCenter * speed * -1;
				node.style.transform = `translateY(${offset}px)`;
			}
			ticking = false;
		}

		function onScroll() {
			if (!ticking) {
				window.requestAnimationFrame(update);
				ticking = true;
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		// Initial update
		update();

		return {
			destroy() {
				window.removeEventListener('scroll', onScroll);
				window.removeEventListener('resize', onScroll);
			}
		};
	}

	const sections = [
		{
			category: 'Morning Routine',
			title: '4AM Jogging',
			description:
				"There's a unique clarity in the early hours. Starting my day with a 4am run isn't just about fitness; it's a meditative practice that sets a disciplined tone for everything that follows.",
			image: joggingImg,
			align: 'left'
		},
		{
			category: 'Wellness',
			title: 'Home Workouts',
			description:
				'Building strength and resilience from the comfort of my home. My workout routine is centered on consistency, allowing me to push my limits and stay physically and mentally sharp.',
			image: workoutImg,
			isGrouped: true,
			align: 'right'
		},
		{
			category: 'Gaming',
			title: 'PS4 Sessions',
			description:
				"Whether it's the competitive thrill of FIFA and Call of Duty or the immersive worlds of Dirt 5 and Sifu. Gaming on my PS4 is my favorite way to unwind and connect with family and friends.",
			image: PS4Img, // Using existing gaming image
			isGroupStarted: false
		},
		{
			category: 'Cinema',
			title: 'Inspiration',
			description:
				'Movies like "The Social Network", "Five Feet Apart", and "Meet the Robinsons" sparked my journey into development. They remind me of the power of storytelling and human connection.',
			image: filmsImg,
			align: 'left'
		},
		{
			category: 'Knowledge',
			title: 'Tech Books',
			description:
				"I'm an avid reader of software literature. Deep diving into books about architecture, patterns, and best practices helps me refine my craft and stay grounded in foundational engineering principles.",
			image: booksImg, // Placeholder
			align: 'right'
		},
		{
			category: 'Growth',
			title: 'New Stack',
			description:
				"I dedicate my spare time to learning new tech stacks via YouTube and Udemy. It's a continuous cycle of curiosity and application that keeps my skillset relevant and expanding.",
			image: learningImg, // Placeholder
			isGrouped: true,
			align: 'left'
		},
		{
			category: 'Engineering',
			title: 'Rebuilding Tools',
			description:
				'True understanding comes from building. I challenge myself by rebuilding core tools—databases, git implementations, or browsers—to deconstruct how they work under the hood.',
			image: rebuildingImg,
			isGroupStarted: false
		},
		{
			category: 'Mental Sharpness',
			title: 'Maths Problems',
			description:
				"Practicing complex math problems helps sharpen my analytical thinking. It's a mental gym that enhances my problem-solving abilities in algorithmic challenges.",
			image: mathsImg, // Placeholder
			align: 'right'
		},
		{
			category: 'Future Tech',
			title: 'Robotics',
			description:
				"I'm diving into the world of robotics, exploring how software interacts with the physical world. It's a fascinating frontier that combines my love for coding with mechanical engineering.",
			image: roboticsImg, // Placeholder
			align: 'left'
		}
	];
</script>

<section class="bg-brand-pink px-4 py-20 text-brand-red md:px-8">
	<div class="mx-auto flex flex-col gap-16 md:gap-20">
		{#each sections as section, i}
			{#if section.isGrouped}
				<!-- Grouped Motorsports and Video Games Section -->
				<div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12">
					<!-- Motorsports Text: Aligned to Bottom -->
					<div
						class="flex flex-col justify-end gap-6 md:pb-0 {section.align === 'right'
							? 'md:order-2'
							: 'md:order-1'}"
					>
						<div class="flex flex-col gap-6">
							<h2 class="font-anton text-3xl uppercase">{section.title}</h2>
							<p class="max-w-xl font-instrument-serif text-xl leading-snug">
								{section.description}
							</p>
						</div>
					</div>

					<!-- Row 1: Motorsports Image -->
					<div class="flex-1 {section.align === 'right' ? 'md:order-1' : 'md:order-2'}">
						<div class="relative aspect-video w-full overflow-hidden bg-brand-red/10">
							<img
								src={section.image}
								alt={section.title}
								class="h-full w-full scale-110 object-cover will-change-transform"
								use:parallax={{ speed: 0.05 }}
							/>
							<div class="absolute inset-0 bg-brand-red/10 mix-blend-multiply"></div>
						</div>
					</div>

					<!-- Video Games Text: Aligned to Top -->
					<div
						class="mt-8 flex flex-col justify-start gap-6 md:mt-0 {section.align === 'right'
							? 'md:order-4'
							: 'md:order-3'}"
					>
						<div class="flex flex-col gap-6">
							<h2 class="font-anton text-3xl uppercase">{sections[i + 1].title}</h2>
							<p class="max-w-xl font-instrument-serif text-xl leading-snug">
								{sections[i + 1].description}
							</p>
						</div>
					</div>

					<!-- Row 2: Video Games Image -->
					<div class="flex-1 {section.align === 'right' ? 'md:order-3' : 'md:order-4'}">
						<div class="relative aspect-video w-full overflow-hidden bg-brand-red/10">
							<img
								src={sections[i + 1].image}
								alt={sections[i + 1].title}
								class="h-full w-full scale-110 object-cover will-change-transform"
								use:parallax={{ speed: 0.05 }}
							/>
							<div class="absolute inset-0 bg-brand-red/10 mix-blend-multiply"></div>
						</div>
					</div>
				</div>
			{:else if section.isGroupStarted === false}
				<div class="hidden"></div>
			{:else}
				<!-- Default Alternating Section -->
				<div
					class="flex flex-col gap-8 md:flex-row md:items-center {section.align === 'right'
						? 'md:flex-row-reverse'
						: ''}"
				>
					<!-- Text Content -->
					<div class="flex flex-1 flex-col gap-6">
						<div class="flex items-center gap-4">
							<span class="font-francois text-xs font-bold tracking-widest uppercase"
								>{section.category}</span
							>
						</div>
						<h2 class="font-anton text-3xl uppercase md:text-5xl">{section.title}</h2>
						<p class="max-w-xl font-instrument-serif text-xl leading-snug md:text-3xl">
							{section.description}
						</p>
					</div>

					<!-- Image Wrapper -->
					<div class="flex-1 overflow-hidden">
						<div class="relative aspect-4/3 w-full overflow-hidden bg-brand-red/10">
							<img
								src={section.image}
								alt={section.title}
								class="h-full w-full scale-110 object-cover will-change-transform"
								use:parallax={{ speed: 0.05 }}
							/>
							<div class="absolute inset-0 bg-brand-red/10 mix-blend-multiply"></div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>
