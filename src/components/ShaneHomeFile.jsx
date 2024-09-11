import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, BookOpen, LayoutDashboard } from "lucide-react";

const ShaneHomeFile = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 via-green-200 to-green-300 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center max-w-4xl mx-auto py-20">
          <h1 className="text-6xl font-bold text-black mb-6">
            Regulatory Compliance Made Easy
          </h1>
          <p className="text-xl text-green-600">
            Our platform simplifies regulatory compliance for businesses of all
            sizes.
          </p>
          <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 font-bold">
            Get Started for Free
          </button>
        </section>

        {/* Updated Video Section */}
        <div className="mt-16 w-[80%] mx-auto aspect-[16/9] rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="Regulatory Compliance Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <Link to="/chat" className="block">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <MessageSquare
                size={48}
                className="text-green-500 mb-4 mx-auto"
              />
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                AI Chat Assistant
              </h3>
              <p className="text-green-500">
                Get instant answers to your compliance questions.
              </p>
            </div>
          </Link>

          <Link to="/resources" className="block">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <BookOpen size={48} className="text-green-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Compliance Resources
              </h3>
              <p className="text-green-500">
                Access guides, templates, and best practices.
              </p>
            </div>
          </Link>

          <Link to="/dashboard" className="block">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <LayoutDashboard
                size={48}
                className="text-green-500 mb-4 mx-auto"
              />
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Dashboard
              </h3>
              <p className="text-green-500">
                View your compliance metrics and reports.
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Recent Updates
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-3"></div>
              <p className="text-green-600">
                New regulatory compliance checklist added to Resources
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-3"></div>
              <p className="text-green-600">
                AI Chat Assistant updated with latest industry regulations
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-3"></div>
              <p className="text-green-600">
                Dashboard now includes customizable compliance metrics
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShaneHomeFile;
