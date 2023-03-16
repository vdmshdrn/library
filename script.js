let myLibrary = [];
let wrapper = document.querySelector('.wrapper');
let addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener('click', function () {
    wrapper.style.display = "block";
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function render() {
    let container = document.querySelector(".container");
    container.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let myBook = document.createElement('div');
        myBook.innerHTML = `<div class="card">
                        
                                <h2>${book.title}</h2><button class="delete" onclick="deleteBook()">X</button>
                                <h4> by ${book.author}</h4>
                                <p>${book.pages} pages</p>
                                <p class="status">${book.read ? "Read" : "Not read"}</p>
                                
                           <div>`
        container.appendChild(myBook);
    }
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
    render();
    
}

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
    addBookToLibrary();
});
function deleteBook(index) {
    console.log(index);
    myLibrary.splice(index, 1);
}

