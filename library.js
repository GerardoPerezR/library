

var bookId = 0;

//book object constructor
function Book(title, author, pages, isbn, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.read = read;
  

}


const book1 = new Book('Don Quijote', 'Cervantes', 587, 34623, true);
const book2 = new Book('Ulysses', 'James Joyce', 236, 247623, false);

const myLibrary = [book1, book2];


const form = document.querySelector('#newBookForm')
Book.prototype.sayInfo = function() {
  console.log(`${title}written by${author}is${pages}long`)};

//create book card




const createBookCard = (book) => {
  return ` <div class="card" style="height: auto; width: 18rem;">
<h5 class="card-title">Book1</h5>
<p class="card-text">
  <ul class="list-group">
    <li class="list-group-item">Title: ${book.title}</li>
    <li class="list-group-item">Author: ${book.author}</li>
    <li class="list-group-item">ISBN: ${book.pages}</li>
    <li class="list-group-item">Pages: ${book.isbn}</li>
    <li class="list-group-item">Read: ${book.read}</li>
  </ul>
</p>
</div>`;
}

  // add book to library


function addBook(title, author, pages, isbn, read, id)  {
          const book = new Book(title, author, pages, isbn, read);
}