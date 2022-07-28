let myLibrary = [];

function Book(title, author, pages, id, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(values) {
    const newBook = new Book(...values,myLibrary.length);
    myLibrary.push(newBook);
    drawBook(newBook);
    console.table(myLibrary);
}
for (let i = 0; i < 15; i++) {
    myLibrary.push(new Book('KSIONDXZ', `DUPA JASU ${i}`, '232', i, true))
}

function drawBook(book) {
    const library = document.querySelector(".library")
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
      <p>Pages: ${book.pages}</p>
      <button class=" book"
      data-id=${book.id}
      data-read=${book.read}
      >${book.read? "read": "not read"}</button>
      <button class="delete-book"
      data-id=${book.id}
      data-read="false"
      >delete book</button>
    </div>`;
    //console.log(library);
    library.appendChild(newCard);
    addDeleteButtonEvent(newCard);
    addReadButtonEvent(newCard);
}

function drawLibrary() {
    
    // library.innerHTML = '';
    myLibrary.forEach(book => {
        // console.log(book);
        drawBook(book);
        // addReadButtonEvent(book);
    });
}

document.body.onload = drawLibrary();
// let readButtons = document.querySelectorAll('.book');
// readButtons.forEach(button => {
//     addReadButtonEvent(button)
// });
function addReadButtonEvent(element){
    let readButton = element.querySelector('.book');
    readButton.addEventListener("click", (e) => {
        const book = myLibrary.find(b => {
            return (b.id == e.target.dataset.id);
        })
        book.read = !book.read;
        e.target.dataset.read = e.target.dataset.read == 'true'? 'false' : 'true';
        e.target.innerHTML = book.read? "read" : "not read"
        console.log(e.target.dataset.read);
        // console.log(book);
    });
}
function addDeleteButtonEvent(element){
    let deleteButton = element.querySelector('.delete-book');
    deleteButton.addEventListener("click", (e) => {
        const book = myLibrary.find(b => {
            return (b.id == e.target.dataset.id);
        })
        const card = document.querySelector(`[data-id="${e.target.dataset.id}"]`)
        myLibrary = myLibrary.filter(book => book.id != e.target.dataset.id);
        card.remove();
        console.table(myLibrary);
    });
}
let deleteButtons = document.querySelectorAll('.delete-book');
deleteButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const book = myLibrary.find(b => {
            return (b.id == e.target.dataset.id);
        })
        const card = document.querySelector(`[data-id="${e.target.dataset.id}"]`)
        myLibrary = myLibrary.filter(book => book.id != e.target.dataset.id);
        card.remove();
        console.table(myLibrary);
    });
});

addButton = document.querySelector(`#buttonAdd[data-toggle="addBookForm"]`);
addButton.addEventListener('click',(e)=>{
    const form = document.querySelector(`div[data-toggle="${e.target.dataset.toggle}"]`);
    form.dataset.visible = true;
    // console.log(form);
})
sendButton = document.querySelector(`#buttonSend[data-toggle="addBookForm"]`);
sendButton.addEventListener('click',(e)=>{
    const form = document.querySelector(`div[data-toggle="${e.target.dataset.toggle}"]`);
    const inputs =new Array (...form.querySelectorAll("input"));
    const values = inputs.map(x=>{
        return x.value;
    })
    addBookToLibrary(values);
    console.log(values);
    form.dataset.visible = false;
});
