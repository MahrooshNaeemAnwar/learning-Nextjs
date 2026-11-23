"use client";
import { useState, useEffect } from 'react';

export default function AutoSaveForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (title || content) {
        localStorage.setItem('draft', JSON.stringify({ title, content }));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [title, content]);

  useEffect(() => {
    const draft = localStorage.getItem('draft');
    if (draft) {
      const { title, content } = JSON.parse(draft);
      setTitle(title);
      setContent(content);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Auto-Save Form</h1>
      {saved && <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">Draft saved!</div>}
      <div className="space-y-4">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full border rounded-lg px-4 py-2" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" rows={4} className="w-full border rounded-lg px-4 py-2" />
      </div>
    </div>
  );
}
