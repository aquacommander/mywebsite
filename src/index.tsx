import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

const isMetaMaskExtensionError = (value: unknown): boolean => {
  const text = typeof value === 'string'
    ? value
    : value instanceof Error
      ? `${value.message}\n${value.stack || ''}`
      : JSON.stringify(value ?? '');

  const normalized = text.toLowerCase();
  return (
    normalized.includes('chrome-extension://') &&
    (normalized.includes('metamask') ||
      normalized.includes('/scripts/inpage.js') ||
      normalized.includes('failed to connect to metamask'))
  );
};

if (process.env.NODE_ENV === 'development') {
  // Ignore known wallet-extension noise so the dev overlay only shows app errors.
  window.addEventListener('error', (event) => {
    const message = `${event.message || ''}\n${event.error?.stack || ''}`;
    if (isMetaMaskExtensionError(message)) {
      event.preventDefault();
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    if (isMetaMaskExtensionError(event.reason)) {
      event.preventDefault();
    }
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
