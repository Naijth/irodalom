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
const thead = document.createElement('thead'); // creates the thead variable and assigns it a thead HTML element
table.appendChild(thead); // appends the thead variable to the table variable
const tbody = document.createElement('tbody'); // creates the tbody variable and assigns it a tbody HTML element
table.appendChild(tbody); // appends the tbody variable to the table variable

renderTable(thead, tbody, array); //renders the table body
renderForm();

const form = document.getElementById('form') // creating a variable and putting the htmlElements

/**
 * This is the add event listener of the form, which upon the button press adds 3 or 4 variables to the array,
 * depending on wheter a checkbox is checked and text is given or not
 */
form.addEventListener('submit', function(e){ // adds an eventListener to the form
    e.preventDefault(); // prevents it from defaulting

    let valid = true; //true by default
    const nameElement = document.getElementById('kolto_nev'); // sets the variable to what is at the id
    const ageElement = document.getElementById('korszak'); // sets the variable to what is at the id
    const love1Element = document.getElementById('szerelem1'); // sets the variable to what is at the id
    const love2Element = document.getElementById('szerelem2'); // sets the variable to what is at the id
    const checkboxElement = document.getElementById('masodik'); // sets the variable to what is at the id

    const name = nameElement.value; // sets the variable to what the value of this element is
    const age = ageElement.value; // sets the variable to what the value of this element is
    const love1 = love1Element.value; // sets the variable to what the value of this element is
    const love2 = love2Element.value == "" ? undefined : love2Element.value; // sets the variable to what the value of this element is, unless it is an empty string in which case it becomes undefined

    const thisForm = e.currentTarget; // this contains the current form 
    const error = thisForm.querySelectorAll('.error'); // this is everything with the error class
    for(const errorElement of error){ // this goes through everything with the error class...
        errorElement.innerHTML = ""; // and deletes it's contents
    }

    const valid1 = formValidator(nameElement, "A mező megadása kötelező!");
    const valid2 = formValidator(ageElement, "A mező megadása kötelező!");
    const valid3 = formValidator(love1Element, "A mező megadása kötelező!");
    const valid4 = formComplexValidator(checkboxElement, love2Element);
    if (!valid1 || !valid2 || !valid3 || !valid4)
        valid = false;

    let has2Loves = false; // false by default

    if(checkboxElement.checked && love2 != undefined) // if checkbox is checked and love2 isn't undefined
        has2Loves = true;

    if (valid == true && has2Loves == false){
        const newElement = { // creates a new thing we will put in the array
        name: name, // name attribute becomes the name variable's content
        age: age, // age attribute becomes the age variable's content
        love1: love1 // love1 attribute becomes the love1 variable's content
        } 
        array.push(newElement); // pushes the newElement to the array
        tbody.innerHTML = ""; // cleans tbody from it's contents
        renderTable(thead, tbody, array); // reruns the renderer with the new fancy and shiny content
        form.reset(); // returns the form to it's riginal status
    } else if (valid == true && has2Loves == true){
        const newElement = { // creates a new thing we will put in the array
            name: name, // name attribute becomes the name variable's content
            age: age, // age attribute becomes the age variable's content
            love1: love1, // love1 attribute becomes the love1 variable's content
            love2: love2 // love2 attribute becomes the love2 variable's content
        }
        array.push(newElement); // pushes the newElement to the array
        tbody.innerHTML = ""; // cleans tbody from it's contents
        renderTable(thead, tbody, array); // reruns the renderer with the new fancy and shiny content
        form.reset(); // returns the form to it's riginal status
    }
});