import SingleBook from "./singlebook.js";

 const bookContainer = document.querySelector('.books-container');
 const bookTitle = document.querySelector('#title');
 const bookAuthor = document.querySelector('#author');

let bookList = [];


  const bookUpload = () => {
    bookContainer.innerHTML = '';
    for (let i = 0; i < bookList.length; i += 1) {
      bookContainer.innerHTML += `
      <div class="books">
        <div class ="book-wrapper"> 
          <div class="book-holder">
              <h3>"${bookList[i].title}"</h3>
              <h3>by</h3>
              <h3>${bookList[i].author}</h3>
          </div>   
          <button class= "delete-btn" data-id="${bookList[i].id}">Remove</button>
        </div>   
          <hr />
      </div>
     `;
      bookTitle.value = '';
      bookAuthor.value = '';
    }
    const bookRemoveBtn = document.querySelectorAll('.delete-btn');

    bookRemoveBtn.forEach((button) => {
      button.addEventListener('click', () => {
        const dataSet = parseInt(button.dataset.id, 10);
        const buttonId = bookList.findIndex((object) => object.id === dataSet);
        // eslint-disable-next-line no-use-before-define
        deleted(buttonId);
      });
    });
    
  }

  const deleted = (index) => {
    bookList.splice(index, 1);
    bookUpload();
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  const addBook = () => {
    const books = {};
    books.id = bookList.length;
    books.title = bookTitle.value;
    books.author = bookAuthor.value;
    bookList.push(books);
  }


  const showbook = () => {
    if (localStorage.getItem('bookList')) {
      bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    bookUpload();
  }

  export { bookList, showbook, addBook, bookUpload };