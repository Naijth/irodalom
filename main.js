const array = [ //creates an array named array
    { 
        name: "Szerző neve", // the array's first name variable's value
        age: "Korszak", // the array's first age variable's value
        love1: "Szerelmek" // the array's first love1 variable's value
    },
    {
        name: "Balassi Bálint", // the array's second name variable's value
        age: "reformáció", // the array's second age variable's value
        love1: "Losonczy Anna", // the array's second love1 variable's value
        love2: "Dobó Krisztina" // the array's second love2 variable's value
    },
    {
        name: "Csokonai Vitéz Mihály", // the array's third name variable's value
        age: "felvilágosodás", // the array's third age variable's value
        love1: "Vajda Juliána" // the array's third love1 variable's value
    },
    {
        name: "Petőfi Sándor", // the array's fourth name variable's value
        age: "magyar romantika", // the array's fourth age variable's value
        love1: "Mednyánszky Berta", // the array's fourth love1 variable's value
        love2: "Szendrey Júlia" // the array's fourth love2 variable's value
    },
    {
        name: "Ady Endre", // the array's fifth name variable's value
        age: "20. század", // the array's fifth age variable's value
        love1: "Léda", // the array's fifth love1 variable's value
        love2: "Csinszka" // the array's fifth love2 variable's value
    }
]

const table = document.createElement('table'); // creates the table variable and assigns it a table HTML element
document.body.appendChild(table); // appends the table variable to the document's body

function renderTableHead(){
    const thead = document.createElement('thead'); // creates the thead variable and assigns it a thead HTML element
    table.appendChild(thead); // appends the thead variable to the table variable

    const trH = document.createElement('tr'); // creates the trH variable and assigns it a tr HTML element
    thead.appendChild(trH); // appends the trH variable to the thead variable
    const th1 = document.createElement('th'); // creates the th1 variable and assigns it a th HTML element
    trH.appendChild(th1); // appends the th1 variable to the trH variable
    th1.innerHTML = array[0].name; // changes the innerHTML of the th1 variable to the stated variable
    const th2 = document.createElement('th'); // creates the th2 variable and assigns it a th HTML element
    trH.appendChild(th2); // appends the th2 variable to the trH variable
    th2.innerHTML = array[0].age; // changes the innerHTML of the th2 variable to the stated variable
    const th3 = document.createElement('th'); // creates the th3 variable and assigns it a th HTML element
    trH.appendChild(th3); // appends the th3 variable to the trH variable
    th3.colspan = 2; // assigns the th3 variable the colspan attribute and sets it to 2
    th3.innerHTML = array[0].love1; // changes the innerHTML of the th3 variable to the stated variable
}

const tbody = document.createElement('tbody'); // creates the tbody variable and assigns it a tbody HTML element
table.appendChild(tbody); // appends the tbody variable to the table variable

function renderTableBody(){ // creates the renderTableBody function
    for (let i = 1; i < array.length; i++) { // for loop that increments for each by one, goes until i is smaller than the length of array
        const tr = document.createElement('tr'); // creates the tr variable and assigns it a tr HTML element
        tbody.appendChild(tr); // appends the tr variable to the tbody variable
        const td1 = document.createElement('td'); // creates the td1 variable and assigns it a td HTML element
        tr.appendChild(td1); // appends the td1 variable to the tr variable
        td1.innerHTML = array[i].name; // changes the innerHTML of the td1 to the i'th variable
        const td2 = document.createElement('td'); // creates the td2 variable and assigns it a td HTML element
        tr.appendChild(td2); // appends the td2 variable to the tr variable
        td2.innerHTML = array[i].age; // changes the innerHTML of the td2 variable to the i'th variable
        const td3 = document.createElement('td'); // creates the td3 variable and assigns it a td HTML element
        tr.appendChild(td3); // appends the td3 variable to the tr variable
        td3.innerHTML = array[i].love1; // changes the innerHTML of the td3 variable to the i'th variable
        if (array[i].love2 == undefined) { // checks if love2 is undefined
            td3.colspan = 2; // if yes, td3's colspan is now 2
        } else { // otherwise...
            const td4 = document.createElement('td'); // creates the td4 variable and assigns it a td HTML element
            tr.appendChild(td4); // appends the td4 variable to the tr variable
            td4.innerHTML = array[i].love2; // changes the innerHTML of the td4 variable to the i'th variable
        }
    } 
}

renderTableHead(); // renders the table head
renderTableBody(); //renders the table body

const form = document.getElementById('form') // creating a variable and putting the htmlElements

form.addEventListener('submit', function(e){ // adds an eventListener to the form
    e.preventDefault(); // prevents it from defaulting

    let valid = true; //true by default
    const nameElement = document.getElementById('kolto_nev'); // sets the variable to what is at the id
    const ageElement = document.getElementById('korszak'); // sets the variable to what is at the id
    const love1Element = document.getElementById('szerelem1'); // sets the variable to what is at the id
    const love2Element = document.getElementById('szerelem2'); // sets the variable to what is at the id

    const name = nameElement.value;
    const age = ageElement.value;
    const love1 = love1Element.value;
    const love2 = love2Element.value == "" ? undefined : love2Element.value;

    const thisForm = e.currentTarget; // this contains the current form 
    const error = thisForm.querySelectorAll('.error'); // this is everything with the error class
    for(const errorElement of error){ // this goes through everything with the error class...
        errorElement.innerHTML = ""; // and deletes it's contents
    }

    if (name == ''){
        valid = false;
        const parentElement = nameElement.parentElement;
        const error = parentElement.querySelector('.error');
        if (error != undefined) {
            error.innerHTML = "A név megadása kötelező";
        }
    }

    if (age == ''){
        valid = false;
        const parentElement = ageElement.parentElement;
        const error = parentElement.querySelector('.error');
        if (error != undefined) {
            error.innerHTML = "A korszak megadása kötelező";
        }
    }

    if (love1 == ''){
        valid = false;
        const parentElement = love1Element.parentElement;
        const error = parentElement.querySelector('.error');
        if (error != undefined) {
            error.innerHTML = "Egy szerelem megadása kötelező";
        }
    }

    if (valid == true){
        const newElement = { // creates a new thing we will put in the array
            name: name, // name attribute becomes the name variable's content
            age: age, // age attribute becomes the age variable's content
            love1: love1, // love1 attribute becomes the love1 variable's content
            love2: love2 // love2 attribute becomes the love2 variable's content
        }
        array.push(newElement); // pushes the newElement to the array
        tbody.innerHTML = ""; // cleans tbody from it's contents
        renderTableBody(); // reruns the renderer with the new fancy and shiny content
        form.reset(); // returns the form to it's riginal status
    }
})