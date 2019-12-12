const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[yourname]';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  // Properties of the new item
  let newItem = JSON.stringify({name});
  // fetch the api to create a new item
  return fetch(`${BASE_URL}/items`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: newItem});
}

export default {
  getItems,
  createItem
};