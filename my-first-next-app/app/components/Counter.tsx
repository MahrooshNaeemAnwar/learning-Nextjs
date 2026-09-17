"use client";
import {useState} from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-blue-700 font-bold mb-4">Counter</h2>
            <p className="text-4xl font-bold text-gray-700 text-center mb-4">{count}</p>
            <div className="flex justify-center gap-4">
                <button 
                onClick={()=> setCount(count -1)} className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white">
                    -1
                </button>
                <button onClick={()=> setCount(0)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2">
                    reset
                </button>
                <button onClick={()=>setCount(count + 1)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
                    +1
                </button>
            </div>
        </div>
    );
} 