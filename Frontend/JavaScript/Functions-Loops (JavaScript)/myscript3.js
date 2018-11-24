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
	var sumofone = 0;
	for (var index = x; index < y; index++) {
		if (sumofone != isPrime(index)) {
			sumofone += index;
		}else if(sumofone == isPrime(index)){

		}
	}
	console.log(sumofone);
}
function isPrime(index1) {
	if (index1 === 2) {
	  return true;
	}
	else if(index1 > 0){
	    for (var i = 2;  i < index1; i++) {
  		    if (index1 % i !== 0 ) {
		    	return true;
		    }else if (index1 === i * i) {
		    	return false
		    }else {
		  		return false;
			}
	  	}
	}else{
	  return false;
	}
}
rangeIntegers(1, 11)
