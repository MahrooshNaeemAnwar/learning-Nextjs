'use client';
import {useState} from 'react';

export default function FeedbackForm(){
    const [message,setMessage] = useState('');
    const [error,setError]=useState<Record<string,string>>({});

    async function handleSubmit(formdata:FormData){
        const feedback=formdata.get('feedback') as string;
        if(feedback.length<20){
            setError({feedback:'feedback must be at least 20 characters long'})
            return;
        }
        setError({});
        alert('feedback submitted successfully');
    }
    return(
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