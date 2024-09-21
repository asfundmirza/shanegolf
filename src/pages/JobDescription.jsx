import React from "react";
import { useParams } from "react-router-dom";
import bgImage from "../assets/jobDescription/jobDescription.jpg";
import illustration from "../assets/jobDescription/jobDescription-illustration.png";
import { Navigation } from "lucide-react";
import { Timer } from "lucide-react";
import { MapPinCheckInside } from "lucide-react";

const JobDescription = () => {
  const { jobTitle } = useParams(); // Get the job title from the URL

  // Simulate fetching data based on the job title
  const jobDetails = {
    "react-developer": {
      title: "React Developer",
      location: "USA",
      time: "8 hours",
      type: "On Site",
      description:
        "A full-time job requiring expertise in HTML, CSS, and JavaScript.",
      responsibilities: [
        "Develop, test, and maintain web applications using React.",
        "Collaborate with backend developers to integrate APIs.",
        "Design scalable and optimized frontend applications.",
        "Troubleshoot and debug issues in the frontend codebase.",
        "Participate in code reviews and follow coding standards.",
      ],
      qualifications: [
        "Proven experience as a React Developer.",
        "Proficiency in JavaScript, HTML, CSS, and React.",
        "Familiarity with modern frontend workflows and tools (e.g., Webpack, Babel).",
        "Experience with version control (Git).",
        "Strong problem-solving skills.",
      ],
      preferredSkills: [
        "Experience with Redux or other state management libraries.",
        "Familiarity with Next.js or similar frameworks.",
        "Knowledge of cloud-based services (AWS, Azure).",
      ],
      offer: [
        "Competitive salary.",
        "Opportunities for professional growth.",
        "Flexible work hours and remote work options.",
      ],
    },
    "graphic-designing": {
      title: "Graphic Designer",
      description: "A full-time job focusing on graphic design skills.",
      location: "USA",
      time: "8 hours",
      type: "On Site",
      responsibilities: [
        "Create visually compelling designs for web and print materials.",
        "Collaborate with the marketing team to design campaigns and promotional content.",
        "Develop brand assets including logos, typography, and color schemes.",
        "Ensure consistency in designs and content across all company platforms.",
        "Stay updated on the latest design trends and tools.",
      ],
      qualifications: [
        "Proven experience as a Graphic Designer or in a similar role.",
        "Proficiency in design software (e.g., Adobe Creative Suite, Sketch, Figma).",
        "Strong portfolio showcasing creative design skills.",
        "Understanding of visual elements (layout, typography, color theory).",
        "Attention to detail and a keen eye for aesthetics.",
      ],
      preferredSkills: [
        "Experience with UI/UX design.",
        "Familiarity with video editing software.",
        "Knowledge of print design and production processes.",
      ],
      offer: [
        "Competitive salary and benefits package.",
        "Opportunities for creative freedom and project ownership.",
        "Flexible working hours and remote options.",
      ],
    },

    "digital-marketing": {
      title: "Digital Marketing Specialist",
      description: "A full-time job focusing on digital marketing strategies.",
      location: "USA",
      time: "8 hours",
      type: "Remote",
      responsibilities: [
        "Develop and implement digital marketing strategies to increase online presence.",
        "Manage social media channels and create engaging content.",
        "Monitor and analyze website traffic and campaign performance metrics.",
        "Optimize digital campaigns to improve conversion rates and ROI.",
        "Collaborate with the content team to ensure alignment between marketing and messaging.",
      ],
      qualifications: [
        "Proven experience in digital marketing or a similar role.",
        "Proficiency in Google Analytics, SEO/SEM, and social media management tools.",
        "Strong understanding of marketing analytics and data-driven decision making.",
        "Excellent communication skills and attention to detail.",
        "Ability to work in a fast-paced, collaborative environment.",
      ],
      preferredSkills: [
        "Experience with email marketing platforms (e.g., MailChimp, HubSpot).",
        "Knowledge of PPC advertising and budget management.",
        "Familiarity with content marketing and copywriting.",
      ],
      offer: [
        "Competitive salary and performance-based incentives.",
        "Opportunities for growth in a fast-moving digital landscape.",
        "Flexible work environment with remote work options.",
      ],
    },

    "flutter-development": {
      title: "Flutter Developer",
      description:
        "A full-time job focusing on mobile app development using Flutter.",
      location: "USA",
      time: "8 hours",
      type: "On Site",
      responsibilities: [
        "Develop cross-platform mobile applications using Flutter.",
        "Collaborate with UI/UX designers to create intuitive user interfaces.",
        "Ensure high performance and responsiveness of mobile apps.",
        "Troubleshoot, debug, and optimize mobile applications.",
        "Maintain code quality and follow best practices in mobile development.",
      ],
      qualifications: [
        "Proven experience as a Flutter Developer.",
        "Proficiency in Dart programming language.",
        "Familiarity with mobile app development for both Android and iOS.",
        "Experience with RESTful APIs and third-party integrations.",
        "Strong problem-solving skills and attention to detail.",
      ],
      preferredSkills: [
        "Experience with Firebase and cloud services integration.",
        "Familiarity with native mobile app development (Swift, Kotlin).",
        "Understanding of Agile development methodologies.",
      ],
      offer: [
        "Competitive salary and project-based bonuses.",
        "Opportunities for professional growth in mobile development.",
        "Flexible work hours and the possibility of remote work.",
      ],
    },

    "machine-learning": {
      title: "Machine Learning Engineer",
      description:
        "A full-time job focusing on machine learning model development.",
      location: "USA",
      time: "8 hours",
      type: "On Site",
      responsibilities: [
        "Design and develop machine learning models and algorithms.",
        "Analyze and preprocess large datasets for model training.",
        "Collaborate with data scientists and engineers to deploy ML models.",
        "Optimize machine learning models for performance and accuracy.",
        "Stay up-to-date with the latest developments in AI and machine learning.",
      ],
      qualifications: [
        "Proven experience as a Machine Learning Engineer or in a related field.",
        "Proficiency in Python and machine learning libraries (e.g., TensorFlow, PyTorch, Scikit-learn).",
        "Experience with data analysis and feature engineering.",
        "Understanding of deep learning techniques and neural networks.",
        "Strong problem-solving skills and a solid mathematical foundation.",
      ],
      preferredSkills: [
        "Experience with cloud-based machine learning platforms (AWS, GCP).",
        "Familiarity with Natural Language Processing (NLP) or Computer Vision.",
        "Knowledge of big data technologies (e.g., Hadoop, Spark).",
      ],
      offer: [
        "Competitive salary and stock options.",
        "Opportunities to work on cutting-edge AI projects.",
        "Flexible work arrangements and continuous learning opportunities.",
      ],
    },

    "mern-development": {
      title: "MERN Stack Developer",
      description:
        "A full-time job focusing on developing web applications using MongoDB, Express, React, and Node.js.",
      location: "USA",
      time: "8 hours",
      type: "Remote",
      responsibilities: [
        "Develop and maintain full-stack web applications using the MERN stack.",
        "Collaborate with the frontend and backend teams to deliver high-quality features.",
        "Ensure optimal performance and scalability of web applications.",
        "Troubleshoot, debug, and optimize both frontend and backend code.",
        "Follow best practices in software development, including version control and testing.",
      ],
      qualifications: [
        "Proven experience as a MERN Stack Developer.",
        "Proficiency in MongoDB, Express, React, and Node.js.",
        "Strong understanding of RESTful APIs and web services.",
        "Familiarity with frontend development using HTML, CSS, and JavaScript.",
        "Experience with version control systems (Git).",
      ],
      preferredSkills: [
        "Experience with GraphQL and NoSQL databases.",
        "Familiarity with CI/CD pipelines and cloud deployment.",
        "Understanding of serverless architecture and microservices.",
      ],
      offer: [
        "Competitive salary and bonuses based on performance.",
        "Opportunities for career growth in a dynamic environment.",
        "Flexible work hours and remote working options.",
      ],
    },
  };

  const job = jobDetails[jobTitle] || {
    title: "Job Not Found",
    description: "",
    responsibilities: [],
    qualifications: [],
    preferredSkills: [],
    offer: [],
  };

  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white">
      <div className="relative mx-auto max-w-5xl rounded-xl shadow-2xl md:my-10 overflow-hidden">
        {/* Title Container */}
        <div
          className="relative h-auto flex flex-col items-center justify-center py-6 md:h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }} // Use the imported image here
        >
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-green-600 opacity-60"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center gap-y-4 py-5">
            <h1 className="text-4xl font-bold md:text-6xl text-white">
              {job.title}
            </h1>
            <p className="text-sm text-white text-center sm:text-base">
              {job.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-5 md:px-10">
          {/* Content Container */}
          <div className="mx-auto w-full max-w-5xl py-12 md:py-16 lg:py-20">
            {/* Component */}
            <div className="flex flex-col  gap-y-14">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 ">
                    <img
                      src={illustration}
                      alt="img"
                      className="rounded-md h-auto w-[60px] md:w-[100px] object-cover"
                    />
                  </div>

                  <p className=" md:text-start   text-xs sm:text-base">
                    Safety Chat is an innovative platform designed to enhance
                    workplace safety and streamline communication around safety
                    protocols. Our mission is to provide tools that help
                    companies ensure regulatory compliance, foster a
                    safety-first culture, and improve incident management.
                  </p>
                </div>
                <div className="flex gap-4 md:text-base text-xs">
                  <div className="flex gap-2 items-center bg-green-50 px-4 py-2 rounded-xl">
                    <Navigation />
                    {job.location}
                  </div>
                  <div className="flex gap-2 items-center bg-green-50 px-4 py-2 rounded-xl">
                    <Timer />
                    {job.time}
                  </div>
                  <div className="flex gap-2 items-center bg-green-50 px-4 py-2 rounded-xl">
                    <MapPinCheckInside />
                    {job.type}
                  </div>
                </div>
              </div>
              <div className="flex min-w-full flex-col gap-y-10">
                <div className="flex min-w-full py-4 border-t  border-b border-gray-300">
                  <h6 className="text-2xl font-bold">Description</h6>
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="flex min-w-full flex-col items-start gap-y-6">
                    <section className="mb-6">
                      <h2 className="text-base font-semibold text-gray-800 mb-2">
                        Key Responsibilities:
                      </h2>
                      <ul className="list-disc list-inside text-gray-700">
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </section>

                    {/* Qualifications */}
                    <section className="mb-6">
                      <h2 className="text-base font-semibold text-gray-800 mb-2">
                        Qualifications:
                      </h2>
                      <ul className="list-disc list-inside text-gray-700">
                        {job.qualifications.map((qualification, index) => (
                          <li key={index}>{qualification}</li>
                        ))}
                      </ul>
                    </section>

                    {/* Preferred Skills */}
                    {job.preferredSkills.length > 0 && (
                      <section className="mb-6">
                        <h2 className="text-base font-semibold text-gray-800 mb-2">
                          Preferred Skills:
                        </h2>
                        <ul className="list-disc list-inside text-gray-700">
                          {job.preferredSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* What We Offer */}
                    {job.offer.length > 0 && (
                      <section className="mb-6">
                        <h2 className="text-base font-semibold text-gray-800 mb-2">
                          What We Offer:
                        </h2>
                        <ul className="list-disc list-inside text-gray-700">
                          {job.offer.map((offerItem, index) => (
                            <li key={index}>{offerItem}</li>
                          ))}
                        </ul>
                      </section>
                    )}
                    <div className="flex justify-center mx-auto md:mt-20 mt-10 ">
                      <button className="px-6 py-4 w-fit bg-green-600 text-white rounded-xl">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
