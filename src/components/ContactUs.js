import React from 'react';

function ContactUs() {
  return (
    <section className="contact-us" id="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />
        
        <label>Email</label>
        <input type="email" placeholder="Your Email" required />
        
        <label>Message</label>
        <textarea placeholder="Your Message" required></textarea>
        
        <button type="submit" >Send Message</button>
      </form>
    </section>
  );
}

export default ContactUs;
