import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KanbanBoard from './KanbanBoard';
import configureStore from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={configureStore()}>
      <KanbanBoard />
    </Provider>,
  document.getElementById('root')
);
