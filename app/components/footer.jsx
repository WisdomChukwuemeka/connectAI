export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-500">ConnectAI</h2>
          <p className="text-sm text-gray-400">
            Powering your AI experiences with speed and simplicity.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#features" className="hover:text-pink-400 transition">
            Features
          </a>
          <a href="#docs" className="hover:text-pink-400 transition">
            Docs
          </a>
          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-sm text-gray-500">
          © {new Date().getFullYear()} ConnectAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
