"use client";
import { useState } from 'react';

export default function DynamicForm() {
  const [skills, setSkills] = useState(['']);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const addSkill = () => setSkills([...skills, '']);
  const removeSkill = (index: number) => setSkills(skills.filter((_, i) => i !== index));
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };
  
  async function handleSubmit(formData: FormData) {
    const validSkills = skills.filter(s => s.trim());
    
    if (validSkills.length === 0) {
      setErrors({ skills: 'Add at least one skill' });
      return;
    }
    
    setErrors({});
    alert('Skills: ' + validSkills.join(', '));
  }
  
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Skills Form</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Skills</label>
          {skills.map((skill, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input 
                type="text" 
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                placeholder="Skill"
                className="flex-1 border rounded-lg px-4 py-2"
              />
              {skills.length > 1 && (
                <button type="button" onClick={() => removeSkill(index)} className="text-red-500">✕</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addSkill} className="text-blue-500 text-sm">+ Add Skill</button>
          {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
}
