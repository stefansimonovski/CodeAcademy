var maindiv = document.getElementById("main-div");
maindiv.style.width = "200px";
maindiv.style.height = "300px";
maindiv.style.backgroundColor = "green";

var paragraph = document.createElement("p");
paragraph.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum deleniti quos, distinctio aspernatur fugiat exercitationem, quisquam id consequuntur velit quaerat sint soluta dignissimos ipsam iure nobis sed beatae nam. Animi!";
paragraph.style.color = "black";
paragraph.style.fontSize = "14px";

var button = document.createElement("button");
button.innerHTML = "Click me!!!";

button.addEventListener("click", function(){
    maindiv.style.backgroundColor = "red";
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px";
    button.innerHTML = "Double Click me!";
});


button.addEventListener("dblclick", function(){
    maindiv.style.backgroundColor = "green";
    paragraph.style.color = "black";
    paragraph.style.fontSize = "14px";
    button.innerHTML = "Click me!!!";
});

window.addEventListener("resize", function(){
    console.log(window.innerWidth, window.innerHeight);
});

var body = document.getElementsByTagName("body")[0];
var secondiv = document.createElement("div");
body.appendChild(secondiv);

var inputform = document.createElement("form");
secondiv.appendChild(inputform);
var inputname = document.createElement("input");
inputname.type = "text";
inputname.placeholder = "Enter you name";

var inputlastname = document.createElement("input");
inputlastname.type = "text";
inputlastname.placeholder = "Enter your last name";

var inputemail = document.createElement("input");
inputemail.type = "email";
inputemail.placeholder = "Enter your email";

var inputpass = document.createElement("input");
inputpass.type = "password";
inputpass.placeholder = "Enter your password";

var button1 = document.createElement("button");
button1.innerHTML = "Register";

button1.addEventListener("click", function(param){
    param.preventDefault();
    if(inputname.value == ""){
        alert("You must enter your name");
    }else if(inputlastname.value == ""){
        alert("You must enter your last name");
    }else if(inputemail.value.indexOf("@") == -1){
        alert("Please enter your email");
    }
    else if(inputpass.value.length < 8){
        alert("Password must be at least 8 characters");
    }else{
        var informations = new User(inputname.value, inputlastname.value, inputemail.value, inputpass.value);
        console.log(informations);
    }
});



inputform.appendChild(inputname);
inputform.appendChild(inputlastname);
inputform.appendChild(inputemail);
inputform.appendChild(inputpass);
inputform.appendChild(button1);








maindiv.appendChild(paragraph);
maindiv.appendChild(button);