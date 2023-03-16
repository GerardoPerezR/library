




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
    


id++


  return bookCard;
}

var i = 0;
 var id = i + 1;



function displayLibrary() {
    const bookCardsContainer = document.getElementById("books");
  bookCardsContainer.innerHTML= '';

  for (var i = 0; i < myLibrary.length; i++) {
   
    const cardHTML = createBookCard(myLibrary[i]);
    bookCardsContainer.innerHTML += cardHTML;





    
  }  addButtons();
}

//const readSwitch = document.getElementById(`readCheckbox${id}`)
  


function addButtons() {
  const buttons = document.querySelectorAll('button[data-book-id]');
  // Loop over the NodeList and add an event listener to each button
buttons.forEach(button => {
button.addEventListener('click', function() {
  const bookId = this.dataset.bookId; // Get the book ID from the button's data attribute......how???
  console.log("bookId" + bookId);
  
  const readStatus = this.dataset.readStatus; // Get the read status from the button's data attribute
  if ( myLibrary[bookId - 1].read == true)  {
    myLibrary[bookId - 1].read = false;
  }

  else{
    myLibrary[bookId - 1].read = true;
  }
  console.log(myLibrary[bookId - 1].read)
  // TODO: Update the read status of the book with the given ID
 
  console.log(myLibrary)
  displayLibrary();

});
});
}

addButtons2();
function addButtons2() {
  const buttons = document.querySelectorAll('button[data-book-id]');
  // Loop over the NodeList and add an event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', function () {



      console.log("Read Status" + newBook.read);
      if (newBook.read == true) {
        newBook.read = false;
      }

      else {
        newBook.read = true;
      }

      console.log(newBook.read);
      // TODO: Update the read status of the book with the given ID
      console.log("it's alive");
      displayLibrary();
      console.log(myLibrary);
    });
  });
}

  // add book to library



function addBook(title, author, pages, isbn, read, id)  {
          const book = new Book(title, author, pages, isbn, read, id);
}