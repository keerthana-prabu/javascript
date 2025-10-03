let student = {
  name: "",
  birthYear: "",
  city: ""
};

function saveProfile() { confirm("Do you want to save your profile?");
  try {
    let name = document.getElementById("name").value;
    let year = parseInt(document.getElementById("birthYear").value);
    let city = document.getElementById("city").value;

     if (!name || !year || !city) {
      throw alert("Please fill all fields.");
    }

    student.name = name;
    student.birthYear = year;
    student.city = city;

    document.getElementById("profileResult").innerText =
      "Hello " + name + ", from " + city +"!\nYour profile is saved.";
  } catch (error) {
    document.getElementById("profileResult").innerText = error;
  }
}
function checkAge() {
  try {
    if (!student.birthYear) throw "Enter profile first!";
    let age = new Date().getFullYear() - student.birthYear;
    if(age>= 18){
     msg = "Age: " + age + "\nYou are Eligible.";}
    else { msg = "Age: " + age + "\nYou are not Eligible.";}
    document.getElementById("ageResult").innerText = msg;
  } catch (error) {
    document.getElementById("ageResult").innerText = error;
  }
}


function showGreeting() {
  let hour = new Date().getHours();
  let greet = "Hello";
  if (hour < 12) greet = "Good Morning";
  else if (hour < 18) greet = "Good Afternoon";
  else greet = "Good Evening";

  document.getElementById("greetResult").innerText = greet + ", " + student.name;
}



function doMath(op) {
  let a = (document.getElementById("num1").value);
  let b = (document.getElementById("num2").value);
  let res;

  if (isNaN(a) || isNaN(b)) {
    res = "Enter correct numbers!";
  } else {
    if (op === "+") res = a + b;
    if (op === "-") res = a - b;
    if (op === "*") res = a * b;
    if (op === "/")
       { if(b == 0) {res = "Can't divide by 0"} 
       else { res = a / b;}
  }

  document.getElementById("calcResult").innerText = "Result: " + res;
} }


function showQuote() {
  let quotes = [
   "Even raindrops carve mountains with patience.",

   "Your future self is watching — give them a reason to be proud.",

   "Every master was once a beginner who didnt quit.",

    "When the mind whispers too hard, let your heart reply just start.",

    "Tiny progress is still a rebellion against giving up.",

    "Courage is quiet, but it changes everything.",

    "Your effort plants seeds that success will harvest later.",

    "A page a day turns into a book; a step a day turns into a journey."
  ];
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteResult").innerText = random;


}function showJSON() {
  document.getElementById("jsonResult").innerText = JSON.stringify(student, null, 2);
}
