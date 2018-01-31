/**
 * How to style a button using styled components.
 * @author [David Tolbert](npm.merlin@gmail.com)
 */

// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

/**
 * App initialization.
 */
async function initApp() {

  // Render function.
  const render = (Component) => {
    ReactDOM.render(
      <Component/>,
      window.document.getElementById('app'));
  };

  // Render app.
  render(App);

  // Hot reload.
  if (module.hot) {
    module.hot.accept('./', () => {
      render();
    });
  }
};

// Initialize app.
initApp();