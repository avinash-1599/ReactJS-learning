import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-6">
      <div className="max-w-lg w-full p-8 shadow-2xl rounded-3xl bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border border-gray-300 p-3 rounded-lg bg-gray-50">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="border border-gray-300 p-3 rounded-lg bg-gray-50">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="border border-gray-300 p-3 rounded-lg bg-gray-50">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg bg-gray-50 focus:outline-none"
          />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all">Send Message</button>
        </form>
      </div>
    </div>
  );
}


export default Contact;