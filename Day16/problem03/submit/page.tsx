"use client";
import {useState} from 'react';
export default function SubmitForm(){
    const [Loading, setLoading] = useState(false);
    const [success,GetSuccess]=useState(false);

    async function handleSubmit(formdata:FormData){
        setLoading(true);
        await new Promise((resolve)=>setTimeout(resolve,2000));
        GetSuccess(true);
        setLoading(false);
    }return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Submit Form</h1>
      {success ? (  
        <div className="bg-green-100 text-green-700 p-4 rounded">Submitted successfully!</div>
      ) : (
        <form action={handleSubmit} className="space-y-4">
          <input type="text" name="data" placeholder="Enter data" className="w-full border rounded-lg px-4 py-2" required />
          <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
    );
}