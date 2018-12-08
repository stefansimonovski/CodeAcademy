function Club(name, stats, players){
    this.gameDay = function(day){
        console.log("Today is match ", day + " for " + this.name);
        if(calculatePercent(30) === true){
            console.log("Today " + this.name + " scored a goal");
        }else{
            console.log("Today " + this.name + " didn't score a goal");
        }
    }
    this.name = name;
    this.stats = stats;
    this.totalplayers = players;
    var footbalers = this.players =[];
        for (let index = 1; index <= players; index++) {
            var player = new Players(index, randomNum(0, 10));
            this.players.push(player);
        }
   
    
    console.log(this.players);
    this.weakPlayer = function(){
            footbalers.forEach(function (footbalers) {
                var x = footbalers.stats;
                if(footbalers.stats <= 0){
                    delete footbalers;
                    console.log(footbalers);
                    var player = new Players(footbalers.name, 10);
                    this.players.push(player);
                    console.log(player);
                }
              
            });
    }
    this.addStrongPlayer = function(){
        var player = new Players(23, 10);
        this.players.push(player);
        console.log(player);
    }      
}