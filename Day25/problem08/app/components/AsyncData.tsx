"use client";
import { useEffect, useState } from 'react';

export default function AsyncData() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(post => setData(post.title));
  }, []);

  if (!data) return <div data-testid="loading">Loading...</div>;

  return <div data-testid="data">{data}</div>;
}
