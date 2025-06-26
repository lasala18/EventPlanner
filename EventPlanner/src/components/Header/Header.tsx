import './Header.css';

function Header() {
  return (
    <section className="header-container">
      <h1 className="header-title">Welcome to Event Planner</h1>
      <p className="header-subtitle">
        Plan and organize your events effortlessly with Event Planner. 
        From birthdays to corporate meetings, we've got you covered.
      </p>
      <button className="btn-primary">Get Started</button>
    </section>
  );
}

export default Header;