const th1Content = "Szerző neve"; // creates the th1Content variable and gives it the string written there as a value
const th2Content = "Korszak"; // creates the th2Content variable and gives it the string written there as a value
const th3Content = "Szerelmek"; // creates the th3Content variable and gives it the string written there as a value

const td1Content = "Balassi Bálint"; // creates the td1Content variable and gives it the string written there as a value
const td2Content = "reformáció"; // creates the td2Content variable and gives it the string written there as a value
const td3Content = "Losonczy Anna"; // creates the td3Content variable and gives it the string written there as a value
const td4Content = "Dobó Krisztina"; // creates the td4Content variable and gives it the string written there as a value

const td5Content = "Csokonai Vitéz Mihály"; // creates the td5Content variable and gives it the string written there as a value
const td6Content = "felvilágosodás"; // creates the td6Content variable and gives it the string written there as a value
const td7Content = "Vajda Juliána"; // creates the td7Content variable and gives it the string written there as a value

const td8Content = "Petőfi Sándor"; // creates the td8Content variable and gives it the string written there as a value
const td9Content = "magyar romantika"; // creates the td9Content variable and gives it the string written there as a value
const td10Content = "Mednyánszky Berta"; // creates the td10Content variable and gives it the string written there as a value
const td11Content = "Szendrey Júlia"; // creates the td11Content variable and gives it the string written there as a value

const td12Content = "Ady Endre"; // creates the td12Content variable and gives it the string written there as a value
const td13Content = "20. század"; // creates the td13Content variable and gives it the string written there as a value
const td14Content = "Léda"; // creates the td14Content variable and gives it the string written there as a value
const td15Content = "Csinszka"; // creates the td15Content variable and gives it the string written there as a value

const table = document.createElement('table'); // creates the table variable and assigns it a table HTML element
document.body.appendChild(table); // appends the table variable to the document's body

const thead = document.createElement('thead'); // creates the thead variable and assigns it a thead HTML element
table.appendChild(thead); // appends the thead variable to the table variable

const trH = document.createElement('tr'); // creates the trH variable and assigns it a tr HTML element
thead.appendChild(trH); // appends the trH variable to the thead variable
const th1 = document.createElement('th'); // creates the th1 variable and assigns it a th HTML element
trH.appendChild(th1); // appends the th1 variable to the trH variable
th1.innerHTML = th1Content; // changes the innerHTML of the th1 variable and sets it to the value of th1Content
const th2 = document.createElement('th'); // creates the th2 variable and assigns it a th HTML element
trH.appendChild(th2); // appends the th2 variable to the trH variable
th2.innerHTML = th2Content; // changes the innerHTML of the th2 variable and sets it to the value of th2Content
const th3 = document.createElement('th'); // creates the th3 variable and assigns it a th HTML element
trH.appendChild(th3); // appends the th3 variable to the trH variable
th3.colspan = 2; // assigns the th3 variable the colspan attribute and sets it to 2
th3.innerHTML = th3Content; // changes the innerHTML of the th3 variable and sets it to the value of th3Content

const tbody = document.createElement('tbody'); // creates the tbody variable and assigns it a tbody HTML element
table.appendChild(tbody); // appends the tbody variable to the table variable

const trB1 = document.createElement('tr'); // creates the trB1 variable and assigns it a tr HTML element
tbody.appendChild(trB1); // appends the trB1 variable to the tbody variable
const td1 = document.createElement('td'); // creates the td1 variable and assigns it a td HTML element
trB1.appendChild(td1); // appends the td1 variable to the trB1 variable
td1.innerHTML = td1Content; // changes the innerHTML of the td1 variable and sets it to the value of td1Content
const td2 = document.createElement('td'); // creates the td2 variable and assigns it a td HTML element
trB1.appendChild(td2); // appends the td2 variable to the trB1 variable
td2.innerHTML = td2Content; // changes the innerHTML of the td2 variable and sets it to the value of td2Content
const td3 = document.createElement('td'); // creates the td3 variable and assigns it a td HTML element
trB1.appendChild(td3); // appends the td3 variable to the trB1 variable
td3.innerHTML = td3Content; // changes the innerHTML of the td3 variable and sets it to the value of td3Content
const td4 = document.createElement('td'); // creates the td4 variable and assigns it a td HTML element
trB1.appendChild(td4); // appends the td4 variable to the trB1 variable
td4.innerHTML = td4Content; // changes the innerHTML of the td4 variable and sets it to the value of td4Content

