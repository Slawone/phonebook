import storage from './modules/localStorage.js';
import {renderPhoneBook, renderContacts} from './modules/render.js';
import control from './modules/control.js';

const {getStorage} = storage;
const {
  hoverRow,
  modalControl,
  formControl,
  deleteControl,
} = control;

export const itemsArray = localStorage.getItem('items') ?
 JSON.parse(localStorage.getItem('items')) : [];

const data = getStorage('items');

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);

  const {
    list,
    logo,
    btnAdd,
    formOverlay,
    btnDel,
    form,
  } = renderPhoneBook(app, title);

  // Функционал
  const allRow = renderContacts(list, data);
  const {closeModal} = modalControl(btnAdd, formOverlay);

  hoverRow(allRow, logo);
  deleteControl(btnDel, list, itemsArray);
  formControl(form, list, closeModal);
};

window.phoneBookInit = init;
