// var mainDiv = document.getElementById("main-container")
// mainDiv.style.maxWidth = "300px";
// mainDiv.style.height = "250px";
// mainDiv.style.margin = "auto";

// var calculator = document.createElement("form");
// calculator.style.width = "100%";
// calculator.style.height = "100%";
// calculator.style.margin = "0";
// calculator.style.padding = "0";
// calculator.style.display = "flex";
// calculator.style.flexDirection = "column";
// calculator.style.alignItems = "center";
// calculator.style.justifyContent = "space-between";

// mainDiv.appendChild(calculator);

// var recorder = document.createElement("input");
// recorder.style.fontSize = "20px";
// recorder.style.width = "100%";
// calculator.appendChild(recorder);

// var inputNumber = document.createElement("input");
// inputNumber.style.fontSize = "50px";
// inputNumber.style.maxWidth = "100%";

// var numbers = []

// var plusButton = document.createElement("button");
// plusButton.innerHTML = " + ";
// plusButton.style.fontSize = "20px";
// plusButton.style.width = "50px";
// plusButton.style.margin = "auto";

// plusButton.addEventListener("click", function(event){
//     event.preventDefault();
//     if(inputNumber.value == parseInt(inputNumber.value)){
//         numbers.push(inputNumber.value);
//         numbers.push("+");
//         recorder.placeholder = numbers.join('');
//     }else{
//         alert("You must input number");
//     }
    
//     console.log(numbers);
// })

// var minusButton = document.createElement("button");
// minusButton.innerHTML = " - ";
// minusButton.style.fontSize = "20px";
// minusButton.style.width = "50px";
// minusButton.style.margin = "auto";

// minusButton.addEventListener("click", function(event){
//     event.preventDefault();
//     if(inputNumber.value == parseInt(inputNumber.value)){
//         numbers.push(inputNumber.value);
//         numbers.push("-");
//         recorder.placeholder = numbers.join("");
//     }else{
//         alert("You must input number");
//     }
//     console.log(numbers);

// })

// var equalButton = document.createElement("button");
// equalButton.innerHTML = " = ";
// equalButton.style.fontSize = "20px";
// equalButton.style.width = "50px";
// equalButton.style.margin = "auto";

// equalButton.addEventListener("click", function(event){
//     event.preventDefault();
//     var plus = numbers.indexOf("+");
//     var minus = numbers.indexOf("-");
//     if(plus == 1){
//         numbers.push(inputNumber.value);
//         inputNumber.value = parseInt(numbers[0]) + parseInt(numbers[2]);
//         recorder.placeholder = inputNumber.value;
        
        
        
//         numbers.splice(0, 4);
//         numbers.push(inputNumber.value);
//         numbers.push("+")
        
//     }else if(plus == 2){
//         numbers.push(inputNumber.value);
//         inputNumber.value = parseInt(numbers[1]) + parseInt(numbers[3]);
//         recorder.placeholder = inputNumber.value;
        
        
      
//         numbers.splice(0, 4);
//         numbers.push(inputNumber.value);
//         numbers.push("+")
//     }
//     if(minus == 1){
//         numbers.push(inputNumber.value);
//         inputNumber.value = parseInt(numbers[0]) - parseInt(numbers[2]);
//         recorder.placeholder = inputNumber.value;

        
//         numbers.splice(0, 4);;
//         numbers.push(inputNumber.value);
//         numbers.push("-")
//     }


//     console.log(numbers)
// })

// calculator.appendChild(inputNumber);
// calculator.appendChild(plusButton);
// calculator.appendChild(minusButton);
// calculator.appendChild(equalButton);

$(document).ready(function(){
    $("#main-container").width("300px").height("300px").css("margin", "auto").css("display", "flex").css("flex-direction", "column");
    var mainpage = new Page();
    mainpage.renderAll();



});
