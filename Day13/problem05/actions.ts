'use server';

export type SearchState = {
  results: { id: number; title: string }[];
  query: string;
};

export async function searchPosts(prevState: SearchState, formData: FormData): Promise<SearchState> {
  const query = formData.get('query') as string;

  const posts = [
    { id: 1, title: 'Next.js Tutorial' },
    { id: 2, title: 'React Guide' },
    { id: 3, title: 'Tailwind CSS' },
  ];

  const results = posts.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return { results, query };
}
