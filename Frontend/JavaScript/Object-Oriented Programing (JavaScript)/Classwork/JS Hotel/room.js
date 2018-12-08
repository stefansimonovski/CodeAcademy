function Room(roomNumber) {
    this.name = "Room " + roomNumber + 1;
    this.isClean = true;
    this.isTaken = false;
    this.minibar = 200;
    this.guest = null;
    this.price = 0;
    this.vacancyDays = 0;
    this.takeFromMinibar = function(items) {
        this.minibar -= items;
    }
    this.reserveRoom = function(person) {
        this.isTaken = true;
        this.vacancyDays = person.vacancyDays;
        this.guest = person;
    }
    this.workDay = function() {
        var clonePrice = this.price += 100;
        this.vacancyDays -= 1;
        if (this.vacancyDays <= 0) {
            this.price = 0;
            this.guest = null;
            this.isTaken = false;
            this.isClean = false;
            this.vacancyDays = 0;
            return clonePrice;
        }
    }
    this.getCleaned = function() {
        this.isClean = true;
        this.minibar = 200;
    }
}