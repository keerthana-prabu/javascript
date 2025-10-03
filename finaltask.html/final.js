let user = {
    name: "",
    email: "",
    age:""

};

function saveProfile(){
    try{
        let name = document.getElementById("name").value;
        let email = document.getElementById("mail").value;
        let age = parseInt(document.getElementById("age").value);

        if (!name || !email || !age) {
      throw alert("Please fill all fields.");
    }
    user.name = name;
    user.email = email;
    user.age = age;

    if(age<12){
        throw alert("Sorry, you are under 12! You cannot participate!");
    }

    document.getElementById("registerResult").innerText = "Hi " + name + "!\nHave a fun time with the quiz below.";
    } catch(error) {
        document.getElementById("registerResult").innerText = "error";
    }
}

function saveQuiz() {
  const quizPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("The Quiz results are being calculated!");
    }, 1500);
  });

  quizPromise.then(message => {
    alert(message);
  });

  
  let score = 0; 


  if (document.getElementById("a2").checked) {
    score++;
  }


  if (document.getElementById("b1").checked) {
    score++;
  }

  
  if (document.getElementById("c3").checked) {
    score++;
  }

 let time1 = new Date().getHours();
  let time2 = new Date().getMinutes();

  let resultMessage = "You scored " + score + " out of 3!\nQuiz taken at " + time1 + ":" + time2 + "\n";


  if (score === 0) {
    resultMessage += "You can do better next time! Grade D : Not a fan!";
  } else if (score === 1) {
    resultMessage += "We believe you can do better! Grade C : Low level potterhead!";
  } else if (score === 2) {
    resultMessage += "Woah that's amazing! Grade B : You are a real potterhead!";
  } else if (score === 3) {
    resultMessage += "Congratulations! You are among the top class. Grade A : Mega Potterhead!";
  }


  setTimeout(() => {
    document.getElementById("quizResult").innerText = resultMessage;
  }, 3000);
}

function showJSON(){
    document.getElementById("jsonResult").innerText = JSON.stringify(user);
}