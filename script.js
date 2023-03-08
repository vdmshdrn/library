let myLibrary = [];
let wrapper = document.querySelector('.wrapper');
let addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener('click', function () {
    wrapper.style.display = "block";
    console.log('pressed');
});

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(library) {

    for (let book in library) {
        console.log(library[book]);
    }
}
addBookToLibrary(myLibrary);