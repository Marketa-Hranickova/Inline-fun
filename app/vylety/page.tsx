'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>

      {status === 'success' && <p className="text-green-600 mt-4">Message sent!</p>}
      {status === 'error' && <p className="text-red-600 mt-4">Something went wrong.</p>}
    </div>
  );
}
