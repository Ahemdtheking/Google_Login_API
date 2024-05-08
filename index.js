import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="212871046749-2f2jae95f30u28rupaht3g4ucehianui.apps.googleusercontent.com">
    <App />;
    </GoogleOAuthProvider>
  </React.StrictMode>
);

