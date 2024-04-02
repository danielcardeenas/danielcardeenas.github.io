import './app.css';

export function App() {
  return (
    <div class="display:flex min-h:100vh flex-direction:col flex-direction:row@sm">
      <div class="py:10x px:8x w:50%@md w:100%@sm">
        <h1 class="font-size:2.5rem">Daniel Cardenas</h1>
        <p class="font-size:1.5rem">
          Hi! I'm a software engineer and web developer. I'm passionate about
          building software that is fast, reliable, and user-friendly.
        </p>
      </div>
      <div class="py:10x px:8x w:50%@md w:100%@sm h:100%">
      </div>
    </div>
  );
}
