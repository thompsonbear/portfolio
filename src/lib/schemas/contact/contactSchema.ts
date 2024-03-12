import { z } from 'zod';
export const contactSchema = z.object({
	name: z.string().min(2, { message: 'Required' }),
	email: z.string().min(1, { message: 'Required' }).email(),
	message: z.string().min(1, { message: 'Required' }),
	'h-captcha-response': z.string()
});
