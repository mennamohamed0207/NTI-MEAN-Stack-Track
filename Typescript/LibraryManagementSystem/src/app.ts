type Book = { title: string, author: string, genre: string, publicationDate: string, rating: number };

let books: Book[] = [
    { title: "The Great Gatsby", author: "X", genre: "Fantasy", publicationDate: "1925", rating: 4.5 },
    { title: "To Kill a Mockingbird", author: "Y", genre: "Non-Fiction", publicationDate: "1960", rating: 4.2 },
    { title: "Pride and Prejudice", author: "X", genre: "Fantasy", publicationDate: "1813", rating: 4.8 },
    { title: "The Catcher in the Rye", author: "Z", genre: "Non-Fiction", publicationDate: "1951", rating: 4.6 },
    { title: "The Lord of the Rings", author: "Z", genre: "Fiction", publicationDate: "1954", rating: 4.9 }
];

document.addEventListener('DOMContentLoaded', () => {
    const showFormBtn = document.getElementById('show-form-btn') as HTMLButtonElement;
    const closeFormBtn = document.getElementById('close-form') as HTMLSpanElement;
    const formContainer = document.getElementById('form-container') as HTMLElement;
    const addBookForm = document.getElementById('add-book-form') as HTMLFormElement;

    const closeFormBtnUpdate = document.getElementById('close-form-update') as HTMLSpanElement;
    const formContainerUpdate = document.getElementById('form-container-update') as HTMLElement;
    const updateBookForm = document.getElementById('update-book-form') as HTMLFormElement;

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

    window.onclick = (event: MouseEvent) => {
        if (event.target == formContainer) {
            formContainer.style.display = 'none';
        }
        if (event.target == formContainerUpdate) {
            formContainerUpdate.style.display = 'none';
        }
    };
  
    updateBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const bookIndex = (document.getElementById("book-index") as HTMLInputElement).value;
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
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const author = (document.getElementById("author-add") as HTMLInputElement).value;
    const genre = (document.getElementById("genre-add") as HTMLInputElement).value;
    const publicationDate = (document.getElementById("date-add") as HTMLInputElement).value;
    const rating = Number((document.getElementById("rating-add") as HTMLInputElement).value);
    const newBook: Book = { title, author, genre, publicationDate, rating };
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
function showUpdateForm(index: number) {
    const formContainerUpdate = document.getElementById('form-container-update') as HTMLElement;
    formContainerUpdate.style.display = 'flex';
    formContainerUpdate.style.width = '700px';
    formContainerUpdate.style.height = '800px';
    formContainerUpdate.style.alignItems = 'center';
    formContainerUpdate.style.marginLeft = '300px';

    const book = books[index];
    (document.getElementById("title-update") as HTMLInputElement).value = book.title;
    (document.getElementById("author-update") as HTMLInputElement).value = book.author;
    (document.getElementById("genre-update") as HTMLInputElement).value = book.genre;
    (document.getElementById("date-update") as HTMLInputElement).value = book.publicationDate;
    (document.getElementById("rating-update") as HTMLInputElement).value = book.rating.toString();
    (document.getElementById("book-index") as HTMLInputElement).value = index.toString();
    console.log(book);
    
}

function updateBook(index: number) {
    const title = (document.getElementById("title-update") as HTMLInputElement).value;
    const author = (document.getElementById("author-update") as HTMLInputElement).value;
    const genre = (document.getElementById("genre-update") as HTMLInputElement).value;
    const publicationDate = (document.getElementById("date-update") as HTMLInputElement).value;
    const rating = Number((document.getElementById("rating-update") as HTMLInputElement).value);
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
function showCard(booksShown: Book[]) {
    let table = document.getElementById("mytable") as HTMLElement;
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
    <button class="btn btn-primary" onclick="showUpdateForm(${i+1})">Edit</button>
    <button class="btn btn-primary" onclick="deleteBook(${i + 1})">Delete</button>
  </div>
</div>
</td>
</tr>`;
    }
}

function deleteBook(i: number) {
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
    let author = document.getElementById("author") as HTMLInputElement;
    let authorName = author.value;
    if (authorName != "") {

        let authorBooks: Book[] = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].author == authorName) {
                authorBooks.push(books[i]);
            }
        }
        showCard(authorBooks);
    }
}
function filterGenre() {
    let genre = document.getElementById("genre") as HTMLInputElement;
    let genreName = genre.value;
    if (genreName != "") {

        let genreBooks: Book[] = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].genre == genreName) {
                genreBooks.push(books[i]);
            }
        }
        showCard(genreBooks);
    }
}
function filterRating() {

    let rating = document.getElementById("rating") as HTMLInputElement;
    let ratingValue = (rating.value);
    if (ratingValue != "") {
        let ratingComp:number = parseFloat(ratingValue);
        console.log(ratingComp);
        
        let ratingBooks: Book[] = [];
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
    document.getElementById("totalBooks")!.textContent = books.length.toString();
}

function getFictionBooks() {

    let fiction = document.getElementById("fiction") as HTMLElement;
    let fictionBooks: number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].genre == "Fiction") {
            fictionBooks++;
        }
    }
    fiction.innerHTML = fictionBooks.toString();
}
function getNonFictionBooks() {

    let Nonfiction = document.getElementById("nonfiction") as HTMLElement;
    let NonfictionBooks: number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].genre == "Non-Fiction") {
            NonfictionBooks++;
        }
    }
    Nonfiction.innerHTML = NonfictionBooks.toString();
}
function getFantasyBooks() {

    let fantasy = document.getElementById("fantasy") as HTMLElement;
    let fantasyBooks: number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].genre == "Fantasy") {
            fantasyBooks++;
        }
    }
    fantasy.innerHTML = fantasyBooks.toString();
}
function getBooksByAuthorX() {

    let authorX = document.getElementById("authorX") as HTMLElement;
    let authorXBooks: number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "X") {
            authorXBooks++;
        }
    }
    authorX.innerHTML = authorXBooks.toString();
}



function getBooksByAuthorY() {

    let authorY = document.getElementById("authorY") as HTMLElement;
    let authorYBooks: number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Y") {
            authorYBooks++;
        }
    }
    authorY.innerHTML = authorYBooks.toString();
}
function getBooksByAuthorZ() {

    let authorZ = document.getElementById("authorZ") as HTMLElement;
    let authorZBooks: number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Z") {
            authorZBooks++;
        }
    }
    authorZ.innerHTML = authorZBooks.toString();
}
