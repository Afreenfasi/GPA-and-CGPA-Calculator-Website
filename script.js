var createWeightsArray = function(weight1, weight2, weight3, weight4, weight5, weight6, weight7, weight8, grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8) {
  var weights = [];
  
  if(grade1 !== "none") {
    weights.push(weight1)
  } if(grade2 !== "none") {
    weights.push(weight2)
  } if(grade3 !== "none") {
    weights.push(weight3)
  } if(grade4 !== "none") {
    weights.push(weight4)
  } if(grade5 !== "none") {
    weights.push(weight5)
  } if(grade6 !== "none") {
    weights.push(weight6)
  } if(grade7 !== "none") {
    weights.push(weight7)
  } if(grade8 !== "none") {
    weights.push(weight8)
  }  
  
  return weights;
};

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

var convert = function(grades) {
  for(var i = 0; i < grades.length; i++) {
    switch(grades[i]) {
      case 'a+':
        grades[i] = 10;
        break;
      case 'a':
        grades[i] = 9;
        break;
      case 'a-':
        grades[i] = 8;
        break;
      case 'b+':
        grades[i] = 7;
        break;
      case 'b':
        grades[i] = 6;
        break;
      
      case 'f':
        grades[i] = 0.0;
        break;
    }
  }
  
  return grades;
};

var weight = function(weights, grades) {
  for(var i = 0; i < grades.length; i++) {
    var num = grades[i].toString();
    if(weights[i] === 3) {
      
        grades[i] = grades[i] * weights[i];
      
    } else if(weights[i] === 4) {
     
        grades[i] = grades[i] * weights[i];
      
    } else{

        grades[i] = grades[i] * weights[i];
    }
  }
  
  return grades;
};

var averageWeights = function(grades, weights) {
  var x = 0;
  var y = 0;

  
  
  for(var i = 0; i < grades.length; i++) {
    x = x + grades[i]
    y = y + parseInt(weights[i])
    
    
  }

  
  
  return x / y;
};





var printToDiv = function(gpa) {
  document.getElementById("gpa").innerHTML = "GPA = "+gpa
};

var calculate = function() {
  var weight1 = document.grades.weight1.value;
  var weight2 = document.grades.weight2.value;
  var weight3 = document.grades.weight3.value;
  var weight4 = document.grades.weight4.value;
  var weight5 = document.grades.weight5.value;
  var weight6 = document.grades.weight6.value;
  var weight7 = document.grades.weight7.value;
  var weight8 = document.grades.weight8.value;
  
  var grade1 = document.grades.grade1.value;
  var grade2 = document.grades.grade2.value;
  var grade3 = document.grades.grade3.value;
  var grade4 = document.grades.grade4.value;
  var grade5 = document.grades.grade5.value;
  var grade6 = document.grades.grade6.value;
  var grade7 = document.grades.grade7.value;
  var grade8 = document.grades.grade8.value;
  
  var weights = createWeightsArray(weight1, weight2, weight3, weight4, weight5, weight6, weight7, weight8, grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8);
  var grades = createGradesArray(grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8);
  
  grades = convert(grades);
  
  grades = weight(weights, grades);
  
  var gpa = averageWeights(grades, weights);

  //let gpa_final = grades / gpa ;

  printToDiv(gpa);
};