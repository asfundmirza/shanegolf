import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const OurExperties = () => {
  const teamMembers = [
    {
      picture: "https://via.placeholder.com/150", // Placeholder image
      fullName: "Shane Golf",
      designation: "Founder / CEO, Certified Safety Professional (CSP)",
      bio: "As a Certified Safety Professional (CSP) with over 15 years of experience, Akshay Kumar leads Safety Chat with a vision to enhance workplace safety across multiple industries. His deep expertise ensures our clients achieve compliance with the highest safety standards.",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "https://via.placeholder.com/150", // Placeholder image
      fullName: "Alex Watt",
      designation: "Business Head, Certified Industrial Hygienist (CIH)",
      bio: "Raima Ray, a Certified Industrial Hygienist (CIH), brings a wealth of knowledge in hazard identification and risk mitigation. Her leadership ensures that Safety Chat provides tailored safety solutions to meet specific industry challenges.",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "https://via.placeholder.com/150", // Placeholder image
      fullName: "Sara Williams",
      designation: "Senior Safety Consultant, OSHA Outreach Trainer",
      bio: "With certifications as an OSHA Outreach Trainer, Arjun Kapur focuses on providing training programs that empower employees to maintain safe workplaces. His expertise spans construction and industrial safety regulations.",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "https://via.placeholder.com/150", // Placeholder image
      fullName: "Michal Lee",
      designation: "Marketing Head, Safety Compliance Specialist",
      bio: "Alia Bhatt manages the marketing efforts at Safety Chat while also serving as a Safety Compliance Specialist. Her dual role ensures clients not only meet safety standards but also understand the importance of compliance in promoting workplace safety.",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
  ];

  const TeamMemberItem = ({ member }) => (
    <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8">
      <img
        src={member.picture}
        alt={member.fullName}
        className="max-w-full h-auto rounded-full border-4 p-1 border-green-600 mx-auto -mt-20"
        width="120"
      />
      <div className="mt-6">
        <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
        <p className="mb-4 text-sm">{member.designation}</p>
        <p className="text-neutral-400">{member.bio}</p>
        <div className="mt-6">
          {member.socialLinks.map((item, i) => (
            <a
              href={item.href}
              className={`inline-block  text-green-600 transition duration-300 hover:translate-y-1 opacity-80 hover:opacity-100 ${
                i + 1 !== member.socialLinks.length && "mr-4"
              }`}
              key={i}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className=" dark py-14 md:py-24 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-9 md:mb-14">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl leading-none font-bold md:text-6xl mb-4">
              Our <span className="text-green-600">Experts</span> Team
            </h2>
            <p className="text-neutral-400">
              Meet our team of certified safety professionals, industrial
              hygienists, and industry experts, dedicated to creating safer
              workplaces and ensuring compliance with the highest safety
              standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 md:gap-6 gap-[50px] text-center pt-6">
          {teamMembers.map((member, i) => (
            <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExperties;
