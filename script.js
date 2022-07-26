document.body.onload = drawLibrary;
let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  
}
for (let i=0; i<15; i++){
    myLibrary.push(new Book('KSIONDXZ','DUPA JASU','232',false))
}
function drawLibrary() {
    myLibrary.forEach(book => {
        const newCard = document.createElement("div");
    });
}
