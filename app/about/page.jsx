"use client";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br to-white px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          About <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">ConnectAI</span>
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          <strong>ConnectAI</strong> is your intelligent chatbot assistant designed to make
          conversations smoother, smarter, and more engaging. Whether you’re asking
          questions, exploring new ideas, or just looking for a quick chat,
          ConnectAI is here to help — 24/7.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Powered by advanced AI models, ConnectAI can understand natural language,
          provide helpful answers, and even assist with tasks. It’s built with a
          focus on <span className="font-semibold text-blue-600">simplicity</span>,{" "}
          <span className="font-semibold text-blue-600">reliability</span>, and{" "}
          <span className="font-semibold text-blue-600">user experience</span>.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Why ConnectAI?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Always available for quick chats and answers.</li>
          <li>Understands your questions in natural language.</li>
          <li>Fast, reliable, and constantly improving.</li>
          <li>Designed with a friendly and approachable personality.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed">
          Whether you’re a student, professional, or just curious, ConnectAI is
          here to make your digital interactions more meaningful. Start chatting
          today and experience the future of AI-powered conversations.
        </p>
      </div>
    </section>
  );
}
