import Header from './components/Header/Header';
import EventList from './components/EventList/EventList';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <EventList />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;