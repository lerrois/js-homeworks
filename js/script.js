'use strict';

class Book {
  title = null;

  author = null;

  _year = null;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get info() {
    return `'Title: ' ${this.title} ', Author: ' ${this.author} 'Year: ' ${this._year}`;
  }

  getDescription() {
    return `'This is a book titled ' ${this.title} ' by ' ${this.author}`;
  }

  set year(value) {
    if (typeof value !== 'number') {
      console.log(`'This year value is not a number '${value}'`);
    }
    this._year = value;
  }

  get year() {
    return this._year;
  }
}

class PrintedBook extends Book {
  pageCount = null;

  constructor(title, author, year, pageCount) {
    super(title, author, year);
    this.pageCount = pageCount;
  }

  get info() {
    return `'Title: ' ${this.title} ', Author: ' ${this.author} 'Year: ' ${this._year} , Pages: ${this.pageCount}`;
  }

  getDescription() {
    return `${super.getDescription()}' It has ${this.pageCount} pages.`;
  }

  set pageCount(value) {
    if (typeof value !== 'number' || value < 0) {
      console.log('PageCount must be a number more or equal 0');
      return;
    }
    this.pageCount = value;
  }

  get pageCount() {
    return this.pageCount;
  }
}

class Ebook extends Book {
  fileSize = null;

  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  get info() {
    return `'Title: ' ${this.title} ', Author: ' ${this.author} 'Year: ' ${this._year} , FileSize: ${this.fileSize}MB`;
  }

  getDescription() {
    return `${super.getDescription()} File size is ${this.fileSize} MB.`;
  }

  set fileSize(value) {
    if (typeof value !== 'number' || value < 0) {
      console.log('FileSize must be a number more or equal 0');
      return;
    }
    this.fileSize = value;
  }
  get fileSize() {
    return this.fileSize;
  }
}

const bk1 = new Book('title1', 'aut1', 1999);
// const bk2 = new Book('sometitle', 'someauth', 2012);
const pbk = new PrintedBook('sometitle', 'someauth', 2012, 111);
const ebk = new Ebook('sometitle', 'someauth', 2012, 111);

console.log(bk1.info);
bk1.year = 10000;
console.log(bk1.info);
console.log(bk1.year);
console.log(pbk);
console.log(ebk);
