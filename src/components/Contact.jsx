import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
      alert('Request timed out. Please try again.');
    }, 10000); // 10 seconds timeout

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        clearTimeout(timeout);
        console.log('Email successfully sent!', result.text);
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        clearTimeout(timeout);
        console.error('Failed to send email. Error: ', error);
        setLoading(false);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 1, delay: 0.2 },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");