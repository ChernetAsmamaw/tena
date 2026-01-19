import React from "react";
import {
  FaRobot,
  FaExclamationTriangle,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaRobot className="text-sky-600" />,
      title: "AI Medical Assistant",
      description:
        "Trained on medical knowledge, providing instant answers to health questions in multiple languages.",
      features: [
        "24/7 Availability",
        "Multi-language Support",
        "Evidence-based Responses",
      ],
    },
    {
      icon: <FaExclamationTriangle className="text-orange-500" />,
      title: "Severity Assessment",
      description:
        "Our AI evaluates symptoms and ranks urgency levels to help you understand when professional help is needed.",
      features: [
        "Real-time Analysis",
        "Risk Indicators",
        "Action Recommendations",
      ],
    },
    {
      icon: <FaUserMd className="text-sky-600" />,
      title: "Doctor Dashboard",
      description:
        "Medical professionals can monitor patients, track health stats, and provide personalized care and follow-ups.",
      features: ["Patient Monitoring", "Health Tracking", "Referral System"],
    },
    {
      icon: <FaHospital className="text-sky-600" />,
      title: "Admin Portal",
      description:
        "Manage referrals, monitor system health, and ensure critical cases are routed to appropriate medical facilities.",
      features: ["Case Management", "Analytics", "Automated Routing"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-display font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tena AI provides multiple layers of healthcare support, from
            AI-powered assistance to professional oversight
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-hover glass-white rounded-2xl p-8 border border-sky-100 transition-all duration-1000 ${
                index % 2 === 0 ? "delay-100" : "delay-200"
              }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-dark mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-32 -right-40 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Services;
