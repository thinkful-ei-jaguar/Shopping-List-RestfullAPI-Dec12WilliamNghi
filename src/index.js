import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';
import store from './store';
import shoppingList from './shopping-list';

const main = function () {
  api.createItem("banana")
  .then(res => res.json())
  .then((newItem) => {
    store.addItem(newItem);
    render();
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
