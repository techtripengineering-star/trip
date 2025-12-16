import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllRightsReserved = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b1320] text-[#FFFDD0] min-h-screen px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Title */}
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              All Rights Reserved
            </h1>
            <p className="text-sm md:text-base text-[#FFFDD0]/70">
              © 2025 Trip Engineering Pvt. Ltd.
            </p>
          </header>

          {/* Introduction */}
          <section>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              This website and all materials contained herein are owned and
              operated by <strong>Trip Engineering Pvt. Ltd.</strong>. The term
              “All Rights Reserved” signifies that no part of this website or its
              contents may be used, reproduced, or distributed without explicit
              written permission from the company, except as permitted by
              applicable law.
            </p>
          </section>

          {/* Ownership */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              1. Ownership of Intellectual Property
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              All intellectual property displayed on this website, including but
              not limited to textual content, engineering drawings, MEPF designs,
              electrical layouts, HVAC and plumbing schematics, calculations,
              BOQs, specifications, images, graphics, logos, branding elements,
              and website source code, are the exclusive property of
              <strong> Trip Engineering Pvt. Ltd.</strong>, unless otherwise
              stated.
            </p>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              2. Copyright Protection
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              All content on this website is protected under applicable
              copyright, intellectual property, and trademark laws. Unauthorized
              copying, reproduction, modification, storage, transmission, or
              redistribution of any content, in whole or in part, is strictly
              prohibited without prior written consent from Trip Engineering
              Pvt. Ltd.
            </p>
          </section>

          {/* Engineering Disclaimer */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              3. Engineering & Technical Disclaimer
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Any engineering-related information presented on this website,
              including drawings, layouts, designs, estimates, calculations, or
              project descriptions, is provided for general informational and
              reference purposes only. Such materials shall not be considered
              final construction documents and must not be used for execution,
              tendering, statutory approval, or regulatory submission without a
              formal agreement and written authorization from Trip Engineering
              Pvt. Ltd.
            </p>
          </section>

          {/* Permitted Use */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              4. Permitted Use
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#FFFDD0]/90">
              <li>Viewing website content for personal or informational purposes</li>
              <li>Sharing website links with proper attribution</li>
              <li>Referencing publicly available information in a non-commercial manner</li>
            </ul>
          </section>

          {/* Restricted Use */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              5. Restricted & Prohibited Use
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#FFFDD0]/90">
              <li>Commercial use of content without written permission</li>
              <li>Reproduction of engineering drawings, BOQs, or calculations</li>
              <li>Misrepresentation of projects or services as your own</li>
              <li>Unauthorized use of logos, branding, or company identity</li>
              <li>Modification or redistribution of website materials</li>
            </ul>
          </section>

          {/* Third-Party */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              6. Third-Party Content
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              Any third-party trademarks, references, or materials appearing on
              this website are the property of their respective owners and are
              used solely for informational or reference purposes. Such use does
              not imply endorsement or affiliation unless explicitly stated.
            </p>
          </section>

          {/* Jurisdiction */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              7. Governing Law & Jurisdiction
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              This All Rights Reserved notice and all matters relating to
              intellectual property shall be governed by and construed in
              accordance with the laws of <strong>Nepal</strong>. Any disputes
              shall be subject to the exclusive jurisdiction of the competent
              courts of Nepal.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-[#FFFDD0]/20 pt-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              8. Contact for Permissions & Inquiries
            </h2>
            <p className="text-[#FFFDD0]/90 leading-relaxed">
              For permission requests, copyright inquiries, or intellectual
              property concerns, please contact us at:
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

export default AllRightsReserved;
