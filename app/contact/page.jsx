"use client";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br to-white px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Connect with <span className="bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">ConnectAI</span>
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          <strong>ConnectAI</strong> is a smart and friendly chatbot designed to make conversations 
          easier, faster, and more helpful. Whether you need answers, guidance, or just a quick chat, 
          ConnectAI is always ready to connect with you.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Proudly built and based in <span className="font-semibold text-green-600">Nigeria</span>, 
          ConnectAI is part of a growing tech ecosystem focused on bringing innovative 
          digital solutions to Africa and the world.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mb-3">How to Connect</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Start a chat anytime — ConnectAI is available 24/7.</li>
          <li>Ask questions in natural language and get quick answers.</li>
          <li>Use ConnectAI for learning, productivity, and everyday assistance.</li>
          <li>Join the growing community of users across Nigeria and beyond.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-6">
          No matter where you are, ConnectAI is just a message away. Stay connected, stay informed, 
          and let AI make life a little simpler.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-green-700 mb-2">Location</h3>
          <p className="text-gray-700">📍 Lagos, Nigeria</p>
        </div>
      </div>
    </section>
  );
}
