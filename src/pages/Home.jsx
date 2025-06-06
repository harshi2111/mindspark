import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to MindSpark</h1>
      <p className="text-lg mb-8 max-w-md text-center">
        Create or join a brainstorming room and ignite your team's ideas with AI-powered collaboration.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
        Create a Room
      </button>
    </div>
  );
}
