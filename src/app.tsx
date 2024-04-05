import { motion } from 'framer-motion';
import './App.css';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="h:100% m:24px br:24px">
      {/* CPU 3D Model */}
      <motion.div
        style={{
          visibility: loaded ? 'visible' : 'hidden',
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z:1 position:absolute bottom:2rem right:2rem w:20%@md w:100%@sm h:256px"
      >
        <Spline
          onLoad={() => setLoaded(true)}
          scene="https://prod.spline.design/lI9F1J1LQf34N-nN/scene.splinecode"
        />
      </motion.div>
      <div className="display:flex gap:8px h:100% flex-direction:col flex-direction:row@sm w:100%">
        <div className="gradient-bg h:100% px:14px w:100%@md w:100%@sm color:white">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-size:1.5rem"
          >
            Daniel Cardenas
          </motion.h1>
        </div>
        {/* <div className="grid py:30x px:8px w:30%@md w:100%@sm"></div> */}
      </div>
    </div>
  );
}

export default App;
