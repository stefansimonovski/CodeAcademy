function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calculatePercent(percent) {

    var random = randomNum(0, 100);
    var indicator;

    if((100 - percent) <= random) {

        indicator = true;
    }else{ 
        indicator = false; 
    }

    return indicator;
}
function randomSeats(){
    var random = randomNum(60, 80)
    var indicator = 0;
    if(random < 60){
        indicator += random;
        return indicator;
    }
}
function percentage(num, per){
  return (num/100)*per;
}