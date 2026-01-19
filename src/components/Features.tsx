import React from "react";
import { FaComments, FaBullseye, FaUserMd, FaChartLine } from "react-icons/fa";

const Features: React.FC = () => {
  const features = [
    {
      number: "01",
      title: "Instant Medical Answers",
      description:
        "Ask health questions anytime and get evidence-based responses from our AI trained on medical literature and best practices.",
      icon: <FaComments className="text-white" />,
    },
    {
      number: "02",
      title: "Smart Severity Detection",
      description:
        "Understand the urgency of your symptoms with our intelligent ranking system. Know when to seek professional help immediately.",
      icon: <FaBullseye className="text-white" />,
    },
    {
      number: "03",
      title: "Doctor Oversight",
      description:
        "Critical cases are flagged for admin review and can be redirected to qualified medical professionals for proper care.",
      icon: <FaUserMd className="text-white" />,
    },
    {
      number: "04",
      title: "Health Monitoring",
      description:
        "Doctors can monitor patient health stats, track progress, and schedule follow-ups directly through our platform.",
      icon: <FaChartLine className="text-white" />,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-display font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
            Powerful Features for Better Health
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to take control of your health, right in your
            pocket
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`card-hover bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-8 md:p-12 border border-sky-100 transition-all duration-1000 ${
                index % 2 === 0 ? "delay-100" : "delay-200"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div>
                  <div className="text-5xl font-display font-bold text-sky-300 mb-4">
                    {feature.number}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* CTA */}
                  <button className="mt-8 flex items-center space-x-2 text-sky-600 font-display font-semibold hover:text-sky-700 transition-colors">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image/Icon */}
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-gradient rounded-3xl flex items-center justify-center shadow-lg shadow-sky-500/25 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-6xl md:text-7xl">{feature.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Features;
