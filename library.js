




//book object constructor
function Book(title, author, pages, isbn, read,id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.read = read;
  this.id = id;
  

}


const book1 = new Book('Don Quijote', 'Cervantes', 587, 34623, true, 1, );
const book2 = new Book('Ulysses', 'James Joyce', 236, 247623, true, 2);

const myLibrary = [book1, book2];







//create book card





const createBookCard = (book) => {

  if (book.read == true)  {
    var readStatusSwitch = "checked"
  }
  else{
    var readStatusSwitch = "default"
  }

  const bookCard = ` <div class="card" style="height: auto; width: 18rem;">
  <h5 class="card-title">Book${book.id}</h5>
  <p class="card-text">
    <ul class="list-group">
      <li class="list-group-item">Title: ${book.title}</li>
      <li class="list-group-item">Author: ${book.author}</li>
      <li class="list-group-item">ISBN: ${book.pages}</li>
      <li class="list-group-item">Pages: ${book.isbn}</li>
      <li class="list-group-item">Read: ${book.read}</li>
      <div class="form-check form-switch">
      <button type="button" class="btn btn-secondary" data-book-id="${book.id}" data-read-status="${book.read}">Toggle Read Status</button>
      
  </div>
    </ul>
  </p>
  </div>`
;
    





  return bookCard;
}


//Create eventlistener for read switch to change read 

const eventListenerArray = [];



//const readSwitch = document.getElementById(`readCheckbox${id}`)



  // add book to library



function addBook(title, author, pages, isbn, read, id)  {
          const book = new Book(title, author, pages, isbn, read, id);
}