import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <>
      <div className="display:flex min-h:100vh flex-direction:col flex-direction:row@sm">
        <div className="py:10x px:8x w:50%@md w:100%@sm">
          <h1 className="font-size:2.5rem">Daniel Cardenas</h1>
          <p className="font-size:1.5rem">
            Hi! I'm a software engineer and web developer. I'm passionate about
            building software that is fast, reliable, and user-friendly.
          </p>
        </div>
        <div className="py:10x px:8x w:50%@md w:100%@sm">
          <Spline scene="https://prod.spline.design/KDwRgP15DHzYOVZS/scene.splinecode" />
        </div>
      </div>
    </>
  );
}

export default App;
