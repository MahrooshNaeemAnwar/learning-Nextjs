import {NextResponse,NextRequest} from 'next/server';
let users=[
    {id:1,name:'mahroosh',email:'mahrooshnaeem10@gmail.com'},
    {id:2,name:'rimsha',email:'rimshawakeel06@gmail.com'}
];
export async function GET(){
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}