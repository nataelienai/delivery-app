const USER_KEY = 'user';

function getLocalStorage() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

function setLocalStorage(key, payload) {
  const currentLocalStorage = getLocalStorage();
  localStorage.setItem(key, JSON.stringify({ ...currentLocalStorage, payload }));
}

export {
  getLocalStorage,
  setLocalStorage,
};
