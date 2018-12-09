function startMonth(){
    var juventus = new Club("Juventus ", 22);
    for (let index = 1; index <= 30; index++) {
        juventus.gameDay(index);
        if(index % 8 === 0){
            juventus.sortPlayers();
            juventus.addStrongPlayer();
        }
    }
    console.log(juventus.players);
    console.log(juventus.goalsScored + " Total goals scored for one month");
    console.log("We have made " + juventus.clubMoney + "$ for one month");
}


startMonth();