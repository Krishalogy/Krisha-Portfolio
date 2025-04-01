import { useState } from 'react';

const Contact = () => {
  console.log("Contact component rendered");

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const onFormUpdate = (field: string, value: string) => {
    console.log(`Updating ${field} to ${value}`);
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formDetails);
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setFormDetails({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4 max-w-lg">
        {/* Centered and larger "GET IN TOUCH" */}
        <h2 className="text-5xl font-bold text-center text-white mb-8">
          Get in <span className="text-pink-500">touch</span>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 border rounded shadow-md bg-portfolio-darker">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
              className="border p-3 rounded w-full mb-4 md:mb-0 text-black"
            />
            <input
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
              className="border p-3 rounded w-full text-black"
            />
          </div>
          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
            className="border p-3 rounded w-full text-black"
          />
          <textarea
            value={formDetails.message}
            placeholder="Your Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
            className="border p-3 rounded w-full h-32 resize-none text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 text-white p-3 rounded hover:bg-pink-600 transition"
          >
            Send Message
          </button>
          {status && <p className="text-white mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;