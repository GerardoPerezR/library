

var id = 1;



//book object constructor
function Book(title, author, pages, isbn, read,id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.read = read;
  this.id = id;
  

}


const book1 = new Book('Don Quijote', 'Cervantes', 587, 34623, false, 1);
const book2 = new Book('Ulysses', 'James Joyce', 236, 247623, true, 2);

const myLibrary = [book1, book2,];



Book.prototype.sayInfo = function() {
  console.log(`${title}written by${author}is${pages}long`)};


//create book card





const createBookCard = (book) => {
  if (book.read == true)  {
    var readStatus = "checked"
  }
  else{
    var readStatus = "default"
  }
  return ` <div class="card" style="height: auto; width: 18rem;">
<h5 class="card-title">Book${id}</h5>
<p class="card-text">
  <ul class="list-group">
    <li class="list-group-item">Title: ${book.title}</li>
    <li class="list-group-item">Author: ${book.author}</li>
    <li class="list-group-item">ISBN: ${book.pages}</li>
    <li class="list-group-item">Pages: ${book.isbn}</li>
    <li class="list-group-item">Read: ${book.read}</li>
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="readCheckbox${id}" data-book-id="${book.id}", data-read-status="${book.read}",  ${readStatus}>
  <label class="form-check-label" for="readCheckbox">Read</label>
</div>
</div>
  </ul>
</p>
</div>`;
}


//Create eventlistener for read switch to change read 

const readSwitch = document.getElementById(`readCheckbox${id}`)



  // add book to library



function addBook(title, author, pages, isbn, read, id)  {
          const book = new Book(title, author, pages, isbn, read, id);
}