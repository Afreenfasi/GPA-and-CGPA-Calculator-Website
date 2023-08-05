var createGradesArray = function(grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8) {
  var grades = [];
  
  if(grade1 !== "none") {
    grades.push(grade1)
  } if(grade2 !== "none") {
    grades.push(grade2)
  } if(grade3 !== "none") {
    grades.push(grade3)
  } if(grade4 !== "none") {
    grades.push(grade4)
  } if(grade5 !== "none") {
    grades.push(grade5)
  } if(grade6 !== "none") {
    grades.push(grade6)
  } if(grade7 !== "none") {
    grades.push(grade7)
  }if(grade8 !== "none") {
    grades.push(grade8)
  }
  
  if(grades.length > 0) {
    return grades;
  } else {
    alert("Please enter at least one grade.")
   
  }
};


 



var averageGrades = function(grades) {
  var x = 0;
  var y = 0;
 

  
  
  for(var i = 0; i < grades.length; i++) {
    x = x + grades[i]
    y = y + 1
    
    
  }

  
  
  return x / y;
};





var printToDiv = function(gpa) {
  document.getElementById("gpa").innerHTML = gpa
};

var calculate = function() {
  var sem1 = document.cgpa.sem_1.value;
  var sem2 = document.cgpa.sem_2.value;
  var sem3 = document.cgpa.sem_3.value;
  var sem4 = document.cgpa.sem_4.value;
  var sem5 = document.cgpa.sem_5.value;
  var sem6 = document.cgpa.sem_6.value;
  var sem7 = document.cgpa.sem_7.value;
  var sem8 = document.cgpa.sem_8.value;
  
  
  
  
  var grades = createGradesArray(sem_1, sem_2, sem_3, sem_4, sem_5, sem_6, sem_7, sem_8);
  
  
  

  
  var gpa = averageGrades(grades);

  //let gpa_final = grades / gpa ;

  printToDiv(gpa);
};