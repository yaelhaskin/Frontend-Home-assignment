'use server';

import { redirect } from "next/navigation";
import { connectUser } from "./requests";

export const handleUserForm = async (formData) => {
    const userInfo = {
        email: formData.get('email'),
        firstName: formData.get('name'),
        causes: formData.getAll('causes[]')
    }

    await connectUser(userInfo);
    redirect(`/landing?email=${encodeURIComponent(userInfo.email)}&name=${encodeURIComponent(userInfo.firstName)}&causes=${encodeURIComponent(userInfo.causes.join(','))}`);
}
