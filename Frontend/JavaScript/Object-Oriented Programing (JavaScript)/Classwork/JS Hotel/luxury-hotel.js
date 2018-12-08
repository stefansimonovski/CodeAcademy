function LuxuryHotel() {
    this.workDay = function(day) {
        console.log("Today is ", day);
        for (let index = 0; index < this.rooms.length; index++) {
            var totalPrice = this.rooms[index].workDay();
            // this.income += totalPrice;
        }
        this.cleanRooms();
        for (let index = 0; index < this.employees.length; index++) {
            this.employees[index].busy = false;
            this.employees[index].outfit = "Casual";
            this.income -= this.employees[index].wage; 
        }
    }
    this.buildRooms = function() {
        for (let index = 0; index < 120; index++) {
            var room = new Room(index);
            this.rooms.push(room);
        }
    }
    this.hireEmployee = function(employee) {
        this.employees.push(employee);
        this.employeesHired += 1;
    }
    this.cleanRooms = function() {
        for (let index = 0; index < this.rooms.length; index++) {
            if (!this.rooms[index].isTaken && !this.rooms[index].isClean){
                for (let j = 0; j < this.employees.length; j++) {
                    if (!this.employees[j].busy) {
                        this.employees[j].outfit = "French Maid Costume";
                        this.employees[j].cleanRoom(this.rooms[index]);
                        break;
                    }
                }
            }
        }
    }
    this.offerRooms = function(person) {
        var isAccomodated = false;
        for (let index = 0; index < this.rooms.length; index++) {         
            if (!this.rooms[index].isTaken && this.rooms[index].isClean){
                this.rooms[index].reserveRoom(person);
                isAccomodated = true;
                break;
            } 
        }
        console.log(person.name + " has been " + isAccomodated);
    }
    this.rooms = [];
    this.employees = [];
    this.restaurant = new Object(); // TODO Not implemented
    this.employeesHired = 0;
    this.income = 0;
    this.guestsServed = 0;
    this.generateHotel = function() {
        this.buildRooms();
        var startingEmployees = 10;
        for (let index = 0; index < startingEmployees; index++) {
            var candidate = new Person("Person " + index, 100); 
            this.hireEmployee(candidate);
        }
    }
    this.generateHotel();
}