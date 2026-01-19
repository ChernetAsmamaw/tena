import React from "react";
import { FaRobot, FaExclamationTriangle, FaUserMd } from "react-icons/fa";

const ComingSoon: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-32 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center animate-fade-in">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-blue-gradient rounded-2xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-display font-bold text-dark">TenaAI</h1>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-display font-bold text-dark mb-6">
          Healthcare for Everyone
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-12 font-body">
          An AI-powered medical assistant bringing quality healthcare
          information to rural communities across Africa
        </p>

        {/* Newsletter Signup */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-sky-200 focus:outline-none focus:border-sky-500 transition-colors"
            />
            <button
              type="submit"
              className="btn-blue px-8 py-4 rounded-full font-display font-semibold whitespace-nowrap"
            >
              Notify Me
            </button>
          </div>
        </form>

        {/* Features Coming */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-blue rounded-2xl p-6">
            <div className="text-4xl mb-4 flex justify-center">
              <FaRobot className="text-sky-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark mb-2">
              AI Medical Assistant
            </h3>
            <p className="text-gray-600">
              Get medical advice and health information instantly
            </p>
          </div>
          <div className="glass-blue rounded-2xl p-6">
            <div className="text-4xl mb-4 flex justify-center">
              <FaExclamationTriangle className="text-orange-500" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark mb-2">
              Severity Ranking
            </h3>
            <p className="text-gray-600">
              Know when to seek immediate professional help
            </p>
          </div>
          <div className="glass-blue rounded-2xl p-6">
            <div className="text-4xl mb-4 flex justify-center">
              <FaUserMd className="text-sky-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark mb-2">
              Doctor Monitoring
            </h3>
            <p className="text-gray-600">
              Medical professionals can track patient health
            </p>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="mt-12">
          <span className="inline-block px-6 py-3 bg-sky-100 text-sky-700 rounded-full font-display font-semibold">
            Coming Soon in Rwanda
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
