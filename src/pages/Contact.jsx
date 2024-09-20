import React from "react";
import ContactForm from "../components/contactPage-components/ContactForm";
import LinkSection from "../components/contactPage-components/LinkSection";

const Contact = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <ContactForm />
      <LinkSection />
    </div>
  );
};

export default Contact;
