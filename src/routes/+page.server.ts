import { ZodError } from 'zod';
import { contactSchema } from '$lib/schemas/contact/contactSchema';

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const form = contactSchema.parse(formData);
		} catch (err: unknown) {
			if (!(err instanceof ZodError)) throw new Error('Unknown error');
			const { fieldErrors: errors } = err.flatten();
			const { name, email, message } = formData;
			return {
				data: { name, email, message },
				errors
			};
		}
	}
};
