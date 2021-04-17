let myLibrary = [
    {title: "Book1a", author: "Author1", pages: "60", read: "yes"},
    {title: "Book2b", author: "Author2", pages: "61", read: "no"},
    {title: "Book3c", author: "Author3", pages: "62", read: "no"},
    {title: "Book4d", author: "Author4", pages: "63", read: "yes"},
    {title: "Book5e", author: "Author5", pages: "64", read: "yes"},
    {title: "Book6f", author: "Author6", pages: "65", read: "yes"},
    {title: "Book7g", author: "Author7", pages: "66", read: "yes"},
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return (`${title}` + ' by' + ' ' +`${author}`+ ', ' + `${pages}` + ' pages long, ' + `${read}`);
    }
}

function addBookToLibrary(){
    var bookPrompt = prompt("Please enter a book name", "Harry Potter and the Sorceror's Stone");
    while(bookPrompt == null){
        alert("You have entered a null value. Please try again");
        bookPrompt = prompt("Please enter a book name", "Harry Potter and the Sorceror's Stone");
    }
    var authorPrompt = prompt("Please enter the author of the book you entered previously", "J.K. Rowling");
    while (authorPrompt == null){    
        alert("You have entered a null value. Please try again");
        authorPrompt = prompt("Please enter the author of the book you entered previously", "J.K. Rowling");  
    }
    var pagesPrompt = prompt("Please enter the number of pages of that book", "223");        
    while (pagesPrompt == null){
        alert("You have entered a null value. Please try again");
        pagesPrompt = prompt("Please enter the number of pages of that book", "223");
    }
    var readPrompt = prompt("Have you read this book already? Enter Yes or No.", "Yes");
    while (readPrompt == null){
        alert("You have entered a null value. Please try again");
        readPrompt = prompt("Have you read this book already? Enter Yes or No.", "Yes");
    } 
    var bookNew = new Book();
    bookNew.title = bookPrompt;
    bookNew.author = authorPrompt;
    bookNew.pages = pagesPrompt;
    bookNew.read = readPrompt;
    
    myLibrary.push(bookNew);
    console.table(myLibrary);
    DisplayLibrary();
}
    




var i;

function DisplayLibrary(){
    for(i=0; i<10; i++){
        var numString = i.toString();
        console.log("row" + numString +" iteration of the for loop");
        if(document.getElementById("book" + numString) != null){
            document.getElementById("book" + numString).innerHTML = myLibrary[i].title;
            document.getElementById("author" +numString).innerHTML = myLibrary[i].author;
            document.getElementById("pages" + numString).innerHTML = myLibrary[i].pages;
            document.getElementById("read" + numString).innerHTML = myLibrary[i].read;
        }
        else {
            console.log("entered else loop because row" + numString +" is null in HTML DOM, meaning there is no tr element");
            const newTableRow = document.createElement("tr");
            newTableRow.id = "row" + i;
            console.log(newTableRow);

            const newTableDataBook = document.createElement("td");
            newTableDataBook.id = "book" + i;
            console.log(newTableDataBook);

            const newTableDataAuthor = document.createElement("td");
            newTableDataAuthor.id = "author" + i;
            console.log(newTableDataAuthor);

            const newTableDataPages = document.createElement("td");
            newTableDataPages.id = "pages" + i;
            console.log(newTableDataPages);

            const newTableDataRead = document.createElement("td");
            newTableDataRead.id = "read" + i;
            console.log(newTableDataRead);

            const currentDiv = document.getElementById("row" + (numString - 1));
            currentDiv.insertAdjacentElement('afterend', newTableRow);
            const newCurrentDiv = document.getElementById("row" + numString);
            newCurrentDiv.appendChild(newTableDataBook);
        }
        document.getElementById("book" + numString).innerHTML = myLibrary[i].title;
        document.getElementById("author" +numString).innerHTML = myLibrary[i].author;
        document.getElementById("pages" + numString).innerHTML = myLibrary[i].pages;
        document.getElementById("read" + numString).innerHTML = myLibrary[i].read;
        var author = document.getElementById("author" + (i+1));
        var pages = document.getElementById("pages" + (i+1));
        var read = document.getElementById("read" + (i+1));
    }
}



DisplayLibrary();