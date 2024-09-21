import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Info from './Components/Info';
import Info2 from './Components/Info2';
import { motion, useScroll } from 'framer-motion';
import './style.css';

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '7px',
        width: '100%',
        backgroundColor: '#f00', // Customize your color
        scaleX: scrollYProgress,
        transformOrigin: '0%', // Origin from the left
      }}
    />
  );
}

function App() {
  return (
    <div className="main">
      <ScrollIndicator />
      <Hero />
      <Info />
      <Info2 />
      <Footer />
    </div>
  );
}

export default App;
