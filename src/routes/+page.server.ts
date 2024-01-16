import { ZodError } from 'zod';
import { contactSchema } from '$lib/schemas/contact/contactSchema';
import sendgrid from '@sendgrid/mail';
import { PRIVATE_SENDGRID_API_KEY } from '$env/static/private';
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
