import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/styles/index.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Could not find root');
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
