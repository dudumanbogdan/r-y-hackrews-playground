import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/App'
import configureStore from './store';
import { Provider } from 'react-redux'
import hackerNewsApi from './services/hackerNewsApi';

hackerNewsApi.getTopStoriesId().then(ids => console.log(ids));

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);
  const NS = 'hackernews-playground/app';

  store.dispatch({ type: `${NS}/init` })

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
