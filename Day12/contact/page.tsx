import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',  // Becomes "Contact | My Site"
};

export default function ContactPage() {
  return <h1>Contact</h1>;
}