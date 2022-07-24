import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { fetchUsers } from './features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchPosts } from './features/posts/postsSlice';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
