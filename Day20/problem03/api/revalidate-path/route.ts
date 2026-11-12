import {nextResponse} from 'next/server';
import {revalidatePath} from 'next/cache';

export async function POST(){
    revalidatePath('/blog');
    return nextResponse.json({revalidate : true});
}