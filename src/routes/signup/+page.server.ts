import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request}) => {
        const formData = await request.formData();

        console.log(formData)

        try {

            return {
                success: true,
                status: 'Form is submitted'
            }

        } catch (error) {
            return {
                error
            }
        }
    }
}