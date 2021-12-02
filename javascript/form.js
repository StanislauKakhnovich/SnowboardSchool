function showForm_1() {
        
        let formBlock = document.getElementById('form_1');
        formBlock.style.display = 'block';     
}
function showForm_2() {
        
    let formBlock = document.getElementById('form_2');
    formBlock.style.display = 'block';     
}
function showForm_3() {
        
    let formBlock = document.getElementById('form_3');
    formBlock.style.display = 'block';     
}
function closeForm1() {
        
    let formBlock_1 = document.getElementById('form_1');
    formBlock_1.style.display = 'none';
}
function closeForm2() {

    let formBlock_2 = document.getElementById('form_2');
    formBlock_2.style.display = 'none';
}
function closeForm3() {
        
    let formBlock_3 = document.getElementById('form_3');
    formBlock_3.style.display = 'none';
   
}

function closeForm_1() {
    if (validateInfoForm_1()==true) {
        let formBlock = document.getElementById('form_1');
        formBlock.style.display = 'none';
    }  
}
function closeForm_2() {
    if (validateInfoForm_2()==true) {
        let formBlock = document.getElementById('form_2');
        formBlock.style.display = 'none';

    }  
}
function closeForm_3() {
    if (validateInfoForm_3()==true) {
        let formBlock = document.getElementById('form_3');
        formBlock.style.display = 'none';

    }  
}


let formElement_1 = document.getElementById('form_1');
formElement_1.onsubmit = validateInfoForm_1;




function validateInfoForm_1() {

    let nameElement = document.getElementById('NAME_1');
    let surnameElement = document.getElementById('SURNAME_1');

    let ageElement = document.getElementById('AGE_1');

    let nameValue = nameElement.value;
    let surnameValue = surnameElement.value;

    let ageValue = parseInt(ageElement.value.trim());


    if ( nameValue.length>30 ) {
        alert('Please enter a name no longer than 30 characters!');
        nameElement.focus();
        return false;
    }
    if ( surnameValue.length>30 ) {
        alert('Please enter a surname no longer than 30 characters!');
        nameElement.focus();
        return false;
    }

    if ( isNaN(ageValue) ) {
        alert('Please enter the correct number in the age field!');
        ageElement.focus();
        return false;
    }

    if ( ageValue<16 ) {
        alert('Must be at least 16 years old!');
        ageElement.focus();
        return false;
    }

    return true;

}

let formElement_2 = document.getElementById('form_2');
formElement_2.onsubmit = validateInfoForm_2;


function validateInfoForm_2() {

    let nameElement = document.getElementById('NAME_2');
    let surnameElement = document.getElementById('SURNAME_2');

    let ageElement = document.getElementById('AGE_2');

    let nameValue = nameElement.value;
    let surnameValue = surnameElement.value;

    let ageValue = parseInt(ageElement.value.trim());


    if ( nameValue.length>30 ) {
        alert('Please enter a name no longer than 30 characters!');
        nameElement.focus();
        return false;
    }
    if ( surnameValue.length>30 ) {
        alert('Please enter a surname no longer than 30 characters!');
        nameElement.focus();
        return false;
    }

    if ( isNaN(ageValue) ) {
        alert('Please enter the correct number in the age field!');
        ageElement.focus();
        return false;
    }

    if ( ageValue<16 ) {
        alert('Must be at least 16 years old!');
        ageElement.focus();
        return false;
    }

    return true;

}
 
let formElement_3 = document.getElementById('form_3');
formElement_3.onsubmit = validateInfoForm_3;


function validateInfoForm_3() {

    let nameElement = document.getElementById('NAME_3');
    let surnameElement = document.getElementById('SURNAME_3');

    let ageElement = document.getElementById('AGE_3');

    let nameValue = nameElement.value;
    let surnameValue = surnameElement.value;

    let ageValue = parseInt(ageElement.value.trim());


    if ( nameValue.length>30 ) {
        alert('Please enter a name no longer than 30 characters!');
        nameElement.focus();
        return false;
    }
    if ( surnameValue.length>30 ) {
        alert('Please enter a surname no longer than 30 characters!');
        nameElement.focus();
        return false;
    }

    if ( isNaN(ageValue) ) {
        alert('Please enter the correct number in the age field!');
        ageElement.focus();
        return false;
    }

    if ( ageValue<16 ) {
        alert('Must be at least 16 years old!');
        ageElement.focus();
        return false;
    }

    return true;

}