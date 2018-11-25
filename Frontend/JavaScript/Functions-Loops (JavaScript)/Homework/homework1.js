function concatenateStrings(x, y, boolean){
    var result;
    if(boolean == true){
        result = x + y;
    }else{
        result = y + x;
    }
    console.log(result);
}

concatenateStrings("fizz", "buzz", 0);