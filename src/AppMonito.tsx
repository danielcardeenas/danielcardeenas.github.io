import Spline from '@splinetool/react-spline';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="h:100%">
      <div className="position:absolute w:100%">
        <div className="display:flex jc:center ai:start">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-size:2.5rem mt:36px"
          >
            Daniel Cardenas
          </motion.h1>
        </div>
      </div>
      <div className="position:absolute w:100% bottom:0"></div>
      <Spline scene="https://prod.spline.design/PpytwpWNYXgzJyiI/scene.splinecode" />
    </div>
  );
}

export default App;
