import { contactSchema } from '$lib/schemas/contact/contactSchema';
import { fail } from '@sveltejs/kit';
import sendgrid from '@sendgrid/mail';
import { PRIVATE_SENDGRID_API_KEY, HCAPTCHA_SECRET_KEY } from '$env/static/private';
import { PUBLIC_HCAPTCHA_SITE_KEY } from '$env/static/public';
sendgrid.setApiKey(PRIVATE_SENDGRID_API_KEY);

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const validData = contactSchema.safeParse(formData);

		if (!validData?.success) {
			const { fieldErrors: errors } = validData?.error?.flatten();
			const { name, email, message } = formData;
			return {
				data: { name, email, message },
				errors
			};
		}

		const { name, email, message } = validData.data;
		const hcaptcha_response = validData.data['h-captcha-response'];

		// Verify the hCaptcha response
		const hcaptchaParams = {
			secret: HCAPTCHA_SECRET_KEY,
			response: hcaptcha_response,
			sitekey: PUBLIC_HCAPTCHA_SITE_KEY	
		};

		const hcaptchaURLParams = new URLSearchParams(hcaptchaParams).toString();

		const res = await fetch(`https://api.hcaptcha.com/siteverify?${hcaptchaURLParams}`, {
			method: 'POST'
		});

		const { success } = await res.json();

		if (!success) {
			return fail(400, { message: 'hCaptcha verification failed' })
		}
		// ------------------------------

		const options = {
			from: 'Contact Form <form@thompsonbear.com>',
			to: 'thompsonbear21@gmail.com',
			subject: `Message from ${name} (${email})`,
			text: message
		};

		try {
			await sendgrid.send(options);
		} catch (error) {
			console.error(error);
		}
	}
};
