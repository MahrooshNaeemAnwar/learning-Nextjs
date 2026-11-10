import {notFound} from "next/navigation";

const posts=['hello','nextjs','tailwindcss','typescript','react','javascript'];

export default function BlogPost({params}:{params:Promise<{slug:string}>}){
    const {slug}=params;
    if(!posts.includes(slug)){
        notFound();
    }
    return(
        <div>
            <h1 className="text-3xl font-bold underline">Blog Post: {slug}</h1>
        </div>
    );
}
