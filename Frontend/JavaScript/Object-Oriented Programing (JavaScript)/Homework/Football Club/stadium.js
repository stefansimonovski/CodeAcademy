function Stadium(){
    this.seats = 50000;
    this.seatsFilled = 0;
    this.fansCametoWatch = function(){
        this.seatsFilled = percentage(this.seats, randomNum(60, 80));
    }
}