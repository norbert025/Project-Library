


// Finds author by id
function findAuthorById(authors, id) {
 return authors.find((author) => author.id === id) 
}


// Finds book by id
function findBookById(books, id) {
  return books.find((book) => book.id ===id);
}


// Partitions books by borrowed status
function partitionBooksByBorrowedStatus(books) {
  const loanedBook = [];
  const notLoanedBooks = [];
  const finalBookArray = [];
  books.forEach((book) => {
    const borrowedBooks = book.borrows.filter((transaction) => {
      return !transaction.returned;
    })
    if (borrowedBooks.length > 0) {
      loanedBook.push(book)
    } else notLoanedBooks.push(book);
  })
  finalBookArray.push(loanedBook, notLoanedBooks)
  return finalBookArray;
}



// Gets borrowers for a book
function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows;
  const result = borrowed.map((borrow) => {
    const account = accounts.find((account) => borrow.id === account.id);
    return { ...borrow, ...account };
  });
  result.length = 10;
  return result;
}






module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
