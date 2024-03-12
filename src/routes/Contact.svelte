<script lang="ts">
	export let form: ActionData;
	export let contact_links: NavLink[], social_links: NavLink[];

	import ContactSubmitBtn from '$lib/components/forms/ContactSubmitBtn.svelte';
	import ContactInput from '$lib/components/forms/ContactInput.svelte';
	import ContactTextArea from '$lib/components/forms/ContactTextArea.svelte';
	import { enhance } from '$app/forms';
	import { contactSchema } from '$lib/schemas/contact/contactSchema';
	import type { ActionData } from './$types';
	import { PUBLIC_HCAPTCHA_SITE_KEY } from '$env/static/public';
	import { hCaptchaLoader } from '@hcaptcha/loader';
	import { onMount } from 'svelte';

	let btnText = 'Send Message';
	let btnIcon: string | undefined = 'mdi:send';
	let btnClasses: string;
	let loading = false;

	onMount(async () => {
		const hcaptcha = await hCaptchaLoader();
		hcaptcha.render('hCaptcha', {
			sitekey: PUBLIC_HCAPTCHA_SITE_KEY,
			theme: 'dark'
		});
	});
</script>

<section id="contact" class="pointer-events-auto max-w-4xl">
	<h1 class="mb-8 text-3xl font-semibold tracking-wide">Contact Me</h1>

	<div
		class="relative grid w-full max-w-4xl grid-cols-1 gap-16 rounded-lg border border-gray-800 bg-gray-900 p-6 sm:grid-cols-2"
	>
		<form
			method="POST"
			class="space-y-8"
			use:enhance={({ formElement, cancel }) => {
				loading = true;

				let formData = Object.fromEntries(new FormData(formElement));

				let validData = contactSchema.safeParse(formData);

				function resetBtn(delay = 5000) {
					setTimeout(() => {
						btnText = 'Send Message';
						btnIcon = 'mdi:send';
						btnClasses = 'bg-blue-600 hover:bg-blue-500 focus:bg-blue-500';
					}, delay);
				}
				if (!validData?.success) {
					const { name, email, message } = formData;
					form = {
						data: { name, email, message },
						errors: validData?.error?.flatten().fieldErrors
					};
					cancel();
					btnText = 'Error Sending Message';
					btnIcon = undefined;
					btnClasses = 'bg-red-600 hover:bg-red-500 focus:bg-red-500';
					resetBtn();
					loading = false;
				}

				return async ({ result, update }) => {
					if (result?.type === 'success') {
						btnText = 'Message Sent!';
						btnIcon = 'mdi:check-bold';
						btnClasses = 'bg-green-600 hover:bg-green-500 focus:bg-green-500';
						resetBtn();
					} else {
						btnText = 'Error Sending Message';
						btnIcon = undefined;
						btnClasses = 'bg-red-600 hover:bg-red-500 focus:bg-red-500';
						resetBtn();
					}

					loading = false;
					await update();
				};
			}}
		>
			<h2 class="text-2xl font-semibold">Send Me A Message</h2>

			<div class="space-y-6">
				<div class="space-y-4">
					<ContactInput
						type="text"
						name="name"
						label="Your Name"
						value={form?.data?.name || ''}
						required
						messages={form?.errors?.name}
					/>
					<ContactInput
						type="text"
						name="email"
						label="Email Address"
						value={form?.data?.email || ''}
						required
						messages={form?.errors?.email}
					/>
					<ContactTextArea
						name="message"
						label="Message"
						value={form?.data?.message.toString() || ''}
						messages={form?.errors?.message}
					/>
					<div id="hCaptcha"></div>
				</div>

				<ContactSubmitBtn
					disabled={loading}
					bind:text={btnText}
					bind:btnClasses
					bind:icon={btnIcon}
				/>
			</div>
		</form>
		<div class="flex flex-col space-y-8 rounded-lg">
			<div class="flex h-full -translate-x-2 flex-col gap-8">
				<div class="space-y-2">
					<h3 class="px-1.5 text-lg font-bold tracking-wide text-gray-300">Direct</h3>
					{#each contact_links as link}
						<a
							href={link.href}
							class="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-gray-300 duration-300 hover:bg-gray-700 hover:text-gray-100"
						>
							<iconify-icon icon={link.icon} width="1.5rem" />
							<span class="w-full overflow-hidden text-ellipsis text-lg font-bold">{link.text}</span
							>
						</a>
					{/each}
				</div>

				<div>
					<h3 class="px-1.5 text-lg font-bold tracking-wide text-gray-300">Social Media</h3>
					<div class="my-2 flex flex-wrap gap-2">
						{#each social_links as link}
							<a
								href={link.href}
								title={link.text}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-4 rounded-md p-0.5 text-gray-300 duration-300 hover:bg-gray-700 hover:text-gray-100"
							>
								<iconify-icon icon={link.icon} width="3rem" class="pointer-events-none" />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
