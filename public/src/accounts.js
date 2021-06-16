
// Finds account id
function findAccountById(accounts, id) {
 return (accounts = accounts.find((account) => account.id ===id));
}

// Sorts accounts by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => 
  nameA.name.last > nameB.name.last ? 1: -1);
}

// Gets total number of borrows
function getTotalNumberOfBorrows(account, books) {
  let borrowedBookCount = 0;
  books.forEach((book) => {
    book.borrows.forEach((transaction) => {
      if (transaction.id === account.id) borrowedBookCount++
    });
  })
  return borrowedBookCount
}


// Gets books possessed by account
function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  books.forEach((book) => {
    const borrowedBooks = book.borrows.filter((transaction) => !transaction.returned && transaction.id === account.id);
    if (borrowedBooks.length > 0) {
      const findAuthor = authors.find((author) => author.id === book.authorId);
      result.push({
        id: book.id,
        title: book.title,
        genre: book.genre,
        authorId: book.authorId,
        author: findAuthor,
        borrows: borrowedBooks,
      })
    }
  });
  console.log(result)
  return result;
}








module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
