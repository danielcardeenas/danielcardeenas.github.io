import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <>
      <div className="display:flex h:100% flex-direction:col flex-direction:row@sm w:100% min-h:500px">
        <header className="gradient-bg px:14px w:70%@md w:100%@sm color:white">
          <h1 className="font-size:1.5rem">Daniel Cardenas</h1>
        </header>

        {/* CPU 3D Model */}
        <div className="py:30x px:8px w:30%@md w:100%@sm min-h:500px max-h:500px">
          <Spline scene="https://prod.spline.design/lI9F1J1LQf34N-nN/scene.splinecode" />
        </div>
      </div>
    </>
  );
}

export default App;
