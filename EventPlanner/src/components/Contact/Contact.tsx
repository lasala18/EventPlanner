import './Contact.css';

function Contact() {
  return (
    <section className="contact-container">
      <h2 className="title">Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="btn_click">Send</button>
      </form>
    </section>
  );
}

export default Contact;