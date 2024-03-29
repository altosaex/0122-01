import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.mjs';
import { AuthContextProvider } from './state/AuthContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
  </React.StrictMode>
);