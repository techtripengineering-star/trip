import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import pupup from "../assets/img/pupup.gif";


export default function ChatBot() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "🙏 Namaste! I am Trip_ty.ai, a virtual assistant from Trip Engineering. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    query: "",
    name: "",
    phone: "",
    email: "",
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendBotReply = (text) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text }]);
      setIsTyping(false);
    }, 800);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    if (step === 0) {
      sendBotReply("📝 Please tell me your complete query.");
      setStep(1);
    } else if (step === 1) {
      setFormData((prev) => ({ ...prev, query: input }));
      sendBotReply("Got it 👍 Now, may I know your name?");
      setStep(2);
    } else if (step === 2) {
      if (!/^[A-Za-z\s]+$/.test(input)) {
        sendBotReply("❌ Please enter a valid name (letters only).");
        return;
      }
      setFormData((prev) => ({ ...prev, name: input }));
      sendBotReply(
        `Thanks, ${input}! 📞 Please provide your phone number with country code (e.g., +919876543210).`
      );
      setStep(3);
    } else if (step === 3) {
      if (!/^\+\d{1,3}\d{10}$/.test(input)) {
        sendBotReply(
          "❌ Invalid phone number. Please include country code (e.g., +919876543210)."
        );
        return;
      }
      setFormData((prev) => ({ ...prev, phone: input }));
      sendBotReply("Great! Now, please provide your valid email address.");
      setStep(4);
    } else if (step === 4) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        sendBotReply(
          "❌ That doesn’t look like a valid email. Try again (e.g., name@example.com)."
        );
        return;
      }
      const finalData = { ...formData, email: input };
      setFormData(finalData);

      try {
        await emailjs.send(
          "service_9skcqe9",
          "template_ok5lrdr",
          {
            query: finalData.query,
            name: finalData.name,
            phone: finalData.phone,
            email: finalData.email,
          },
          "oTcYvM0U6-N1c0yht"
        );

        sendBotReply(
          `✅ Thank you ${finalData.name}! Your query has been sent. Our representative will contact you soon 🙏`
        );
      } catch (err) {
        console.error("EmailJS Error:", err);
        sendBotReply(
          "⚠️ Sorry, something went wrong while sending your details. Please try again."
        );
      }

      setStep(5); // End session
    } else {
      sendBotReply("🤖 Session complete. Thank you!");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {visible && !open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 p-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-600 transition transform animate-bounce-slow"
        >
          <img src={pupup} alt="pup" className="w-8 h-8" />
          <span className="text-white font-semibold">Hi! Need Help?</span>
        </button>
      )}

      {open && (
        <div className="w-80 h-96 bg-[#FFFDD0] shadow-lg rounded-xl flex flex-col">
          <div className="bg-blue-500 opacity-65 text-white p-3 rounded-t-xl flex justify-between items-center">
            <span>🤖 Trip_ty.AI</span>
            <button onClick={() => setOpen(false)} className="font-bold">
              X
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            <div className="flex items-center space-x-2">
              <img
                src={pupup}
                alt="AI Girl"
                className="w-10 h-10 rounded-full border"
              />
              <span className="text-sm text-gray-700">Hi, I’m here to help you!</span>
            </div>

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-200 self-end ml-auto"
                    : "bg-white text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-0"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-400"></div>
                <span className="text-gray-600 text-sm">Tripty AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* Hide input area completely after session ends */}
          {step !== 5 && (
            <div className="p-2 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 border rounded-md"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition"
              >
                <Send size={18} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
