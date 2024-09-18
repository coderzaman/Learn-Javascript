class Book {
    constructor(name, author, isbn) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    constructor() { }

    static addToBookList(book) {
        let bookList = document.querySelector('#book-list');
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#">Delete</a></td>
        `
        bookList.appendChild(tableRow);
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.classList = className;
        div.appendChild(document.createTextNode(message));
        let parenElement = document.querySelector('.alertMessage');
        parenElement.insertBefore(div, parenElement.firstChild);

        setTimeout(() => {
            document.querySelector(`.${className}`).remove();
        }, 1000)
    }

    static clearFiled() {
        document.querySelector('#bookTitle').value = '';
        document.querySelector('#authorName').value = '';
        document.querySelector('#Isbn').value = '';
    }


    static deleteBook(e) {
        if (confirm('Are you sure you want to delete')) {
            if (e.target.hasAttribute('href')) {
                e.target.parentElement.parentElement.remove();
                let deleBookIsbn = e.target.parentElement.previousElementSibling.textContent.trim();
                Storage.removeBookFromLs(deleBookIsbn);
                UI.showAlert("Sucessfully Delted", "sucess");

            }
        }
    }


}

class Storage {
    constructor() { }

    static addBook(book) {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static getBookList() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        books.forEach(element => {
            UI.addToBookList(element);
        });
    }

    static removeBookFromLs(removeBook) {
        let books = JSON.parse(localStorage.getItem('books'));
        books.forEach((item, index) => {
            if (item.isbn == removeBook) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));

    }
}

function addNewBook(e) {
    e.preventDefault();
    let name = document.querySelector('#bookTitle').value;
    let author = document.querySelector('#authorName').value;
    let isbn = document.querySelector('#Isbn').value;
    let ui = new UI();


    let books;
    let ifBookExist;


    if (name === '' || isbn === '' || isbn === '') {
        UI.showAlert("All Filled Required", "error");
    } else {
        falg = true;
        if (localStorage.getItem('books') != null) {
            bSearch = JSON.parse(localStorage.getItem('books'));
            bSearch.forEach(item => {
                if (item.isbn == isbn) {
                    console.log(item.isbn);
                    falg = false;
                }
            })
        }

        if (falg) {
            let book = new Book(name, author, isbn);
            UI.addToBookList(book);
            UI.clearFiled();
            UI.showAlert("Sucessfully Added", "sucess");


            Storage.addBook(book);
        } else {
            UI.showAlert("Book Already Added", "error");
        }

    }

}



let addBtn = document.querySelector('#addBookBtn');
addBtn.addEventListener('click', addNewBook);
document.addEventListener('DOMContentLoaded', Storage.getBookList);

let delteBtn = document.querySelector('#book-list');
delteBtn.addEventListener('click', UI.deleteBook);
