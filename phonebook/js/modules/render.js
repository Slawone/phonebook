import createElements from './createElements.js';
import {btnParams} from './data.js';
import {itemsArray} from '../script.js';

const {createHeader,
  createLogo,
  createMain,
  createButtonsGroup,
  createTable,
  createForm,
  createFooter,
  createRow,
} = createElements;


export const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const main = createMain();
  const buttonGroup = createButtonsGroup(btnParams);
  const table = createTable();
  const {form, overlay} = createForm();
  const footer = createFooter(title);
  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContacts = (elem, data) => {
  const allRow = itemsArray.map(createRow);
  elem.append(...allRow);
  return allRow;
};
