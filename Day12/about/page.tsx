import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',  // Becomes "About | My Site"
};

export default function AboutPage() {
  return <h1>About</h1>;
}