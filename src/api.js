const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[yourname]';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItems(name) {
  // Properties of the new item
  let newItem = {name: name};
  // convert javascript object to json object
  JSON.stringify(newItem);
  // fetch the api to create a new item
  fetch(`${BASE_URL}/items`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: newItem});
}

export default {
  getItems,
  createItems
};