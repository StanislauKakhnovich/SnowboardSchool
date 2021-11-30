function showForm() {
        
        let formBlock = document.getElementById('form_1');
        formBlock.style.display = 'block';
        
}

function closeForm() {
        
    let formBlock = document.getElementById('form_1');
    formBlock.style.display = 'none';
    
}

function closeForm_1() {
    if (validateInfoForm()==true) {
        let formBlock = document.getElementById('form_1');
        formBlock.style.display = 'none';
    }  
}
let formElement = document.forms.INFO;
formElement.onsubmit = validateInfoForm;



function validateInfoForm() {

    let nameElement = formElement.elements.NAME;
    let surnameElement = formElement.elements.SURNAME;

    let ageElement = formElement.elements.AGE;

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


 