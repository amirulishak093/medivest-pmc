import { createUser } from '$lib/server/user.service';
import { json, type RequestEvent } from '@sveltejs/kit';


export async function POST(event: RequestEvent) {
	try {
		const { name, phoneNumber, companyName, businessCardImage } = await event.request.json();

		await createUser({
			data: {
                name,
                phoneNumber,
                companyName,
                businessCardImage
			}
		});

		console.log(`Id: ${userId}, Name: ${name}`);

		return json({ success: true });
	} catch (error) {
		console.error('Error adding user: ', error);
		return json(
			{ success: false, error: 'An error occured while adding user' },
			{ status: 500 }
		);
	}
}
