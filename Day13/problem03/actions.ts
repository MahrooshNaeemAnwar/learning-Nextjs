'use server';
export async function userRegister(formData:FormData){
    const name=formData.get('name') as string;
    const email=formData.get('email') as string;
    const password=formData.get('password')as string;

    const errors:Record<string,string>={};
 if(!name || name.length<2){
    errors.name='Name must contain at least 2 characters';
 }
 if(!email || !email.includes('@')){
    errors.email='Invalid email';
}
 if (!password || password.length < 6){
    errors.password='password must be at least of 6 characters';
}
 if (Object.keys(errors).length > 0){
    return {errors};
 }
return {success:true}
}
