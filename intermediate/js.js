let myLibrary = [];
const addButton = document.querySelector('.addBook');
const library = document.querySelector('.library');
const formArea = document.querySelector('#formArea');

function Book(title, author, pages, read, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

Book.prototype.info = function() {
    let status = "unread";
    if(this.read){status = "read";}
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + status;
}

function addBookToLibrary(){
    let titleValue = '';
    let authorValue = '';
    let pagesValue = '';
    let readValue = false;
    const form = document.createElement('form');
    const inTitle = document.createElement('input');
    inTitle.setAttribute('type', 'text');
    inTitle.classList.add('#addingTitle')
    form.appendChild(inTitle);
    const inAuthor = document.createElement('input');
    inAuthor.setAttribute('type', 'text');
    form.appendChild(inAuthor);
    const inPages = document.createElement('input');
    inPages.setAttribute('type', 'number');
    form.appendChild(inPages);
    const inRead = document.createElement('input');
    inRead.setAttribute('type', 'checkbox');
    form.appendChild(inRead);
    const confirmBtn = document.createElement('input');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.setAttribute('value', 'Add Book');
    confirmBtn.classList.add('confirmAdd');
    confirmBtn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('confirmAdd')){
        titleValue = inTitle.value;
        authorValue = inAuthor.value;
        pagesValue = inPages.value;
        readValue = inRead.checked;
        constructBook(titleValue, authorValue, pagesValue, readValue, myLibrary.length);
        createCard();
        while(formArea.firstChild){formArea.firstChild.remove();}
        }
    });
    form.appendChild(confirmBtn);
    formArea.appendChild(form);
}

function constructBook(titleValue, authorValue, pagesValue, readValue, indexValue) {
    myLibrary.push(new Book(titleValue, authorValue, pagesValue, readValue, indexValue));
}

function createCard() {
    while(library.firstChild){library.firstChild.remove();}
    let arrIndex = 0;
    for(const book of myLibrary){
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.textContent = 'Delete';
        const bookReadStatus = document.createElement('input');
        bookReadStatus.setAttribute('type', 'checkbox');
        bookReadStatus.classList.add('toggle')
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + " pages";
        bookReadStatus.checked = book.read;
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(trashButton);
        bookCard.appendChild(bookReadStatus);
        library.appendChild(bookCard);
        book.index = arrIndex;
        bookCard.addEventListener('click', deleteBook);
        bookCard.addEventListener('click', toggleRead);
        arrIndex++;
    }
}

function deleteBook(event) {
    if(event.target.classList.contains('trash')){
        let trashBook = event.target.parentNode.firstChild.textContent;
        let trashIndex;
        for(const book of myLibrary){
            if(book.title == trashBook){
                trashIndex = book.index;
            }
        }
        myLibrary.splice(trashIndex, 1);
        createCard();
    }
}

function toggleRead(event){
    if(event.target.classList.contains('toggle')){
        let selectBook = event.target.parentNode.firstChild.textContent;
        let bookIndex;
        for(const book of myLibrary){
            if(book.title == selectBook){
                book.read = !book.read;
            }
        }
        createCard();
    }
}

addButton.addEventListener('click', ()=>{
    if(!formArea.firstChild){addBookToLibrary();}
});

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, 0);
const book2 = new Book("Index 1", "J.R.R. Tolkien", 295, false, 1);
const book3 = new Book("Index 2", "J.R.R. Tolkien", 295, true, 2);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
createCard();

/**************************************************
TO DO
-Add Required to form fields
**************************************************/