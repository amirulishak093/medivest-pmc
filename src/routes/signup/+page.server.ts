import { put } from '@vercel/blob';
import { createUser } from '$lib/server/user.service'

import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request}) => {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const phoneNumber = formData.get('phoneNumber') as string;
        const companyName = formData.get('companyName') as string;

        const cameraImage = formData.get('cameraImage') as File;

        let businessCardImage;

        try {
        
             if (cameraImage) {
                 const blobImage = await put(cameraImage.name, cameraImage, {
                     access: 'public'
                 })

                 businessCardImage = blobImage.url

                 console.log(businessCardImage);
            }

  

            const newUser = await createUser({
                data: {
                    name,
                    phoneNumber,
                    companyName,
                    businessCardImage 
                }
            })

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
