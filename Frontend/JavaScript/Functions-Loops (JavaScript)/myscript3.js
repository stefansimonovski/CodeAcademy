// function myfunction(){

//	for(var broj = 0; broj < 16; broj++){
//		if(broj % 2 == 0){
//			alert("Brojot " + broj " e paren");
//		}else{
//			alert("Brojot " + broj " e neparen");
//		} 
//	}
//}
//myfunction();

// function myfunction2(){
// 	for(var broj = 1; broj < 101; broj++){
// 		if(broj % 3 == 0 && broj % 5 == 0){
// 			console.log("FizzBuzz" + broj);
// 		}else if(broj % 5 == 0){
// 			console.log("Buzz" + broj);
// 		}else if(broj % 3 == 0){
// 			console.log("Fizz" + broj);
// 		}else{
// 			console.log(broj);
// 		}
// 	}
// }

// myfunction2();


// function myfunction3(){
// 	for(var index = 100; index < 1000; index++){
// 		var isArms = checkIfArmstrong(index);
// 		if (isArms) {
// 			console.log(index);
// 		}
// 	}
// }
// function checkIfArmstrong(index){
// 	var result = 0;
// 	var temporaryNum = index;
// 	while(temporaryNum > 0){
//  		 	var digit = temporaryNum % 10;
// 			  temporaryNum = Math.floor(temporaryNum/10);
// 		 	result += Math.pow(digit, 3);
// 		}
// 	return index == result;
	
// }

// myfunction3();

// function sumofMultiples(){
// 	var sumofall = 0;
// 	for (var index = 1; index < 1000; index++) {
// 		if(index % 3 == 0 && index % 5 == 0){
// 			sumofall += index;
// 			console.log(index);
// 		}
// 	}
// 	console.log(sumofall);
// }

// sumofMultiples()



// function getIntegersInRange(x, y){
// 	for (var index = x; index < y; index++) {
// 		console.log(index.toString());
// 	}
// }
// getIntegersInRange(2, 10);


function rangeIntegers(x, y){
	var sumofprime = 0;
	var sumofnotprime = 0;
	for (var index = x; index < y; index++) {
		if(index == isPrime(index)){
			sumofprime += index;
		}else{
			sumofnotprime += index;
		}
	}
	console.log(sumofprime + " Sum of Prime numbers between " + x + "-" + y);
	console.log(sumofnotprime + " Sum of not Prime numbers between " + x + "-" + y);
}
function isPrime(index) {
    for(var i = 2; i < index; i++) {
        if(index % i === 0) {
			console.log(index + " Is not a Prime Number");
			return index;
        }
	}
	console.log(index + " Is a Prime Number");
	return false;
}
rangeIntegers(2, 72);

