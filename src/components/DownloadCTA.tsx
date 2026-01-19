import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

const DownloadCTA: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Users in Rwanda", value: "Starting Soon" },
    { label: "Healthcare Partners", value: "20+" },
    { label: "Lives to Impact", value: "Millions" },
  ];

  return (
    <section
      id="download"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className="glass-white rounded-3xl p-12 md:p-20 border border-sky-200 mb-16 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                Get Healthcare in Your Hands
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tena AI is launching in Rwanda. Be among the first to access
                AI-powered healthcare from anywhere, anytime.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Free to use with premium features
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Works offline and online
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Privacy & security guaranteed
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/coming-soon")}
                  className="btn-blue px-8 py-4 rounded-full font-display font-semibold text-lg"
                >
                  Get App
                </button>
                <button className="btn-blue-outline px-8 py-4 rounded-full font-display font-semibold text-lg">
                  Doctor Sign Up
                </button>
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="w-60 h-96 bg-dark rounded-3xl border-8 border-dark shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-sky-50 flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-5xl mb-4 flex justify-center text-sky-600">
                      <FaHeartbeat />
                    </div>
                    <h3 className="font-display font-bold text-dark mb-2">
                      TenaAI
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Your AI Healthcare Assistant
                    </p>
                    <div className="w-12 h-12 bg-sky-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/30 to-blue-500/20 rounded-3xl blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-blue rounded-2xl p-8 text-center card-hover transition-all duration-1000 ${
                index === 0
                  ? "delay-100"
                  : index === 1
                    ? "delay-200"
                    : "delay-300"
              }`}
            >
              <div className="text-3xl font-display font-bold text-sky-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -top-40 right-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default DownloadCTA;
