import {NextResponse,NextRequest} from 'next/server';
let posts=[{
    id:1,title:'my first post' ,content:'hello world! this is my first post',comments:[]
}];
export async function GET(){
    return NextResponse.json(posts);
}
export async function POST(request:NextRequest){
    const body=await request.json();
    const newPost={id:Date.now,...body,comments:[]};
    posts.push(newPost);
    return NextResponse.json(newPost,{status:201});
}