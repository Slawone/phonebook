import createElements from './createElements.js';
import {itemsArray} from '../script.js';
import storage from './localStorage.js';

const {createRow} = createElements;
const {setStorage} = storage;

const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => formOverlay.classList.add('is-visible');

  const closeModal = () => formOverlay.classList.remove('is-visible');

  btnAdd.addEventListener('click', openModal);

  formOverlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === formOverlay || target.classList.contains('close')) {
      closeModal();
    }
  });
  return {
    closeModal,
  };
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newContact = Object.fromEntries(formData);

    addContactPage(newContact, list);

    itemsArray.push(newContact);

    setStorage('items', itemsArray);

    form.reset();
    closeModal();
  });
};

const deleteControl = (btnDel, list, data) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    const target = e.target;
    const phoneValue = target.closest('.contact').phoneLink.textContent;

    if (target.closest('.del-icon')) {
      target.closest('.contact').remove();
    }
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      if (item.phone === phoneValue) {
        data.splice(i, 1);
      }
    }
    setStorage('items', data);
  });
};

export default {
  hoverRow,
  modalControl,
  formControl,
  deleteControl,
};
