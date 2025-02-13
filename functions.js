/**
 * This beautiful babygirl renders the form for us using a different function to generate it's fields
 */
function renderForm(){
    const form = document.createElement('form');
    form.id = 'form';
    form.action = '';
    document.body.appendChild(form);

    formField(form, "text", "Költő neve:", "kolto_nev");
    formField(form, "text", "Korszak:", "korszak");
    formField(form, "text", "Szerelme:", "szerelem1");
    formField(form, "checkbox", "Volt másik szerelme?", "masodik");
    formField(form, "text", "Szerelme:", "szerelem2");

    const button = document.createElement('button');
    button.innerHTML = "Hozzáadás";
    form.appendChild(button);
}

/**
 * So this guy right here has 3 inputs, which are very self explanatoiry. 
 * It goes through the array it's given, and puts it into a very fancy and shiny table that we make beforehand.
 * If it is the first member of the array it will be taken as the head, and used as such.
 */
function renderTable(thead, tbody, array){ // creates the renderTableBody function
    for (let i = 0; i < array.length; i++) { // for loop that increments for each by one, goes until i is smaller than the length of array
        if (i == 0) {
            thead.innerHTML = "";
            const trH = document.createElement('tr'); // creates the trH variable and assigns it a tr HTML element
            thead.appendChild(trH); // appends the trH variable to the thead variable
            const th1 = document.createElement('th'); // creates the th1 variable and assigns it a th HTML element
            trH.appendChild(th1); // appends the th1 variable to the trH variable
            th1.innerHTML = array[i].name; // changes the innerHTML of the th1 variable to the stated variable
            const th2 = document.createElement('th'); // creates the th2 variable and assigns it a th HTML element
            trH.appendChild(th2); // appends the th2 variable to the trH variable
            th2.innerHTML = array[i].age; // changes the innerHTML of the th2 variable to the stated variable
            const th3 = document.createElement('th'); // creates the th3 variable and assigns it a th HTML element
            trH.appendChild(th3); // appends the th3 variable to the trH variable
            th3.colSpan = "2"; // assigns the th3 variable the colspan attribute and sets it to 2
            th3.innerHTML = array[i].love1; // changes the innerHTML of the th3 variable to the stated variable
        } else {
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
                td3.colSpan = "2"; // if yes, td3's colspan is now 2
            } else { // otherwise...
                const td4 = document.createElement('td'); // creates the td4 variable and assigns it a td HTML element
                tr.appendChild(td4); // appends the td4 variable to the tr variable
                td4.innerHTML = array[i].love2; // changes the innerHTML of the td4 variable to the i'th variable
            }
        }
    } 
}

/**
 * This is the aforementioned "different function", which creates the fields for the form so I can avoid MASSIVE amounts of code repetition.
 * It's inputs should be self explanatiory.
 */
function formField(form, type, labelText, id){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'field'); 
    form.appendChild(mainDiv);

    const label = document.createElement('label');
    label.for = id;
    label.innerHTML = labelText;
    mainDiv.appendChild(label);
    const br1 = document.createElement('br');
    mainDiv.appendChild(br1);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    mainDiv.appendChild(input);
    const br2 = document.createElement('br');
    mainDiv.appendChild(br2);

    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('class', 'error'); 
    mainDiv.appendChild(errorDiv);
    const br3 = document.createElement('br');
    mainDiv.appendChild(br3);
}

/**
 * This hot stuff right here is used by the event listener to check if we have given all the necessary info
 * for the form to be able to be added to the array.
 * It's inputs should be self explanatiory.
 * It returns a boolean.
 */ 
function formValidator(inputElement, inputErrorMessage){
    let valid = true; // true by default
    if (inputElement.value == ''){ // if the value of the input is empty
        valid = false; // sets it to false
        const parentElement = inputElement.parentElement; // picks out the first thing with the error group in the parent
        const error = parentElement.querySelector('.error'); // picks out the first thing with the error group in the parent
        if (error != undefined) { //if it is not undefined
            error.innerHTML = inputErrorMessage; // change it's innerhtml to this
        }
    }
    return valid; // return the value of valid
}

/**
 * This is my babyboy right here. What he does is check if the checkbox is checked and the 2nd love field has anything in it or the exact opposite.
 * If it doesn't it writes out an error message for the one that's doing something wrong and returns a false.
 * If it does then we return a true.
 * Obvsiously it returns a boolean. 
 */
function formComplexValidator(checkboxElement, love2Element){
    if (checkboxElement.checked && love2Element.value == ""){ // if checkbox is checked and love2 is undefined
        formValidator(love2Element, "A mező megadása kötelező, ha a checkbox be van jelölve!") // reuses formValidator to avoid repetition for same effect
        return false;
    } else if (checkboxElement.checked == false && love2Element.value != "") {
        const checkboxParent = checkboxElement.parentElement // picks out the first thing with the error group in the parent
        const checkboxError = checkboxParent.querySelector('.error') // picks out the first thing with the error group in the parent
        if (checkboxError != undefined) { //if it is not undefined
            checkboxError.innerHTML = "A checkboxot ki kell pipálni a második szerelem megadásához!"; // change it's innerhtml to this
        }
        return false;
    } else 
    return true;
}