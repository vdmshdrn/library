let myLibrary = ['hobbit', 'star wars', 'harry potter', 'warhammer40000'];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function () {
        let reading = false;
        if (!reading) {
            console.log('Book is read');
        }
    };
}

function addBookToLibrary(library) {

    for (let book in library) {
        console.log(library[book]);
    }
}
addBookToLibrary(myLibrary);