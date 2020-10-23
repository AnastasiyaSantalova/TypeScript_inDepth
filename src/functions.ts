import { Category } from './enums';
import { Book, LibMgrCallback } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): readonly Book[] {
  const books: ReadonlyArray<Book> = <const>[
    {
      id: 1,
      title: 'Refactoring JavaScript',
      category: Category.JavaScript,
      author: 'Evan Burchard',
      available: true,
    },
    {
      id: 2,
      title: 'JavaScript Testing',
      category: Category.JavaScript,
      author: 'Liang Yuxian Eugene',
      available: false,
    },
    {
      id: 3,
      title: 'CSS Secrets',
      category: Category.CSS,
      author: 'Lea Verou',
      available: true,
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      category: Category.JavaScript,
      author: 'Andrea Chiarelli',
      available: true,
    },
  ];

  return books;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
  // const numberOfBooks: number = books.length;
  const { length: numberOfBooks } = books;
  let title: string;

  for (const book of books) {
    if (book.available) {
      title = book.title;
      break;
    }
  }

  console.log(`Total number of books: ${numberOfBooks}`);
  console.log(`First available book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const books = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
      break;
    }
  }
  return titles;
}

export function logBookTitles(titles: string[]): void {
  titles.forEach((title: string) => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const { title, author } = books[index];
  return [title, author];
}

export function calcTotalPages(): bigint {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
  ];

  const result = data.reduce((acc: bigint, obj: any) => {
    return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, BigInt(0));

  return result;
}

export function createCustomerID(name: string, id: number): string {
  return `${name} - ${id}`;
}

export function createCustomer(
  name: string,
  age?: number,
  city?: string
): void {
  console.log(`Customer name: ${name}`);
  if (age) {
    console.log(`Customer age: ${age}`);
  }
  if (city) {
    console.log(`Customer age: ${city}`);
  }
}

export function getBookByID(id: number): BookOrUndefined {
  const books = getAllBooks();
  return books.find((book) => book.id === id);
}

export function checkoutBooks(
  customer: string,
  ...bookIDs: number[]
): string[] {
  console.log(`Checking books for ${customer}`);
  const titles: string[] = [];

  bookIDs.forEach((id) => {
    const book = getBookByID(id);
    if (book && book.available) {
      titles.push(book.title);
    }
  });
  return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];

export function getTitles(
  ...args: [string | boolean | number, boolean?]
): string[] {
  const books = getAllBooks();

  if (args.length === 1) {
    const [arg] = args;

    if (typeof arg === 'string') {
      return books
        .filter((book) => book.author === arg)
        .map((book) => book.title);
    }
    if (typeof arg === 'boolean') {
      return books
        .filter((book) => book.available === arg)
        .map((book) => book.title);
    }
  } else if (args.length === 2) {
    const [id, available] = args;

    if (typeof id === 'number' && typeof available === 'boolean') {
      return books
        .filter((book) => book.available === available && book.id === id)
        .map((book) => book.title);
    }
  }
}

// export function assetStringValue(value: any): asserts value is string {
//   if (typeof value !== 'string') {
//     throw new Error('value should have been a string');
//   }
// }

// export function bookTitleTransform(title: any): string {
//   assetStringValue(title);
//   return [...title].reverse().join('');
// }

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
  if (typeof book[prop] === 'function') {
    // return book[prop]['name'];
    return (book[prop] as Function).name;
  }
  return book[prop];
}

export function purge<T>(inventory: T[]): T[] {
  return inventory.slice(2);
}

export function getBookByCategory(category: Category, callback: LibMgrCallback): void {
  setTimeout(() => {
    try {
      const titles = getBookTitlesByCategory(category);

      if (titles.length) {
        callback(null, titles);
      } else {
        throw new Error('No books found');
      }
    } catch (e) {
      callback(e, null);
    }
  }, 2000)
}

export function logCategorySearch(error: Error, titles: string[]): void {
  if (error) {
    console.log(`Error message: ${error}`);
  } else {
    console.log('ok!');
  }
}

export function getBookByCategoryPromise(category: Category): Promise<string[]> {
  return new Promise<string[]>((res, rej) => {
    setTimeout(() => {
      const titles = getBookTitlesByCategory(category);
  
      if (titles.length) {
        res(titles);
      } else {
        rej('No books found');
      }
    }, 2000)
  })
}

export async function logSearchResults(category: Category) {
  const result = await getBookByCategoryPromise(category);
  console.log(result);
}
