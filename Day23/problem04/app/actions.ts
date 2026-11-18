'use client';
import { prisma } from '@/lib/prisma';

export async function craeteUser(formData:FormData){
    const name=formData.get('name') as string;
    const email=formData.get('email') as string;
    const user=await prisma.user.create({
        data:{name,email},
    }) 
    return 
       {success:true,user};
}