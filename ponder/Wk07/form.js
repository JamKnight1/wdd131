const form = document.querySelector("#fsyForm");
const travelRange = document.getElementById("travelRange");
const notesContainer = document.getElementById("notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

console.log(form);

function getCheckedCampuses(campuses) {
    return Array.from(campuses)
        .filter(campus => campus.checked)
        .map(campus => campus.value);
}

function isPastDate(value){
    const date = new Date(value);
    const today = new Date();
    return date < today;
}

function updateNotesField(){
    const value = travelRange.value;

    if (value === "many") {
        notesContainer.style.display = "block";
    } else{
        notesContainer.style.display = "none";
    }
}
travelRange.addEventListener("change", updateNotesField);
updateNotesField();

//Master form
form.addEventListener("submit", event => {
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const selectedCampuses = getCheckedCampuses(campuses);
    const type = numberOfCampuses;

    event.preventDefault();
    
    const availableDate = form.availableDate.value
    if (isPastDate(availableDate)){
        output.textContent = "Please choose a later date"
        return;
    }
    console.log(form.firstName.value);
    
    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus;
    console.log(campuses);

    if(numberOfCampuses === "one" && 
        getCheckedCampuses(campuses).length == 0){
            document.getElementById("output").textContent = "Please select one campus.";
            return;
    }

    if(numberOfCampuses === "many" && 
        getCheckedCampuses(campuses).length < 2){
            document.getElementById("output").textContent = "Please select two or more campuses.";
            return;
        }

    if (numberOfCampuses === "many" &&
        notes === ""){ document.getElementById("output").textContent = "Please add travel notes.";
            return;
    }

    output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});