"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { TbMailForward } from "react-icons/tb";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  // Function to handle form submission
  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error("All fields are required!");
      return;
    }

    setIsLoading(true);

    // Validate EmailJS environment variables
    const serviceId = "service_ifqcibb";
    const templateId = "template_4o3e9ec";
    const publicKey = "1zxMg7a7zGM9Orz22";

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      toast.error("Email service is currently unavailable.");
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: userInput.name,
          from_email: userInput.email,
          message: userInput.message,
        },
        publicKey
      );
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions, feel free to get in touch. I'm open to
          opportunities aligned with my skills and interests.
        </p>

        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSendMail}>
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base">
              Your Name:
            </label>
            <input
              id="name"
              name="name"
              className="bg-[#10172d] w-full border rounded-md px-3 py-2 focus:border-[#16f2b3] outline-none"
              type="text"
              placeholder="Enter your name"
              value={userInput.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base">
              Your Email:
            </label>
            <input
              id="email"
              name="email"
              className="bg-[#10172d] w-full border rounded-md px-3 py-2 focus:border-[#16f2b3] outline-none"
              type="email"
              placeholder="Enter your email"
              value={userInput.email}
              onChange={handleChange}
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-[#10172d] w-full border rounded-md px-3 py-2 focus:border-[#16f2b3] outline-none"
              rows="4"
              placeholder="Write your message"
              value={userInput.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-white font-medium uppercase transition-all duration-300 hover:gap-3"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span>Sending...</span>
            ) : (
              <>
                Send Message
                <TbMailForward size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
