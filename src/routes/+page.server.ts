import type { Actions } from './$types';
import fs from 'node:fs/promises';

export const load = async () => {
	let messages: string[] = [];
	try {
		messages = JSON.parse(
			(await fs.readFile('/data/database.json', { encoding: 'utf-8' })) || '[]'
		);
	} catch (e) {
		// ignore
	}

	return {
		messages
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const message = data.get('message') as string;
		const password = data.get('password') as string;

		const messages = (await load()).messages;

		if (password !== process.env.PASSWORD) {
			return { success: false };
		}

		await fs.writeFile('/data/database.json', JSON.stringify([...messages, message], null, 4), {
			encoding: 'utf-8'
		});

		return { success: true };
	}
};
