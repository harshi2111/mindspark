import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 hover:underline">Go Back Home</Link>
    </div>
  );
}
