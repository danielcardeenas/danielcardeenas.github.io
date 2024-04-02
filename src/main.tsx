import { render } from 'preact';
import { App } from './app.tsx';
import './index.css';
import '.virtual/master.css';

render(<App />, document.getElementById('app')!);
