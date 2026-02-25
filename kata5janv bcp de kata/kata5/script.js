const library = {
  books: [
    {
      title: "1984",
      author: "Orwell",
      year: 1949,
      genre: "Fiction",
      pages: 328,
    },
    {
      title: "Fondation",
      author: "Asimov",
      year: 1951,
      genre: "SF",
      pages: 255,
    },
  ],
};

function addBook(library, book) {
  // À compléter : ajoute un livre à la bibliothèque
  library.books.push(book);
  return library;
}

function getBooksByAuthor(library, author) {
  // À compléter : retourne les livres d'un auteur
  return library.books.filter(
    (book) => book.author.toLowerCase() === author.toLowerCase(),
  );
}

function getBooksByGenre(library, genre) {
  // À compléter : retourne les livres d'un genre
  return library.books.filter(
    (book) => book.genre.toLowerCase() === genre.toLowerCase(),
  );
}

function getTotalPages(library) {
  // À compléter : retourne le nombre total de pages
  let totalPages = 0;
  for (const book of library.books) {
    totalPages += book.pages;
  }
  return totalPages;
}

addBook(library, {
  title: "Dune",
  author: "Herbert",
  year: 1965,
  genre: "SF",
  pages: 688,
});

console.log(library);
console.log(getBooksByAuthor(library, "Orwell"));
console.log(getBooksByGenre(library, "SF"));
console.log(getTotalPages(library));
