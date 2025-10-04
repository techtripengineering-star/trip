import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // UI status messages
  const [error, setError] = useState("");   // Validation errors

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const phone = form.current.user_phone.value.trim();
    const message = form.current.message.value.trim();

    // Name validation (only letters & spaces allowed)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setError("❌ Name should only contain letters and spaces.");
      return false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("❌ Please enter a valid email address.");
      return false;
    }

    // Phone validation (+country code and digits)
    if (!/^\+?[0-9]{6,15}$/.test(phone)) {
      setError("❌ Please enter a valid phone number with country code.");
      return false;
    }

    // Message validation
    if (message.length < 5) {
      setError("❌ Message should be at least 5 characters long.");
      return false;
    }

    setError(""); // Clear previous errors
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setStatus("⏳ Sending your message, please wait...");

    console.log({
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      phone: form.current.user_phone.value,
      message: form.current.message.value
    });


    emailjs
      .sendForm(
        "service_6tkfvrv",      // ✅ Replace with your EmailJS Service ID
        "template_2iwxq3e",      // ✅ Replace with your EmailJS Template ID
        form.current,
        "oTcYvM0U6-N1c0yht"    // ✅ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000); // Clear after 4 sec
        },
        (error) => {
          setStatus("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#0b1320] text-[#FFFDD0] py-16 px-6 md:px-20"
    >
      <h2 className="text-xl md:text-5xl font-bold text-center mb-16">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-12">
        {/* Location Section (Right-to-Left Alignment) */}
        <div className="flex-1 flex flex-col items-end text-right pr-6 space-y-4">
          <h3 className="text-3xl font-semibold">Our Location</h3>

          <p className="leading-relaxed">
            <span className="text-4xl tracking-tight font-extrabold">
              <span className="text-[#0b1399]">Trip </span>
              <span className="text-[#990000]">Engineering </span>
              Pvt. Ltd.
            </span>
            <br />
          </p>
          <div className="flex-1 flex flex-col items-end text-right pr-2 space-y-3">
            <p className="text-2xl"> Kathmandu, Nepal - 4440000</p>
            <p className="text-2xl"> +977 9824297120</p>
            <p className="text-2xl"> projects.tripepl@gmail.com</p>
          </div>

          {/* Google Maps Embed */}
          <iframe
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56536.34160239371!2d85.2849332!3d27.7090302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1694866212345!5m2!1sen!2snp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-[2px] bg-gray-600"></div>

        {/* Contact Form Section */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Full Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FFFDD0]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Valid Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FFFDD0]"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="+977 0000000000"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FFFDD0]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FFFDD0]"
            ></textarea>

            {/* Error Message */}
            {error && <p className="text-red-400">{error}</p>}

            {/* Status Message */}
            {status && (
              <p
                className={`font-medium ${
                  status.includes("✅")
                    ? "text-green-400"
                    : status.includes("❌")
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              className="bg-[#FFFDD0] text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );

};

export default ContactSection;