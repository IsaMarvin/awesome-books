const booksSection = document.querySelector('.books-section');
const addSection = document.querySelector('.add-books');
const contactSection = document.querySelector('.contact-section');

export const displayBooks = (e) => {
  e.preventDefault();
  addSection.classList.remove('toggle');
  booksSection.classList.add('toggle');
  contactSection.classList.add('toggle');
};

export const displayAddForm = (e) => {
  e.preventDefault();
  booksSection.classList.remove('toggle');
  addSection.classList.add('toggle');
  contactSection.classList.add('toggle');
};

export const displayContact = (e) => {
  e.preventDefault();
  contactSection.classList.remove('toggle');
  booksSection.classList.add('toggle');
  addSection.classList.add('toggle');
};