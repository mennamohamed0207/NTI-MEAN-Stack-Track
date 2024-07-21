function showCard() {
    let table = document.getElementById("mytable") as HTMLElement;
    type Book = { title: string, author: string, genre: string, publicationDate: string, rating: number };
    let books: Book[] = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", publicationDate: "1925", rating: 4.5 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", publicationDate: "1960", rating: 4.2 },
        { title: "Pride and Prejudice", author: "Jane Austen", genre: "Classic", publicationDate: "1813", rating: 4.8 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic", publicationDate: "1951", rating: 4.6 },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", publicationDate: "1954", rating: 4.9 }
    ]
    console.log("hello");

    for (let i = 0; i < books.length; i += 2) {
        if(i==books.length-1){
            table.innerHTML += `<tr>
            <td>
            <div class="card" style="width: 36rem;">
      <div class="card-body">
        <h5 class="card-title">${books[i].title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${books[i].author}</h6>
        <p class="card-text">Genere : ${books[i].genre}</p>
        <p class="card-text">Publication Date : ${books[i].publicationDate}</p>
        <p class="card-text">Rating : ${books[i].rating}</p>
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-primary">Delete</button>
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
    <h5 class="card-title">${books[i].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${books[i].author}</h6>
    <p class="card-text">Genere : ${books[i].genre}</p>
    <p class="card-text">Publication Date : ${books[i].publicationDate}</p>
    <p class="card-text">Rating : ${books[i].rating}</p>
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-primary">Delete</button>
  </div>
</div>
</td>
<td>
<div class="card" style="width: 36rem;">
 <div class="card-body">
    <h5 class="card-title">${books[i + 1].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${books[i + 1].author}</h6>
    <p class="card-text">Genere : ${books[i + 1].genre}</p>
    <p class="card-text">Publication Date : ${books[i + 1].publicationDate}</p>
    <p class="card-text">Rating : ${books[i + 1].rating}</p>
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-primary">Delete</button>
    </td>
  </div>
  </div>
        </tr>`

    }
}
showCard();