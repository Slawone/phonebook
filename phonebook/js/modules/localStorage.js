const setStorage = (key, arr) => {
  localStorage.setItem(key, JSON.stringify(arr));
};

const getStorage = (key) => {
  if (JSON.parse(localStorage.getItem(key))) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export default {
  setStorage,
  getStorage,
};
