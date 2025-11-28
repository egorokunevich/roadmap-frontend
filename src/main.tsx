import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { router } from './router';
import ConnectionProvider from './components/common/ConnectionProvider/ConnectionProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConnectionProvider>
      <RouterProvider router={router} />
    </ConnectionProvider>
  </StrictMode>,
);
