<script lang="ts">
</script>

<svelte:head>
	<title>Contact - David Udo</title>
	<meta name="description" content="Get in touch with David Udo for collaboration opportunities" />
</svelte:head>

<div class="relative min-h-lvh overflow-hidden bg-[#1a0f4d] p-8 max-sm:p-4">
	<div
		class="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 pt-[8vh] max-lg:gap-16 max-lg:pt-[10vh] max-sm:gap-0 max-sm:pt-[15vh] lg:grid-cols-2"
		style="height: calc(100vh - 4rem);"
	>
		<!-- Left side: Large text -->
		<div class="relative">
			<h1
				class="m-0 font-anton leading-[0.9] font-black text-[#f5e6d3] uppercase"
				style="font-size: clamp(3rem, 12vw, 10rem);"
			>
				<span class="block">LET'S</span>
				<span class="relative inline-block">
					<span class="inline-block">WORK</span>
					<div
						class="instagram-banner absolute top-1/2 left-0 z-10 flex w-[200%] max-w-sm -translate-y-1/2 overflow-hidden bg-[#f4e942] py-2 whitespace-nowrap"
					>
						<div class="animate-marquee flex">
							{#each Array(10) as _}
								<span class="px-4 font-instrument font-bold tracking-[0.05em] text-black">
									AVAILABLE FOR WORK
								</span>
							{/each}
						</div>
						<div class="animate-marquee aria-hidden flex" aria-hidden="true">
							{#each Array(10) as _}
								<span class="px-4 font-instrument font-bold tracking-[0.05em] text-black">
									AVAILABLE FOR WORK
								</span>
							{/each}
						</div>
					</div>
				</span>
				<span class="block">TOGETHER</span>
			</h1>
		</div>

		<!-- Right side: Contact information -->
		<div class="flex flex-col gap-12 text-white max-lg:pl-0 lg:pl-8">
			<p
				class="m-0 max-w-sm font-instrument-serif text-3xl leading-snug font-light max-sm:text-2xl"
			>
				If you're interested in working together, feel free to send me an email.
			</p>

			<div class="flex flex-col gap-10 max-sm:gap-8">
				<div class="flex flex-col gap-2">
					<span class="text-xs font-medium tracking-widest text-[#8b7fb8] uppercase">EMAIL</span>
					<a
						href="mailto:dave.etim.udo@gmail.com"
						class="group relative inline-block w-fit font-normal text-white no-underline"
						style="font-size: clamp(1.125rem, 1.3vw, 1.5rem);"
					>
						DAVE.ETIM.UDO@GMAIL.COM
						<span
							class="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
						></span>
					</a>
				</div>

				<div class="flex flex-col gap-2">
					<span class="text-xs font-medium tracking-widest text-[#8b7fb8] uppercase">PHONE</span>
					<a
						href="tel:+2348107587015"
						class="group relative inline-block w-fit font-normal text-white no-underline"
						style="font-size: clamp(1.125rem, 1.3vw, 1.5rem);"
					>
						+234 810 758 7015
						<span
							class="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
						></span>
					</a>
				</div>

				<div class="flex flex-col gap-2">
					<span class="text-xs font-medium tracking-widest text-[#8b7fb8] uppercase">LINKEDIN</span>
					<a
						href="https://linkedin.com/in/davidudo"
						target="_blank"
						class="group relative inline-block w-fit font-normal text-white no-underline"
						style="font-size: clamp(1.125rem, 1.3vw, 1.5rem);"
					>
						@DAVIDUDO
						<span
							class="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
						></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.instagram-banner {
		font-size: clamp(0.6rem, 1.2vw, 1rem);
	}

	.animate-marquee {
		animation: scroll 30s linear infinite;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
