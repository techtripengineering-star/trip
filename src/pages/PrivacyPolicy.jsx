import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b1320] text-[#FFFDD0] min-h-screen px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Title */}
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-[#FFFDD0]/70">
              Effective Date: January 2025
            </p>
          </header>

          {/* Introduction */}
          <section>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Trip Engineering Pvt. Ltd. (“we”, “our”, “us”) is committed to
              protecting the privacy and personal information of our clients,
              partners, job applicants, and website visitors. This Privacy
              Policy explains how we collect, use, store, and safeguard your
              information when you visit our website or interact with our
              services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#FFFDD0]/90">
              <li>Personal details such as name, email address, phone number</li>
              <li>Company or organization details (if provided)</li>
              <li>Resumes, CVs, and career-related documents</li>
              <li>Project inquiries and contact form submissions</li>
              <li>Technical data such as IP address, browser type, and device information</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed mb-3">
              The information we collect is used strictly for legitimate
              business purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#FFFDD0]/90">
              <li>Responding to inquiries and communication requests</li>
              <li>Processing job applications and recruitment activities</li>
              <li>Providing engineering consultancy and project services</li>
              <li>Improving website performance and user experience</li>
              <li>Internal record keeping and compliance</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              3. Information Sharing & Disclosure
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Trip Engineering Pvt. Ltd. does <strong>not</strong> sell, rent, or
              trade your personal information to third parties. Information may
              only be shared when required by law, regulatory authorities, or
              trusted service providers strictly for operational purposes.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              4. Data Security
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              We implement reasonable technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. While we strive to
              safeguard your data, no method of transmission over the internet
              is completely secure.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              5. Cookies & Analytics
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Our website may use cookies or similar technologies to enhance
              user experience, analyze website traffic, and improve our
              services. You may choose to disable cookies through your browser
              settings; however, this may affect certain website functionality.
            </p>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              6. External Links
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of such third-
              party sites. We encourage users to review the privacy policies of
              those websites.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              7. Your Rights
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              You have the right to request access, correction, or deletion of
              your personal information held by us, subject to applicable legal
              and regulatory requirements.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in legal, regulatory, or operational requirements. Any
              updates will be posted on this page with a revised effective date.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-[#FFFDD0]/20 pt-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              9. Contact Information
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              If you have any questions or concerns regarding this Privacy
              Policy or the handling of your personal information, please
              contact us at:
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

export default PrivacyPolicy;
