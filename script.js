let myLibrary = [];

function Book(title, author, pages, id, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary() {

}
for (let i = 0; i < 15; i++) {
    myLibrary.push(new Book('KSIONDXZ', `DUPA JASU ${i}`, '232', i, true))
}

function drawLibrary() {
    const library = document.querySelector(".library")
    myLibrary.forEach(book => {
        // console.log(book);
        const newCard = document.createElement("div");
        newCard.setAttribute("data-id", book.id);
        newCard.setAttribute("class", "card");
        newCard.setAttribute("style", "width: 450px;");
        newCard.innerHTML =
            `<div class="card-divider">
            ${book.title}
        </div>
        <div class="card-section">
          <h4>${book.author}</h4>
          <p>${book.pages}</p>
          <button class=" book"
          data-id=${book.id}
          data-read=${book.read}
          >${book.read? "read": "not read"}</button>
          <button class="delete-book"
          data-id=${book.id}
          data-read=${book.read}
          >delete book</button>
        </div>`;
        //console.log(library);
        library.appendChild(newCard);
    });
}

document.body.onload = drawLibrary();
let readButtons = document.querySelectorAll('.book');
readButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const book = myLibrary.find(b => {
            return (b.id == e.target.dataset.id);
        })
        book.read = !book.read;
        e.target.dataset.read = e.target.dataset.read == 'true'? 'false' : 'true';
        e.target.innerHTML = book.read? "read" : "not read"
        // console.log(e.target.dataset.read);
        // console.log(book);
    });
});

let deleteButtons = document.querySelectorAll('.delete-book');
deleteButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const book = myLibrary.find(b => {
            return (b.id == e.target.dataset.id);
        })
        const card = document.querySelector(`[data-id="${e.target.dataset.id}"]`)
        // book;
        card.remove();
    });
});