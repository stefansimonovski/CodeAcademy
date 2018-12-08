function Person(name, money) {
    this.name = name;
    this.type = money > 100 ? "guest" : "worker";
    this.cash = money;
    this.busy = false;
    this.wage = 30;
    this.outfit = "Casual";
    this.vacancyDays = getRandomDays(1, 3);
    this.cleanRoom = function(room) {
        room.getCleaned();
        this.busy = true;
    }
}