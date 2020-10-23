import { Category } from './enums';
import { Book, Librarian, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import RefBook from './classes/encyclopedia';
import { UniversityLibrarian } from './classes/univercityLibrarian';
import { createCustomer, getBookByCategoryPromise, getBookTitlesByCategory, logCategorySearch, logSearchResults, purge } from './functions';
import { Shelf } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ==================

// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// const result = getBookAuthorByIndex(1);
// console.log(result);

// const res = calcTotalPages();
// console.log(res);

//Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string = (
//   name: string,
//   id: number
// ) => `${name} - ${id}`;

// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20));

// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 12);
// createCustomer('Anna', 12, 'Moscow');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03

// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.04
// let res = bookTitleTransform('JavaScript');
// console.log(res);

// res = bookTitleTransform(100);
// console.log(res);

// Task 04.01
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3,
//   pages: 200,
//   markDamaged(reason: string) {
//     console.log(`Damaged: ${reason}`);
//   },
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// // Task 04.02

// let logDamage: Logger; //
// logDamage = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// // Task 04.03
//
// let favoriteAuthor: Author = {
//   email: 'anna@a.ru',
//   name: 'Anna',
//   numBooksPublished: 10,
// };

// let favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@b.ru',
//   department: 'Fiction',
//   assistCustomer: (name: string) => console.log(`Assist: ${name}`),
// };

// // Task 04.04

// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// }

// console.log(offer);
// console.log(offer.magazine);
// // console.log(offer.magazine?.()); // check syntax, change config tsconfig.json -> target > es5

// // Task 04.05

// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'pages'));

// // Task 05.01

// const ref: ReferenceItem = new ReferenceItem('Title', 2020);
// console.log(ref);
// ref.printItem();

// ref.publisher = 'Super Pub';
// console.log(ref.publisher);

// // Task 05.02

const refBook: RefBook = new RefBook('WorldPedia', 2001, 3);
console.log(refBook);
// refBook.printItem();

// // Task 05.03

// refBook,printCitation();

// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// task 05.05
// const personBook: PersonBook = {
//   id: 1,
//   author: 'Anna',
//   available: false,
//   category: Category.CSS,
//   email: 'anna@a.ru',
//   name: 'Nana',
//   title: '',
//   markDamaged(''): '',
//   pages: 5,
// }

// task 06.05

// let flag = true;
// if (flag) {
//   import('./classes').then((module) => {
//     const reader = new module.Reader();
//     console.log(reader);
//   });
// } else {
//   console.log('No Data');
// } // dynamic import expression

// const inventory: Book[] = [
//   {
//     id: 10,
//     title: 'The C Programming Language',
//     author: 'K & R',
//     available: true,
//     category: Category.Software,
//   },
//   {
//     id: 11,
//     title: 'Code Complete',
//     author: 'Steve McConnell',
//     available: true,
//     category: Category.Software,
//   },
//   {
//     id: 12,
//     title: '8-Bit Graphics with Cobol',
//     author: 'A. B.',
//     available: true,
//     category: Category.Software,
//   },
//   {
//     id: 13,
//     title: 'Cool autoexec.bat Scripts!',
//     author: 'C. D.',
//     available: true,
//     category: Category.Software,
//   },
// ];

// const books = purge<Book>(inventory);
// console.log(books);

// const numbers = purge([1, 1]);

// // Task 07.02

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const book: Book = bookShelf.getFirst();
// console.log(book.title);

// const magazines = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const mag: Magazine = magazineShelf.getFirst();
// console.log(mag.title);

// // Task 07.03
// magazineShelf.printTitles();
// const magazine = magazineShelf.find('Five Points');
// console.log(magazine);

// Task 07.04

// const book: BookRequiredFields = {
//   id: 1,
//   author: 'Anna',
//   available: false,
//   category: Category.CSS,
//   markDamaged: (p:string) => console.log(p),
//   pages: 200,
//   title: 'Unknown Title',
// }

// const newBook: UpdatedBook = {
//   id: 2,
//   author: 'Me',
// }

// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01

// const l = new UniversityLibrarian();
// console.log(l);
// UniversityLibrarian['a'] = 10;

// // Task 08.02

// const l = new UniversityLibrarian();
// console.log(l);
// l.name = 'Anna';
// l.assistCustomer('Boris');
// l['printLibrarian']();

// // Task 08.03
// l.assistFaculty = null;
// l.assistCommunity = null;


// Task 08.04
// const e = new RefBook('No', 2020, 3);
// console.log(e);

// Task 08.05
// const l = new UniversityLibrarian();
// console.log(l);
// l.name = 'Anna';
// l.assistCustomer('Boris');

// // Task 08.06
// const l = new UniversityLibrarian();
// l.name = 'Anna';
// console.log(l.name);
// l.assistCustomer('Boris');

// // Task 08.07

// const e = new RefBook('No title', 2020, 10);
// e.copies = 10;
// console.log(e);

// // Task 09.01

// getBookByCategory(Category.JavaScript, logCategorySearch);
// getBookByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02

// getBookByCategoryPromise(Category.JavaScript)
//   .then(titles => {
//     console.log(titles);
//     return titles.length;
//   })
//   .then(numberOfBooks => console.log(numberOfBooks))
//   .catch(console.log);
// getBookByCategoryPromise(Category.Software);
// console.log('End');

// Task 09.03

console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software)
  .catch(console.log);
console.log('End');
