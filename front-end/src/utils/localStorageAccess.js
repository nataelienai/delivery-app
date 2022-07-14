const USER_KEY = 'user';

function getLocalStorage() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

function setLocalStorage(key, payload) {
  localStorage.setItem(key, JSON.stringify({ ...payload }));
}

export {
  getLocalStorage,
  setLocalStorage,
};
