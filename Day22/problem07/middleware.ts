import { auth } from '@/auth';

export default auth((req)=>{
    if(!req.auth && req.nextUrl.pathname.startsWith('/dashboard')){
        return Response.redirect(new URL("/api/auth/signin",req.nextUrl))
    }
});

export const config ={
    matcher:["/dashboard:path*"],
}