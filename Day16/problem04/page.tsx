"use client";
import {usestate} from "react";

export default function ComplexForm(){
    const [errors,setErrors]=useState<Record<string,string>>({});

    async function handleSubmit(formdata:FormData){
        const name=formdata.get('name') as string;
        const email=formdata.get('email') as string;
        const age=formdata.get('age') as string;
        const website=formdata.get('website') as string;
        const newErrors:Record<string,string>={};

        if(!name||!name.length<2) newErrors.name="Name must be at least 2 characters long";
        if(!email||!email.includes('@')) newErrors.email="Email must be valid";
        if(!age||isNaN(Number(age))||Number(age)<18) newErrors.age="Age must be a number and at least 18";
        if(!website||!website.startsWith('http')) newErrors.website="Website must start with http";

        setErrors(newErrors);

        if(Object.keys(newErrors).length===0){
            alert("Form submitted successfully!");
    }
    return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Feedback</label>
          <textarea 
            name="feedback"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 ${errors.feedback ? 'border-red-500' : ''}`}
          />
          <div className="flex justify-between mt-1">
            {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
            <p className="text-sm text-gray-500 ml-auto">{message.length}/500</p>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
    );
}