const trB2 = document.createElement('tr'); // creates the trB2 variable and assigns it a tr HTML element
tbody.appendChild(trB2); // appends the trB2 variable to the tbody variable
const td5 = document.createElement('td'); // creates the td5 variable and assigns it a td HTML element
trB2.appendChild(td5); // appends the td5 variable to the trB2 variable
td5.innerHTML = td5Content; // changes the innerHTML of the td5 variable and sets it to the value of td5Content
const td6 = document.createElement('td'); // creates the td6 variable and assigns it a td HTML element
trB2.appendChild(td6); // appends the td6 variable to the trB2 variable
td6.innerHTML = td6Content; // changes the innerHTML of the td6 variable and sets it to the value of td6Content
const td7 = document.createElement('td'); // creates the td7 variable and assigns it a td HTML element
trB2.appendChild(td7); // appends the td7 variable to the trB2 variable
td7.colspan = 2; // assigns the td7 variable the colspan attribute and sets it to 2
td7.innerHTML = td7Content; // changes the innerHTML of the td7 variable and sets it to the value of td7Content

const trB3 = document.createElement('tr'); // creates the trB3 variable and assigns it a tr HTML element
tbody.appendChild(trB3); // appends the trB3 variable to the tbody variable
const td8 = document.createElement('td'); // creates the td8 variable and assigns it a td HTML element
trB3.appendChild(td8); // appends the td8 variable to the trB3 variable
td8.innerHTML = td8Content; // changes the innerHTML of the td8 variable and sets it to the value of td8Content
const td9 = document.createElement('td'); // creates the td9 variable and assigns it a td HTML element
trB3.appendChild(td9); // appends the td9 variable to the trB3 variable
td9.innerHTML = td9Content; // changes the innerHTML of the td9 variable and sets it to the value of td9Content
const td10 = document.createElement('td'); // creates the td10 variable and assigns it a td HTML element
trB3.appendChild(td10); // appends the td10 variable to the trB3 variable
td10.innerHTML = td10Content; // changes the innerHTML of the td10 variable and sets it to the value of td10Content
const td11 = document.createElement('td'); // creates the td11 variable and assigns it a td HTML element
trB3.appendChild(td11); // appends the td11 variable to the trB3 variable
td11.innerHTML = td11Content; // changes the innerHTML of the td11 variable and sets it to the value of td11Content

const trB4 = document.createElement('tr'); // creates the trB4 variable and assigns it a tr HTML element
tbody.appendChild(trB4); // appends the trB4 variable to the tbody variable
const td12 = document.createElement('td'); // creates the td12 variable and assigns it a td HTML element
trB4.appendChild(td12); // appends the td12 variable to the trB4 variable
td12.innerHTML = td12Content; // changes the innerHTML of the td12 variable and sets it to the value of td12Content
const td13 = document.createElement('td'); // creates the td13 variable and assigns it a td HTML element
trB4.appendChild(td13); // appends the td13 variable to the trB4 variable
td13.innerHTML = td13Content; // changes the innerHTML of the td13 variable and sets it to the value of td13Content
const td14 = document.createElement('td'); // creates the td14 variable and assigns it a td HTML element
trB4.appendChild(td14); // appends the td14 variable to the trB4 variable
td14.innerHTML = td14Content; // changes the innerHTML of the td14 variable and sets it to the value of td14Content
const td15 = document.createElement('td'); // creates the td15 variable and assigns it a td HTML element
trB4.appendChild(td15); // appends the td15 variable to the trB4 variable
td15.innerHTML = td15Content; // changes the innerHTML of the td15 variable and sets it to the value of td15Content