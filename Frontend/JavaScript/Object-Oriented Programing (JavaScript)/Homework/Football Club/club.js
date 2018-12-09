function Club(name, players){
    this.goalsScored = 0;
    this.clubMoney = 0;
        this.gameDay = function(day){
        this.stadium.fansCametoWatch();
        var sold = 0;
        this.ticketMoney();
        console.log("Today is match ", day + " for " + this.name);
        console.log("Today we have " + this.stadium.seatsFilled + " fans that bought ticket and made us profit of " + this.ticketProfit + "$")
        if(calculatePercent(30) === true){
            console.log("Today " + this.name + " scored a goal");
            this.goalsScored ++;
            sold = this.fanShop.sells(this.stadium.seatsFilled, 25);
            this.jerseysMoney = sold * 5;
            console.log("Today we have sold " + sold + " jerseys and made " + this.jerseysMoney + "$");
        }else{
            console.log("Today " + this.name + " didn't score a goal");
            sold = this.fanShop.sells(this.stadium.seatsFilled, 10);
            this.jerseysMoney = sold * 5;
            console.log("Today we have sold " + sold + " jerseys and made " + this.jerseysMoney + "$");
        }
        this.hooligansDamage();
        this.clubMoney += this.jerseysMoney + this.ticketProfit - this.hooligansmoney;  
        
        
    }
    this.jerseysMoney = 0;
    this.ticketMoney = function(){
        this.ticketProfit = this.stadium.seatsFilled * 2;
    }
    this.ticketProfit = 0;
    this.hooligansmoney = 0;
    this.hooligans = 0;
    this.hooligansDamage = function(){
        this.hooligans = percentage(this.stadium.seatsFilled, 5);
        this.hooligansmoney = this.hooligans * 25;
        console.log("We have " + this.hooligans + " hooligans that made " + this.hooligansmoney + "$ damage")
    }
    this.name = name;
    this.clubStats = 0;
    this.stats = function(){
        for(var i = 0; i < this.players.length; i++){
            this.clubStats += this.players[i].stats
        }
        this.clubStats /= this.players.length;
        console.log("The score of club is " + this.clubStats);
    }
    this.totalplayers = players;
    this.players =[];
    this.addPlayers = function(){
        for (let index = 1; index <= players; index++) {
            var player = new Players(index, randomNum(1, 10));
            this.players.push(player);
        }
                
    }
    this.addPlayers();
    this.sortPlayers = function(){
        this.players.sort(function(a, b){return b.stats - a.stats});
    }
    this.addStrongPlayer = function(){
        var player = new Players("Major Star", 10);
        this.players.splice(21, 21);
        this.players.push(player);
        console.log("Today a Major Star come to play for our team");
    }
    this.stats();
    this.stadium = new Stadium();
    this.fanShop = new FanShop(); 
}