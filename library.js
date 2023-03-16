
//book object constructor
function Book(title, author, pages, isbn, read,id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.read = read;
  this.id = id;
  
}
//************************ */

const book1 = new Book('Don Quijote', 'Cervantes', 587, 34623, true, 1, );
const book2 = new Book('Ulysses', 'James Joyce', 236, 247623, true, 2);

const myLibrary = [book1, book2];
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
    

id++

  return bookCard;
}

//************************* */

function displayLibrary() {
  id = 1;

  const bookCardsContainer = document.getElementById("books");
  bookCardsContainer.innerHTML= '';
  for (var i = 0; i < myLibrary.length; i++) {
    const cardHTML = createBookCard(myLibrary[i]);
    bookCardsContainer.innerHTML += cardHTML;
}

  addButtons();
}

function addButtons() {
  const buttons = document.querySelectorAll('button[data-book-id]');
  
  buttons.forEach(button => {
  button.addEventListener('click', function() {
  const bookId = this.dataset.bookId; // Get the book ID from the button's data attribute......how???
  console.log("bookId" + bookId);
  
  //toggle read Status

  (myLibrary[bookId -1].read == true) ? myLibrary[bookId - 1].read = false : myLibrary[bookId -1].read = true;
  
//***************************************** */
  console.log(myLibrary[bookId - 1].read)
  console.log(myLibrary)

  displayLibrary();

});
});
}

function createFormModal()  {
 
  const submit = document.getElementById('submitButton');
  const form = document.getElementById('newBookForm');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    var newRead = false;
    const formData = new FormData(form);

    (formData.get('read') === "on") ? newRead = true : newRead = false;
 
    const newTitle = formData.get('title');
    const newAuthor = formData.get('author');
    const newPages = formData.get('pages');
    const newIsbn = formData.get('isbn');
    const newId = id;

    const newBook = new Book(newTitle, newAuthor, newPages, newIsbn, newRead, newId);
    let newBookCard = createBookCard(newBook);
    document.getElementById('books').innerHTML += newBookCard;
    
    myLibrary.push(newBook)
    console.log(newBook); console.log(myLibrary);
   
   addButtons();
    
  
  });
 
}

function addBook(title, author, pages, isbn, read, id)  {
          const book = new Book(title, author, pages, isbn, read, id);
}