import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // place holders for emailjs credentials
    // serviceID: service_xxxxxxx
    // templateID: template_xxxxxxx
    // publicKey: xxxxxxxxxxxxxxxxxxx
    emailjs
      .send(
        "service_ig95b26",
        "template_exlow6e",
        {
          from_name: form.name,
          to_name: "Mustapha",
          from_email: form.email,
          to_email: "almussanplanner12@gmail.com",
          message: form.message,
        },
        "-7AVlyBsEXUhCTna0"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="section-padding">
      <TitleHeader title="Contact Me" sub="🤝 Get in Touch" />
      <div className="grid-2-cols mt-12 gap-10 overflow-hidden">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="h-[550px]"
        >
          <ContactExperience />
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
            <label>
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
              />
            </label>
            <label>
              <span>Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
              />
            </label>
            <label>
              <span>Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
              />
            </label>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-300"
            >
              {loading ? "Sending..." : "Send"}
              <img src="/images/arrow-right.svg" alt="" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
