import {
  bookList, showbook, addBook, bookUpload,
} from './modules/displaybook.js';
import displayList from './modules/displaylist.js';
import displayNew from './modules/displaynew.js';
import displayContact from './modules/displaycontact.js';
import { DateTime } from './modules/luxon.js';

window.onload = () => {
  showbook();
};

const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
  bookUpload();
  localStorage.setItem('bookList', JSON.stringify(bookList));
});

const date = document.getElementById('date');
const now = DateTime.now();
date.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

const list = document.getElementById('list');
const newform = document.getElementById('new');
const cont = document.getElementById('cont');

newform.addEventListener('click', () => {
  displayNew();
});

list.addEventListener('click', () => {
  displayList();
});

cont.addEventListener('click', () => {
  displayContact();
});