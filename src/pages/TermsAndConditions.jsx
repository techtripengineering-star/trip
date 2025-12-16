import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b1320] text-[#FFFDD0] min-h-screen px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Title */}
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-sm md:text-base text-[#FFFDD0]/70">
              Effective Date: January 2025
            </p>
          </header>

          {/* Introduction */}
          <section>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              These Terms and Conditions (“Terms”) govern your access to and use
              of the website, services, and information provided by
              <strong> Trip Engineering Pvt. Ltd.</strong> By accessing or using
              this website, you agree to be bound by these Terms. If you do not
              agree, you must discontinue use of this website.
            </p>
          </section>

          {/* Scope of Services */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              1. Scope of Services
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Trip Engineering Pvt. Ltd. provides professional engineering
              consultancy and related services, including but not limited to
              electrical engineering, HVAC systems, plumbing and sanitary
              design, fire and life safety systems, MEPF coordination,
              estimation, and project supervision. Information displayed on this
              website is indicative and does not constitute a binding offer.
            </p>
          </section>

          {/* Website Use */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              2. Use of Website
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              You agree to use this website only for lawful purposes. You shall
              not engage in any activity that may harm, disrupt, or interfere
              with the website’s functionality, security, or content integrity.
            </p>
          </section>

          {/* Engineering Disclaimer */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              3. Engineering & Technical Disclaimer
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              All technical information, drawings, layouts, designs,
              calculations, estimates, and project descriptions provided on this
              website are for general informational purposes only. Such content
              shall not be used for construction, tendering, regulatory approval,
              or execution without a formal written agreement with Trip
              Engineering Pvt. Ltd.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              4. Intellectual Property Rights
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              All intellectual property rights in the website content,
              including text, designs, drawings, images, logos, and branding,
              belong to Trip Engineering Pvt. Ltd. Unauthorized use, copying, or
              distribution of such material is strictly prohibited.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Trip Engineering Pvt. Ltd. shall not be liable for any direct,
              indirect, incidental, consequential, or special damages arising
              out of or in connection with the use or inability to use this
              website or reliance on any information provided herein.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              6. Third-Party Links
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              This website may contain links to third-party websites. Trip
              Engineering Pvt. Ltd. does not endorse or assume responsibility
              for the content, privacy policies, or practices of such websites.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              7. Modifications to Terms
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Trip Engineering Pvt. Ltd. reserves the right to modify or update
              these Terms and Conditions at any time without prior notice.
              Continued use of the website constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              8. Governing Law & Jurisdiction
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              These Terms and Conditions shall be governed by and interpreted in
              accordance with the laws of <strong>Nepal</strong>. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of
              Nepal.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-[#FFFDD0]/20 pt-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              9. Contact Information
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              For questions regarding these Terms and Conditions, please contact
              us at:
            </p>
            <p className="mt-2 font-medium">
              📧 projects.tripepl@gmail.com
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
