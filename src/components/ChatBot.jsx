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
  const inputRef = useRef(null);

  /* Show popup after 15s */
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  /* Auto scroll messages */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* Focus input instantly when chat opens */
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 50);
    }
  }, [open]);

  const sendBotReply = (text) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text }]);
      setIsTyping(false);
    }, 800);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setIsTyping(true);

    if (step === 0) {
      sendBotReply("📝 Please tell me your complete query.");
      setStep(1);
    }

    else if (step === 1) {
      setFormData((prev) => ({ ...prev, query: userText }));
      sendBotReply("Got it 👍 Now, may I know your name?");
      setStep(2);
    }

    else if (step === 2) {
      if (!/^[A-Za-z\s]+$/.test(userText)) {
        sendBotReply("❌ Please enter a valid name (letters only).");
        setIsTyping(false);
        return;
      }
      setFormData((prev) => ({ ...prev, name: userText }));
      sendBotReply(
        `Thanks, ${userText}! 📞 Please provide your phone number with country code (e.g., +977-9876543210).`
      );
      setStep(3);
    }

    else if (step === 3) {
      if (!/^\+\d{1,3}\d{10}$/.test(userText)) {
        sendBotReply("❌ Invalid phone number. Please include country code.");
        setIsTyping(false);
        return;
      }
      setFormData((prev) => ({ ...prev, phone: userText }));
      sendBotReply("Great! 📧 Please provide your email address.");
      setStep(4);
    }

    else if (step === 4) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userText)) {
        sendBotReply("❌ Invalid email address. Try again.");
        setIsTyping(false);
        return;
      }

      const finalData = { ...formData, email: userText };
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
          `✅ Thank you ${finalData.name}! Your query has been sent. Our team will contact you shortly 🙏`
        );
      } catch (error) {
        console.error("EmailJS Error:", error);
        sendBotReply("⚠️ Something went wrong. Please try again later.");
      }

      setStep(5);
    }

    else {
      sendBotReply("🤖 Session completed. Thank you!");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* Floating Button */}
      {visible && !open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 p-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-600 transition animate-bounce-slow"
        >
          <img src={pupup} alt="bot" className="w-8 h-8" />
          <span className="text-white font-semibold">Hi! Need Help?</span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="w-[325px] h-[405px] bg-[#FFFDD0] shadow-lg rounded-xl flex flex-col">

          {/* Header */}
          <div className="bg-blue-500 opacity-70 text-white p-3 rounded-t-xl flex justify-between items-center">
            <span>🤖 Trip_ty.AI</span>
            <button onClick={() => setOpen(false)} className="font-bold">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            <div className="flex items-center space-x-2">
              <img src={pupup} alt="AI" className="w-10 h-10 rounded-full border" />
              <span className="text-sm text-gray-700">
                Hi, I’m here to help you!
              </span>
            </div>

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-200 self-end ml-auto text-gray-800"
                    : "bg-white text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Trip_ty.AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {step !== 5 && (
            <div className="p-2 flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="
                  w-full p-2 border border-gray-300 rounded-md
                  bg-white text-gray-800 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                "
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
