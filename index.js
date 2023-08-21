import { DateTime } from './node_modules/luxon/src/luxon.js';
import Book from './modules/book.js';
import Collection from './modules/collection.js';

import { displayBooks, displayAddForm, displayContact } from './modules/navigation.js';

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');

const collec = new Collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    collec.add(new Book(element.title, element.author));
  });
}

submitBtn.addEventListener('click', () => {
  collec.add(new Book(inputTitle.value, inputAuthor.value));
});

const navAdd = document.querySelector('#addNew');
const navList = document.querySelector('#list');
const navContact = document.querySelector('#contact');

navAdd.addEventListener('click', displayBooks);

navList.addEventListener('click', displayAddForm);

navContact.addEventListener('click', displayContact);

const dateSection = document.querySelector('.date');

setInterval(() => {
  const dateTime = DateTime.now();

  dateSection.textContent = dateTime
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
    .slice(0, -5);
}, 1000);