//Javascript Arrays

let names = ["Mark", "Nathan", "David", "Joe"];
console.log(names);


console.log(names[2]);

let grades = [89, 39, 55, 108];
console.log(grades);

console.log(typeof(grades[1]));

//Javascript Objects

let studentName = "Brother Warner";
let studentClass = ["WDD131", "CSE110"];
let studentGrade = [67, 88];

let student = {
    name:"Brother Warner",
    classes:["WDD131", "CSE110"],
    grades:[67, 88]
}
console.log(student.name)

//Array Mehtods

names.forEach((name) => {
    //runs this function once for every element in the array
    // one at a time
    console.log(name)
})

let newNames = names.map((name)=> {
    return name + " Hatchley";
})
console.log(newNames);

let filteredName = names.filter((name)=>{
    return name [0] === "M";
})
console.log(filteredName);

let total = studentGrade.reduce((sum, grade) => {
    return sum + (grade - 10);
}, 0);

console.log(total);

let index = names.indexOf("David");
console.log(index);