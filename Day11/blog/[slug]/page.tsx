import {notFound} from "next/navigation";
const posts=[
  {slug:'hello',title:'Hello world'},
  {slug:'nextjs',title:'Next.js is awesome'},
];
export async function BlogPost({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    </div>
  );
}