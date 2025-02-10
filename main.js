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

const tbody = document.createElement('tbody'); // creates the tbody variable and assigns it a tbody HTML element
table.appendChild(tbody); // appends the tbody variable to the table variable

const trB1 = document.createElement('tr'); // creates the trB1 variable and assigns it a tr HTML element
tbody.appendChild(trB1); // appends the trB1 variable to the tbody variable
const td1 = document.createElement('td'); // creates the td1 variable and assigns it a td HTML element
trB1.appendChild(td1); // appends the td1 variable to the trB1 variable
td1.innerHTML = array[1].name; // changes the innerHTML of the td1 to the stated variable
const td2 = document.createElement('td'); // creates the td2 variable and assigns it a td HTML element
trB1.appendChild(td2); // appends the td2 variable to the trB1 variable
td2.innerHTML = array[1].age; // changes the innerHTML of the td2 variable to the stated variable
const td3 = document.createElement('td'); // creates the td3 variable and assigns it a td HTML element
trB1.appendChild(td3); // appends the td3 variable to the trB1 variable
td3.innerHTML = array[1].love1; // changes the innerHTML of the td3 variable to the stated variable
const td4 = document.createElement('td'); // creates the td4 variable and assigns it a td HTML element
trB1.appendChild(td4); // appends the td4 variable to the trB1 variable
td4.innerHTML = array[1].love2; // changes the innerHTML of the td4 variable to the stated variable

const trB2 = document.createElement('tr'); // creates the trB2 variable and assigns it a tr HTML element
tbody.appendChild(trB2); // appends the trB2 variable to the tbody variable
const td5 = document.createElement('td'); // creates the td5 variable and assigns it a td HTML element
trB2.appendChild(td5); // appends the td5 variable to the trB2 variable
td5.innerHTML = array[2].name;  // changes the innerHTML of the td5 variable to the stated variable
const td6 = document.createElement('td'); // creates the td6 variable and assigns it a td HTML element
trB2.appendChild(td6); // appends the td6 variable to the trB2 variable
td6.innerHTML = array[2].age; // changes the innerHTML of the td6 variable to the stated variable
const td7 = document.createElement('td'); // creates the td7 variable and assigns it a td HTML element
trB2.appendChild(td7); // appends the td7 variable to the trB2 variable
td7.colspan = 2; // assigns the td7 variable the colspan attribute and sets it to 2
td7.innerHTML = array[2].love1; // changes the innerHTML of the td7 variable to the stated variable

const trB3 = document.createElement('tr'); // creates the trB3 variable and assigns it a tr HTML element
tbody.appendChild(trB3); // appends the trB3 variable to the tbody variable
const td8 = document.createElement('td'); // creates the td8 variable and assigns it a td HTML element
trB3.appendChild(td8); // appends the td8 variable to the trB3 variable
td8.innerHTML = array[3].name; // changes the innerHTML of the td8 variable to the stated variable
const td9 = document.createElement('td'); // creates the td9 variable and assigns it a td HTML element
trB3.appendChild(td9); // appends the td9 variable to the trB3 variable
td9.innerHTML = array[3].age; // changes the innerHTML of the td9 variable to the stated variable
const td10 = document.createElement('td'); // creates the td10 variable and assigns it a td HTML element
trB3.appendChild(td10); // appends the td10 variable to the trB3 variable
td10.innerHTML = array[3].love1; // changes the innerHTML of the td10 variable to the stated variable
const td11 = document.createElement('td'); // creates the td11 variable and assigns it a td HTML element
trB3.appendChild(td11); // appends the td11 variable to the trB3 variable
td11.innerHTML = array[3].love2; // changes the innerHTML of the td11 variable to the stated variable

const trB4 = document.createElement('tr'); // creates the trB4 variable and assigns it a tr HTML element
tbody.appendChild(trB4); // appends the trB4 variable to the tbody variable
const td12 = document.createElement('td'); // creates the td12 variable and assigns it a td HTML element
trB4.appendChild(td12); // appends the td12 variable to the trB4 variable
td12.innerHTML = array[4].name; // changes the innerHTML of the td12 variable to the stated variable
const td13 = document.createElement('td'); // creates the td13 variable and assigns it a td HTML element
trB4.appendChild(td13); // appends the td13 variable to the trB4 variable
td13.innerHTML = array[4].age; // changes the innerHTML of the td13 variable to the stated variable
const td14 = document.createElement('td'); // creates the td14 variable and assigns it a td HTML element
trB4.appendChild(td14); // appends the td14 variable to the trB4 variable
td14.innerHTML = array[4].love1; // changes the innerHTML of the td14 variable to the stated variable
const td15 = document.createElement('td'); // creates the td15 variable and assigns it a td HTML element
trB4.appendChild(td15); // appends the td15 variable to the trB4 variable
td15.innerHTML = array[4].love2; // changes the innerHTML of the td15 variable to the stated variable