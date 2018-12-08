function startMonth(){
    var juventus = new Club("Juventus ", randomNum(0, 10), 22);
    for (let index = 1; index <= 30; index++) {
        juventus.gameDay(index);
        if(index % 8 === 0){
            juventus.weakPlayer();
            juventus.addStrongPlayer()                                    //star come to play make space
        }
    }
}


startMonth();