'use client';
import {useState} from 'react';
export default function SurveyForm(){
    const [error,setError]=useState<Record<string,string>>({});

    async function handleSubmit(formdata:FormData){
        const name=formdata.get('name')as string;
        const experience=formdata.get('experience') as string;
        const rating=formdata.get('rating')as string;
        
     const newErrors:Record<string,string>={};

     if(!name) newErrors.name='name is required';
     if(!experience)newErrors.experience='select experience';
     if(!rating) newErrors.rating='select rating';

     if(Object.keys(newErrors).length>0){
        setError(newErrors);
        return;
     }
     setError({});
     alert('Form submitted successfully');
} return(
    <div className ="max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Survey</h1>
        <form action={handleSubmit} className="space-y-4">
            <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" className={`w-full border rounded-lg px-4 py-2 ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Experience</label>
          <select name="experience" className={`w-full border rounded-lg px-4 py-2 ${errors.experience ? 'border-red-500' : ''}`}>
            <option value="">Select...</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            </select>
          {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} className="flex items-center gap-1">
                <input type="radio" name="rating" value={num} />
                <span>{num}</span>
              </label>
            ))}
          </div>
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
        
    </div> 
);
    
}