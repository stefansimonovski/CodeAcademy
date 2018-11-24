function converter (temperature, type) {
    var result;
    if(type === "C"){
        result = temperature * 1.8 + 32;
    }else if(type === "F"){
        result = (5 / 9) * (temperature - 32);
    }else{
        result = "the value cant be converted"
    }
    console.log("we are done");
    return result;
    }

converter();


function calculate (classes, sessions, months, numberofBreakMonths, breakMonSessions){
    var result;
    var totalsesion;
    totalsesion = classes * sessions;
    result = (totalsesion * months) - (numberofBreakMonths * (totalsesion - breakMonSessions) * totalsesion);
    console.log(result);
    return result;
}
calculate();

function presmetka (items, price, type){
    var result = items * price;
    if (type === "IOS") {
        result += result * 0.05;
        result += result * 0.18;
        result -= result * 0.05;
    } else if (type === "DROID") {
        result += result * 0.05;
        result += result * 0.18;
        result -= result * 0.02;
    }else{
        result += result * 0.05;
        result += result * 0.18;
    }
    console.log(result);
    return result;
}
presmetka();











