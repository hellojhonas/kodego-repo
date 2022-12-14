//myArr array
const myArr = ['s',7,true,'test'];

myArr[3] = 10;

console.log(myArr[3]);

//books array
let myArr1 = [];
let booksArr = new Array ("Book of Five rings", "The Art of War", "Book of the Roman Army", "Leadership", "Men are from Mars" , "Tomorrow is Too Late");

booksArr.push("48 Laws of Power");
console.log(booksArr);
booksArr[booksArr.length] = "Love Letters of Great Men";
console.log("The book array <bookArr> contains " + booksArr.length + " books");

let borrowedBook = booksArr.pop();
console.log("Luiz borrowd the book titled " + borrowedBook);
console.log("The books collection now contains " + booksArr.length + " books");

booksArr.unshift("The Prince")
console.log("Manuel donated a book named The Prince");
console.log("Our collection now contains " + booksArr.length + " books: ", booksArr.join(" | "));

console.log("Albert wanted to borrow the first book in the collection");
borrowedBook = booksArr.shift();
console.log("The first book in our collection that Albert borrowed is " + borrowedBook);
console.log("--------------------------------");
console.log("Our updated book colleciton is as follows: ", booksArr.join("|"));

//map array concept
let booksArrayToUpper = booksArr.map(function (f) {
    return f.toUpperCase();
});
console.log(booksArrayToUpper);
console.log(booksArr);


//check for case sensitivity
//check if not occurence is found
let myArr3 = [1, 2, 3, 'a', 'e', 10];
console.log(myArr3.includes(1));

//function of search book
let searchBook = function search() {
    let bookToSearch = document.querySelector('#search-book').value;
    let searchResultElement = document.querySelector('#search-result');

    if (booksArrayToUpper.includes(bookToSearch.toUpperCase())) {
        searchResultElement.textContent = 'Book is in the collection';
    }
    else {
        searchResultElement.textContent = 'Book is currently unavailable';
    }
    console.log(booksArrayToUpper.includes(bookToSearch.toUpperCase()));
}

//I initiated an empty array
let filteredBooksByTitleLength = new Array();

filteredBooksByTitleLength =booksArr.filter( function(bookTitle) {
    return bookTitle.length <= 14;
});

console.log(filteredBooksByTitleLength);

//another example
let anotherBookArr = new Array();
anotherBookArr = booksArr.slice(2, 4);
console.log("Cropped Array", anotherBookArr);
console.log(booksArr);

console.log("The librarian figured out the two books were damaged and has to be replaced");
booksArr.splice(0, 2, "The Road Less Traveled");
console.log("The new book collection: ", booksArr);

//code along 11-09-2022
let myStr ="The quick brown for jumps over the quick dog";
let result = myStr.indexOf("quick");
console.log(result);

result = myStr.lastIndexOf("quick");
console.log(`The last index of quick is at position ${result}`);

let str = 'you';
const res = str.split("");
console.log(res);

let myStr1 = "Hello World";
console.log(myStr1.split("__"));

let found = myStr1.includes("World");
console.log(found);

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
console.log(lorem.slice(7,10));



//concat an array concept
let myArr2 = [1, 2];
let values = [5, 6, 7];

let newArr = myArr2.concat(values);
console.log(newArr);


let booksStr = '';
booksArrayToUpper.forEach(function (f) {
    booksStr = booksStr + "<li>" + f + "</li>";
});
document.getElementById("books").innerHTML = "<ul>" + booksStr +"</ul>";


//number array for forEach method
myArr1 = [2, 5, 7, 9];
myArr1.forEach((e) => {
    console.log(e * 2);
    myArr1[myArr1.indexOf(e)] = e * 2; // this is not recommended
})
console.log(myArr1);


//function with array
function foo (){
    console.log("foo was called");
}

const array = [];

const nums = [1,2,3,4];

const strs = ["John","Nonito","Manny","Ali"];

const mixins = [1, "Gelica", foo];
mixins [2]();
