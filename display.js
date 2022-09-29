

const form = document.getElementById('form');
const fullnameVar = document.getElementById('fname');
const genderVar = document.getElementById('gender');
const dateOfBirthVar = document.getElementById('DoB');
const emailVar = document.getElementById('email');
const statementVar = document.getElementById('stmt');
const firstInput = document.getElementById('first'); const secInput = document.getElementById('sec'); const thirdInput = document.getElementById('third'); const fourthInput = document.getElementById('fourth'); const fifthInput = document.getElementById('fifth'); const sixthInput = document.getElementById('sixth'); const sevInput = document.getElementById('sev'); const eighthInput = document.getElementById('eighth'); const ninthInput = document.getElementById('ninth');
const referenceName1 = document.getElementById('Ref1'); const referenceContact1 = document.getElementById('Ref2'); const referenceEmail1 = document.getElementById('Ref3'); const referenceName2 = document.getElementById('Ref4'); const referenceContact2 = document.getElementById('Ref5'); const referenceEmail2 = document.getElementById('Ref6');
const hobbiesVar = document.getElementById('hobbs');




form.addEventListener('submit', function(){
   
    localStorage.clear();
    

    // storing the data values in variables
    const {fullNameValue, genderValue, dateOfBirthValue, emailValue, statementValue, firstInputValue, secInputValue, thirdInputValue, fourthInputValue, fifthInputValue, sixthInputValue, sevInputValue, eighthInputValue, ninthInputValue, name1Value, contact1Value, email1Value, name2Value, contact2Value, email2Value, hobbiesValue } = storeValues();
  
    setItemFunction(); 
    getItem();  

    function setItemFunction() {
        window.localStorage.setItem('Full name', fullNameValue);
        window.localStorage.setItem('Gender', genderValue);
        window.localStorage.setItem('Date of Birth', dateOfBirthValue);
        window.localStorage.setItem('Email Address', emailValue);
        window.localStorage.setItem('statement', statementValue);
        window.localStorage.setItem('educ1', firstInputValue);
        window.localStorage.setItem('educ2', secInputValue);
        window.localStorage.setItem('educ3', thirdInputValue);
        window.localStorage.setItem('educ4', fourthInputValue);
        window.localStorage.setItem('educ5', fifthInputValue);
        window.localStorage.setItem('educ6', sixthInputValue);
        window.localStorage.setItem('educ7', sevInputValue);
        window.localStorage.setItem('educ8', eighthInputValue);
        window.localStorage.setItem('educ9', ninthInputValue);
        window.localStorage.setItem('ref1', name1Value);
        window.localStorage.setItem('ref2', contact1Value);
        window.localStorage.setItem('ref3', email1Value);
        window.localStorage.setItem('ref4', name2Value);
        window.localStorage.setItem('ref5', contact2Value);
        window.localStorage.setItem('ref6', email2Value);
        window.localStorage.setItem('Hobbies', hobbiesValue);
    }
    
    function storeValues() {
        const fullNameValue = fullnameVar.value; const genderValue = genderVar.value; const dateOfBirthValue = dateOfBirthVar.value; const emailValue = emailVar.value; const statementValue = statementVar.value;
        const firstInputValue = firstInput.value; const secInputValue = secInput.value; const thirdInputValue = thirdInput.value; const fourthInputValue = fourthInput.value; const fifthInputValue = fifthInput.value; const sixthInputValue = sixthInput.value; const sevInputValue = sevInput.value; const eighthInputValue = eighthInput.value; const ninthInputValue = ninthInput.value;
        const name1Value = referenceName1.value; const contact1Value = referenceContact1.value; const email1Value = referenceEmail1.value; const name2Value = referenceName2.value; const contact2Value = referenceContact2.value; const email2Value = referenceEmail2.value;
        const hobbiesValue = hobbiesVar.value;
        return {fullNameValue, genderValue, dateOfBirthValue, emailValue, statementValue, firstInputValue, secInputValue, thirdInputValue, fourthInputValue, fifthInputValue, sixthInputValue, sevInputValue, eighthInputValue, ninthInputValue, name1Value, contact1Value, email1Value, name2Value, contact2Value, email2Value, hobbiesValue };
    }
    function getItem() {
        document.getElementById('fullnamedis').textContent = localStorage.getItem('Full name');
        document.getElementById('genderDis').textContent = localStorage.getItem('Gender');
        document.getElementById('DoBdis').textContent = localStorage.getItem('Date of Birth');
        document.getElementById('emaildis').textContent = localStorage.getItem('Email Address');
        document.getElementById('statmt').textContent = localStorage.getItem('statement');
        document.getElementById('educ1').textContent = localStorage.getItem('educ1');
        document.getElementById('educ2').textContent = localStorage.getItem('educ2');
        document.getElementById('educ3').textContent = localStorage.getItem('educ3');
        document.getElementById('educ4').textContent = localStorage.getItem('educ4');
        document.getElementById('educ5').textContent = localStorage.getItem('educ5');
        document.getElementById('educ6').textContent = localStorage.getItem('educ6');
        document.getElementById('educ7').textContent = localStorage.getItem('educ7');
        document.getElementById('educ8').textContent = localStorage.getItem('educ8');
        document.getElementById('educ9').textContent = localStorage.getItem('educ9');
        document.getElementById('ref1').textContent = localStorage.getItem('ref1');
        document.getElementById('ref2').textContent = localStorage.getItem('ref2');
        document.getElementById('ref3').textContent = localStorage.getItem('ref3');
        document.getElementById('ref4').textContent = localStorage.getItem('ref4');
        document.getElementById('ref5').textContent = localStorage.getItem('ref5');
        document.getElementById('ref6').textContent = localStorage.getItem('ref6');
        document.getElementById('hobbiez').textContent = localStorage.getItem('Hobbies');
    }
});




// an alternative for localStorage is sessionStorage; lasts for he session, so when the user closes the tab, the data stored is auto deleted
//  sessionStorage.setItem('myObj', JSON.stringify([fullNameValue, DoBValue]));
//  /* to extract the data*/
//  const fullName = sessionStorage.setItem('Full name');