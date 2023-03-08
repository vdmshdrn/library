let myLibrary = [];
let wrapper = document.querySelector('.wrapper');
let addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener('click', function () {
    wrapper.style.display = "block";
    console.log('pressed');
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let book = new Book(title, author, pages, read);
    console.log(book);
}
addBookToLibrary();