
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
    index=0;
    const library = document.querySelector(".library")
    myLibrary.forEach(book => {
        // console.log(book);
        const newCard = document.createElement("div");
        newCard.setAttribute("id",index);
        newCard.setAttribute("class","card");
        newCard.setAttribute("style","width: 450px;");
        index++;
        newCard.innerHTML = 
        `<div class="card-divider">
            ${book.title}
        </div>
        <img src="assets/img/generic/rectangle-1.jpg">
        <div class="card-section">
          <h4>${book.author}</h4>
          <p>${book.pages}</p>
          <p>${book.read? "read": "not read"}</p>
        </div>`;
        console.log(library);
        library.appendChild(newCard);
    });
}
document.body.onload = drawLibrary();