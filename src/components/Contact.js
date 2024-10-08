import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form action="#">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
