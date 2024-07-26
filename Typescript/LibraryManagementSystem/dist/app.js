"use strict";
let books = [
    { title: "The Great Gatsby", author: "X", genre: "Fantasy", publicationDate: "1925", rating: 4.5 },
    { title: "To Kill a Mockingbird", author: "Y", genre: "Non-Fiction", publicationDate: "1960", rating: 4.2 },
    { title: "Pride and Prejudice", author: "X", genre: "Fantasy", publicationDate: "1813", rating: 4.8 },
    { title: "The Catcher in the Rye", author: "Z", genre: "Non-Fiction", publicationDate: "1951", rating: 4.6 },
    { title: "The Lord of the Rings", author: "Z", genre: "Fiction", publicationDate: "1954", rating: 4.9 }
];
document.addEventListener('DOMContentLoaded', () => {
    const showFormBtn = document.getElementById('show-form-btn');
    const closeFormBtn = document.getElementById('close-form');
    const formContainer = document.getElementById('form-container');
    const addBookForm = document.getElementById('add-book-form');
    const closeFormBtnUpdate = document.getElementById('close-form-update');
    const formContainerUpdate = document.getElementById('form-container-update');
    const updateBookForm = document.getElementById('update-book-form');
    showFormBtn.addEventListener('click', () => {
        formContainer.style.display = 'flex';
        formContainer.style.width = '700px';
        formContainer.style.height = '800px';
        formContainer.style.alignItems = 'center';
        formContainer.style.marginLeft = '300px';
    });
    closeFormBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
    });
    closeFormBtnUpdate.addEventListener('click', () => {
        formContainerUpdate.style.display = 'none';
    });
    window.onclick = (event) => {
        if (event.target == formContainer) {
            formContainer.style.display = 'none';
        }
        if (event.target == formContainerUpdate) {
            formContainerUpdate.style.display = 'none';
        }
    };
    updateBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const bookIndex = document.getElementById("book-index").value;
        updateBook(parseInt(bookIndex));
        formContainerUpdate.style.display = 'none';
    });
    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addBook();
        formContainer.style.display = 'none';
    });
    showCard(books);
});
function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author-add").value;
    const genre = document.getElementById("genre-add").value;
    const publicationDate = document.getElementById("date-add").value;
    const rating = Number(document.getElementById("rating-add").value);
    const newBook = { title, author, genre, publicationDate, rating };
    books.push(newBook);
    showCard(books);
    getTotalBooks();
    getFictionBooks();
    getNonFictionBooks();
    getFantasyBooks();
    getBooksByAuthorX();
    getBooksByAuthorY();
    getBooksByAuthorZ();
}
function showUpdateForm(index) {
    const formContainerUpdate = document.getElementById('form-container-update');
    formContainerUpdate.style.display = 'flex';
    formContainerUpdate.style.width = '700px';
    formContainerUpdate.style.height = '800px';
    formContainerUpdate.style.alignItems = 'center';
    formContainerUpdate.style.marginLeft = '300px';
    const book = books[index];
    document.getElementById("title-update").value = book.title;
    document.getElementById("author-update").value = book.author;
    document.getElementById("genre-update").value = book.genre;
    document.getElementById("date-update").value = book.publicationDate;
    document.getElementById("rating-update").value = book.rating.toString();
    document.getElementById("book-index").value = index.toString();
    console.log(book);
}
function updateBook(index) {
    const title = document.getElementById("title-update").value;
    const author = document.getElementById("author-update").value;
    const genre = document.getElementById("genre-update").value;
    const publicationDate = document.getElementById("date-update").value;
    const rating = Number(document.getElementById("rating-update").value);
    books[index] = { title, author, genre, publicationDate, rating };
    showCard(books);
    getTotalBooks();
    getFictionBooks();
    getNonFictionBooks();
    getFantasyBooks();
    getBooksByAuthorX();
    getBooksByAuthorY();
    getBooksByAuthorZ();
}
function showCard(booksShown) {
    let table = document.getElementById("mytable");
    table.innerHTML = "";
    console.log("hello");
    for (let i = 0; i < booksShown.length; i += 2) {
        if (i == booksShown.length - 1) {
            table.innerHTML += `<tr>
            <td>
            <div class="card" style="width: 36rem;">
      <div class="card-body">
        <h5 class="card-title">${booksShown[i].title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${booksShown[i].author}</h6>
        <p class="card-text">Genre : ${booksShown[i].genre}</p>
        <p class="card-text">Publication Date : ${booksShown[i].publicationDate}</p>
        <p class="card-text">Rating : ${booksShown[i].rating}</p>
        <input type="hidden" id="book-index" value="${i}">
        <button class="btn btn-primary" onclick="showUpdateForm(${i})">Edit</button>
        <button class="btn btn-primary" onclick="deleteBook(${i})">Delete</button>
      </div>
    </div>
    </td>
    </tr>`;
            break;
        }
        table.innerHTML += `<tr>
        <td>
        <div class="card" style="width: 36rem;">
  <div class="card-body">
    <h5 class="card-title">${booksShown[i].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${booksShown[i].author}</h6>
    <p class="card-text">Genre : ${booksShown[i].genre}</p>
    <p class="card-text">Publication Date : ${booksShown[i].publicationDate}</p>
    <p class="card-text">Rating : ${booksShown[i].rating}</p>
    <button class="btn btn-primary" onclick="showUpdateForm(${i})">Edit</button>
    <button class="btn btn-primary" onclick="deleteBook(${i})">Delete</button>
  </div>
</div>
</td>

<td>
<div class="card" style="width: 36rem;">
  <div class="card-body">
    <h5 class="card-title">${booksShown[i + 1].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${booksShown[i + 1].author}</h6>
    <p class="card-text">Genre : ${booksShown[i + 1].genre}</p>
    <p class="card-text">Publication Date : ${booksShown[i + 1].publicationDate}</p>
    <p class="card-text">Rating : ${booksShown[i + 1].rating}</p>
    <button class="btn btn-primary" onclick="showUpdateForm(${i + 1})">Edit</button>
    <button class="btn btn-primary" onclick="deleteBook(${i + 1})">Delete</button>
  </div>
</div>
</td>
</tr>`;
    }
}
function deleteBook(i) {
    books.splice(i, 1);
    showCard(books);
    getTotalBooks();
    getFictionBooks();
    getNonFictionBooks();
    getFantasyBooks();
    getBooksByAuthorX();
    getBooksByAuthorY();
    getBooksByAuthorZ();
}
function filterAuthor() {
    let author = document.getElementById("author");
    let authorName = author.value;
    if (authorName != "") {
        let authorBooks = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].author == authorName) {
                authorBooks.push(books[i]);
            }
        }
        showCard(authorBooks);
    }
}
function filterGenre() {
    let genre = document.getElementById("genre");
    let genreName = genre.value;
    if (genreName != "") {
        let genreBooks = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].genre == genreName) {
                genreBooks.push(books[i]);
            }
        }
        showCard(genreBooks);
    }
}
function filterRating() {
    let rating = document.getElementById("rating");
    let ratingValue = (rating.value);
    if (ratingValue != "") {
        let ratingComp = parseFloat(ratingValue);
        console.log(ratingComp);
        let ratingBooks = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].rating == ratingComp) {
                ratingBooks.push(books[i]);
            }
        }
        showCard(ratingBooks);
    }
}
function sortByTitle() {
    books.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    showCard(books);
}
function sortByPublicationDate() {
    books.sort(function (a, b) {
        if (a.publicationDate < b.publicationDate) {
            return -1;
        }
        if (a.publicationDate > b.publicationDate) {
            return 1;
        }
        return 0;
    });
    showCard(books);
}
function sortByRating() {
    books.sort(function (a, b) {
        if (a.rating < b.rating) {
            return -1;
        }
        if (a.rating > b.rating) {
            return 1;
        }
        return 0;
    });
    showCard(books);
}
function getTotalBooks() {
    document.getElementById("totalBooks").textContent = books.length.toString();
}
function getFictionBooks() {
    let fiction = document.getElementById("fiction");
    let fictionBooks = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].genre == "Fiction") {
            fictionBooks++;
        }
    }
    fiction.innerHTML = fictionBooks.toString();
}
function getNonFictionBooks() {
    let Nonfiction = document.getElementById("nonfiction");
    let NonfictionBooks = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].genre == "Non-Fiction") {
            NonfictionBooks++;
        }
    }
    Nonfiction.innerHTML = NonfictionBooks.toString();
}
function getFantasyBooks() {
    let fantasy = document.getElementById("fantasy");
    let fantasyBooks = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].genre == "Fantasy") {
            fantasyBooks++;
        }
    }
    fantasy.innerHTML = fantasyBooks.toString();
}
function getBooksByAuthorX() {
    let authorX = document.getElementById("authorX");
    let authorXBooks = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "X") {
            authorXBooks++;
        }
    }
    authorX.innerHTML = authorXBooks.toString();
}
function getBooksByAuthorY() {
    let authorY = document.getElementById("authorY");
    let authorYBooks = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Y") {
            authorYBooks++;
        }
    }
    authorY.innerHTML = authorYBooks.toString();
}
function getBooksByAuthorZ() {
    let authorZ = document.getElementById("authorZ");
    let authorZBooks = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Z") {
            authorZBooks++;
        }
    }
    authorZ.innerHTML = authorZBooks.toString();
}
