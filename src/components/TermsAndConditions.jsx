import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white">
      <div className="flex flex-col items-center justify-center ">
        {/* Title Container */}
        <div className="flex h-auto min-w-full flex-col items-center justify-center text-white bg-green-600 md:py-14 py-10 ">
          <div className="flex flex-col items-center gap-y-4 py-5">
            <h1 className="text-3xl font-bold md:text-5xl">TERMS OF SERVICE</h1>
            <p className="text-sm  sm:text-base">
              Last Updated as of September 20, 2024
            </p>
          </div>
        </div>
        {/* Content Container */}
        <div className="mx-auto w-full px-2 max-w-5xl py-12 md:py-16 lg:py-20">
          {/* Component */}
          <div className="flex flex-col items-center gap-y-14">
            <p className="max-w-3xl text-center text-sm sm:text-base">
              Welcome to Safety Chat. By using our services, you agree to comply
              with the following terms and conditions. Please review them
              carefully.
            </p>
            <div className="flex min-w-full flex-col gap-y-10">
              <div className="flex min-w-full py-4 [border-bottom:1px_solid_rgb(226,_226,_226)]">
                <h6 className="text-base font-bold">
                  GENERAL TERMS &amp; CONDITIONS
                </h6>
              </div>
              <div className="flex flex-col gap-y-10">
                <div className="flex min-w-full flex-col items-start gap-y-6">
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">SERVICES</p>
                    <p className="text-sm">
                      Safety Chat offers a secure communication platform
                      designed to assist teams in complying with safety
                      regulations and enhancing workplace safety practices. The
                      app includes features like AI-powered OSHA regulations
                      chat, toolbox talk generator, hazard input, and more.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">PRIVACY & SECURITY</p>
                    <p className="text-sm">
                      We prioritize user privacy and security. Safety Chat
                      ensures end-to-end encryption for all conversations and
                      strictly follows security protocols to safeguard your
                      information. We never share your personal data without
                      explicit consent.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">USER RESPONSIBILITIES</p>
                    <p className="text-sm">
                      Users are responsible for maintaining the confidentiality
                      of their login credentials. By using the app, users agree
                      to follow safety regulations, provide accurate information
                      when logging hazards or incidents, and report any security
                      concerns immediately.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">PROHIBITED ACTIVITIES</p>
                    <p className="text-sm">
                      Users may not use Safety Chat to engage in unlawful
                      activities, distribute malicious content, or infringe upon
                      the rights of others. Any misuse of the platform may
                      result in account suspension or termination.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">INTELLECTUAL PROPERTY</p>
                    <p className="text-sm">
                      All content within Safety Chat, including text, graphics,
                      logos, and software, is the property of Safety Chat and
                      protected by intellectual property laws. Users are
                      prohibited from copying or redistributing content without
                      permission.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">PAYMENT & SUBSCRIPTIONS</p>
                    <p className="text-sm">
                      Safety Chat offers both free and premium plans. Users must
                      provide accurate payment information for premium services.
                      Payments are subject to terms outlined in the subscription
                      agreement.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">LIMITATION OF LIABILITY</p>
                    <p className="text-sm">
                      Safety Chat is not liable for any indirect or
                      consequential damages arising from the use or inability to
                      use the app. Our maximum liability shall not exceed the
                      amount paid by the user for services rendered.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">TERMINATION</p>
                    <p className="text-sm">
                      Safety Chat reserves the right to terminate or suspend
                      user accounts for violations of these terms. Upon
                      termination, access to the platform will cease, and any
                      unpaid balances must be settled.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-y-3">
                    <p className="text-sm font-bold">GOVERNING LAW</p>
                    <p className="text-sm">
                      These terms shall be governed by and construed in
                      accordance with the laws of [Your Jurisdiction], and any
                      disputes shall be resolved in the courts of [Your
                      Jurisdiction].
                    </p>
                  </div>
                </div>
                <div className="min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
                <p className="text-sm">
                  By using Safety Chat, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
                  If you do not agree with these terms, you must discontinue
                  using the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
