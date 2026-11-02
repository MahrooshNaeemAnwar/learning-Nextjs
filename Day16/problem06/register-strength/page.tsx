'use client';
import {useState} from 'react';

export default function ResgisterwithLength(){
    const [password,setPassword] = useState('');
    const [error,setError]=useState<Record<string,string>>({});

    const getStrength =()=>{
        let strength=0;
        if (password.length >= 6)strength++;
        if(password.length >= 8)strength++;
        if (/[A-Z]/.test(password))strength++;
        if (/[0-9]/.test(password))strength++;
        if (/[^A-Za-z0-9]/.test(password))strength++;
        return strength;

    };
    const strength=getStrength();
    const strengthColors=['bg-red-500','bg-orange-500','bg-yellow-500','bg-green-500','bg-blue-500'];
    const strengthLabels=['Very Weak','Weak','Moderate','Strong','Very Strong'];

    async function handleSubmit(formdata:FormData){
        const pwd=formdata.get('password') as string;

        if(pwd.length<6){
            setError({paswsword:'password must be at least of 6 characters'});
            return;
        }
        setError({});
        alert('Registered');
    }
    return(
        <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 ${errors.password ? 'border-red-500' : ''}`}
          />
          {password && (
            <div className="mt-2">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-2 flex-1 rounded ${i <= strength ? strengthColors[strength - 1] : 'bg-gray-200'}`} />
                ))}
              </div>
               <p className="text-sm text-gray-600">{strengthLabels[strength - 1] || 'Too weak'}</p>
            </div>
          )}
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Register</button>
      </form>
    </div>
    );
}