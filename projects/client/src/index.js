// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// import { ClerkProvider } from "@clerk/clerk-react";

// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <App />
//     </ClerkProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ClerkProvider } from "@clerk/clerk-react";
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap css
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
    <Provider store={store}>
      <App />
    </Provider>
    </ClerkProvider>
  </React.StrictMode>
);


