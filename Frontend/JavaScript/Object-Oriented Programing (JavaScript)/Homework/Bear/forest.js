function Forest(){
    this.bear = new Bear();
    this.animals = [];
    this.generateAnimals = function(){
        for(var i = 0; i < 30; i++){
            var animal = randomNum(1, 5)
            switch(animal){
                case 1:
                    this.animals.push(new Rabbit());
                    break;
                case 2:
                    this.animals.push(new Wolf());
                    break;
                case 3:
                    this.animals.push(new Dear());
                    break;
                case 4:
                    this.animals.push(new Fox());
                    break;
                case 5:
                    this.animals.push(new Wildboar());
                    break;
            }
        }
    }
    this.generateAnimals();
    this.indicate = true;
    this.checkWeight = function(){
        if(this.bear.mass > 350){
            this.indicate = false;
            this.bear.mass -= percentage(this.bear.mass, 20);
            console.log("The bear is too much heavy to move")
        }else if(this.bear.mass <= 280 && this.bear.mass >= 100){
            this.indicate = true;
        }else if(this.bear.mass < 140){
            this.indicate = "Bear Die";
        }
    }
    this.catchAnimal = function(){
        if(this.indicate && calculatePercent(30)){
            var randomAnimal = randomNum(0, 29);
            if(this.animals[randomAnimal].name == "Wolf"){
                this.bear.mass = (this.bear.mass - percentage(this.bear.mass, 10)) + (this.animals[randomAnimal].mass / 2);
                console.log("The bear has captured an Wolf and now her weight is " + this.bear.mass);
            }else{
                this.bear.mass += (this.animals[randomAnimal].mass / 3);
                console.log("The bear has captured " + this.animals[randomAnimal].name + " and now her weight is " + this.bear.mass );
            }
        }else{
            console.log("The bear did't catch any animal today and now her weight is " + this.bear.mass);
        }
    }
    this.hunter = new Hunter();
    this.hunterKill = function(){
        if(calculatePercent(5)){
            return true;
        }else{
            this.bear.mass -= percentage(this.bear.mass, 20);
            return false;
        }
    }
    
}