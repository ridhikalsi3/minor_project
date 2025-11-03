import React, { useState, useEffect } from "react";
import {
  Heart,
  Activity,
  Droplets,
  Wind,
  Shield,
  Bell,
  LineChart,
  Users,
} from "lucide-react";

export default function HealthWatchLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Heart,
      title: "ECG Monitoring",
      description:
        "Continuous heart rate and heart rate variability tracking to detect irregularities and cardiovascular patterns in real-time.",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Droplets,
      title: "Stress Detection",
      description:
        "Galvanic skin response sensors assess emotional arousal and stress through real-time skin conductance data.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Wind,
      title: "Respiration Tracking",
      description:
        "Track breathing rhythm and detect respiratory abnormalities early with advanced airflow sensors.",
      color: "from-teal-400 to-emerald-600",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description:
        "Get immediate notifications when vital signs cross critical thresholds—ensuring timely intervention.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: LineChart,
      title: "Analytics Dashboard",
      description:
        "Interactive graphs and trend analytics to visualize long-term health improvements and risk factors.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "End-to-end encryption keeps your health data safe, accessible only to you and your caregivers.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const metrics = [
    { value: "24/7", label: "Monitoring", icon: Activity },
    { value: "3+", label: "Vital Signs", icon: Heart },
    { value: "Real-Time", label: "Alerts", icon: Bell },
    { value: "Cloud", label: "Based", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-indigo-400 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-500"></div>
        </div>

        <div className="text-center px-6 z-20">
          <div className="mb-10">
            <Heart className="w-24 h-24 text-white mx-auto animate-bounce drop-shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            HealthWatch IoT
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light opacity-90">
            Remote Health & Workload Monitoring for Older Adults
          </p>
          <p className="max-w-2xl mx-auto text-gray-200 mb-10 text-lg">
            Empowering independence through continuous, intelligent monitoring
            — delivering peace of mind for families and caregivers.
          </p>
          <button className="bg-white text-purple-700 px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Get Started Today
          </button>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white shadow-lg -mt-16 relative z-20 mx-8 md:mx-20 rounded-2xl p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center mb-2 text-purple-600">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {metric.value}
                </h3>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Comprehensive Health Monitoring
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge IoT innovations that ensure smarter, safer, and
            more connected healthcare experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            How It Works
          </h2>

          <div className="max-w-4xl mx-auto space-y-10">
            {[
              {
                step: 1,
                title: "Wear the Sensors",
                desc: "Comfortable, non-invasive IoT sensors continuously track ECG, GSR, and respiration.",
              },
              {
                step: 2,
                title: "Data Processing",
                desc: "Real-time data is securely transmitted to the cloud where AI algorithms analyze vital signs.",
              },
              {
                step: 3,
                title: "Stay Informed",
                desc: "Family and healthcare providers receive instant alerts and can access visual dashboards anytime.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Healthcare for Your Loved Ones?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of families who trust HealthWatch IoT for real-time
            health assurance and smarter caregiving.
          </p>
          <button className="bg-white text-purple-700 px-12 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 <span className="text-purple-400">HealthWatch IoT</span> — Empowering seniors with intelligent health monitoring.
          </p>
        </div>
      </footer>
    </div>
  );
}
