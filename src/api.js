const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[yourname]';


function fetchTemplate(...groceries) {
  let error;
  return fetch(...groceries)
    .then(res => {
      // If response is not 200, then call reject method
      if(!res.OK) {
        // Build error object and return the status code  
        error = {code: res.status};
        // If response is not JSON type, build error and return status
        if(!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
    .then(body => {
      // If body has error, return status
      if(error) {
        error.message = body.message;
        return Promise.reject(error);
      }
      return body;
    });
}

function getItems() {
  return fetchTemplate(`${BASE_URL}/items`);
}
  
function createItem(name) {
  // Properties of the new item
  let newItem = JSON.stringify({name});
  // fetch the api to create a new item
  return fetchTemplate(`${BASE_URL}/items`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: newItem});
}

function updateItem(id, updateData) {
  const newData = JSON.stringify(updateData);
  return fetchTemplate(`${BASE_URL}/items/${id}`, {
    method: 'PATCH', 
    headers: {'Content-Type': 'application/json'},
    body: newData});
}

function removeItem(id) {
  return fetchTemplate(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'});
}

export default {
  getItems,
  createItem,
  updateItem,
  removeItem
};