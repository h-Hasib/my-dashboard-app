import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-gray-600 mb-8">Next.js Authentication Demo</p>
        <Link
          href="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}