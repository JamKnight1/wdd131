const person = document.querySelector("#person");
const studentContainer = document.getElementById("studentContainer");
const codeContainer = document.getElementById("codeContainer");
const studentNumber = document.getElementById("studentNumber");
const code = document.getElementById("code");
const form = document.getElementById("eventForm");
const output = document.getElementById("output");


function isPastDate(value){
    const date = new Date(value);
    const today = new Date();
    return date < today;
};

function updateStudent(){
    const value = person.value
    if (value === "student"){
        studentContainer.style.display = "block";
    } else{
        studentContainer.style.display = "none";
    }
};

function updateCode(){
    const value = person.value
    if (value === "guest"){
        codeContainer.style.display = "block";
    } else{
        codeContainer.style.display = "none";
    }
};

person.addEventListener("change", updateStudent);
updateStudent();

person.addEventListener("change", updateCode);
updateCode();

form.addEventListener("submit", event => {
    const selectedType = person.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;


    event.preventDefault();
 
    const availableDate = form.availableDate.value
    if (isPastDate(availableDate)){
        output.textContent = "Please choose a later date"
        return;
    }

    if(selectedType === "student" && 
        studentNumber.value.length !== 9){
            document.getElementById("output").textContent = "Student # must be 9 digits";
            return;
    }

    if (selectedType === "guest" &&
        code.value.toLowerCase() != "event131"){
            document.getElementById("output").textContent = "Incorrect code";
            return;
    }



     output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${selectedType}</p>
  <p>${availableDate}</p>
  `;

  form.reset();
  updateStudent();
  updateCode();
})