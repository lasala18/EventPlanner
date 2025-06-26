import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-container">
      <h2 className="title">Testimonials</h2>
      <div className="testimonial">
        <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
        <p className="testimonial-author">- Emily Johnson</p>
      </div>
      <div className="testimonial">
        <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
        <p className="testimonial-author">- John Smith</p>
      </div>
    </section>
  );
}

export default Testimonials;