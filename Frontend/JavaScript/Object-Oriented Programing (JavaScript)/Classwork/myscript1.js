var stefan = {
    name: "Stefan",
    age: 27,
    smoker: false,

    checkSmoker: function(){
        if(this.smoker == true){
            console.log(this.name + " is smoker");
        }else{
            console.log(this.name + " is not smoker")
        }
    }
};

stefan.checkSmoker();

var car = new Object();

car.brand = "Renault";
car.model = "Scenic";
car.year = "2005";
car.drive = function () {}; 


function Cat(name, color){
    this.name = name;
    this.color = color;
    this.meow = function(){
        console.log(this.name, " is meowing hungrily");
    }
}

var milica = new Cat("Milica", "Ginger");

var golemaMaca = new Cat("Maca", "Teget-zuta");

var kuce = new Cat("Џорџ", "Maskirna");


function Hotel(name, rooms, bookedrooms){
    this.name = name;
    this.rooms = rooms;
    this.bookedrooms = bookedrooms;
}

function createNewHotel(){
    for(var i = 0; i < 3; i++){
        if(i == 0){
            var ibis = new Hotel("Ibis", 40, 25);
        }else if(i == 1){
            var meriot = new Hotel("Meriot", 60, 55);
        }else if(i == 2){
            var continental = new Hotel("Continental", 30, 5);
        }
    }
    console.log(ibis, meriot, continental);
}

createNewHotel();


function damage(min, max){
    return Math.floor(min + Math.random()*(max + 1 - min));
}

function NewWarrior(name, armor, healt){
    this.name = name;
    this.armor = armor;
    this.healt = healt;
}

function fight(){
    var orc = new NewWarrior("Orc", 5, 410);
    var human = new NewWarrior("Human", 9, 550);
    console.log(orc, human);

    while(orc.healt > 0 && human.healt > 0){
        for(var i = 0; i < 1; i++){
            orc.healt = orc.healt - damage(18, 27) - orc.armor;
            human.healt = human.healt - damage(23, 35) - human.armor;
            if(orc.healt <= 0){
                console.log("Human Win");

            }else if(human.healt <= 0){
                console.log("Orc Win");

            }
        }
    }
}
fight();

