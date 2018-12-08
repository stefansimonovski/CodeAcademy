function War() {
    this.boss = new Dragon("Drogon");
    this.army = [];
    this.isRaging = function() {
        var aliveCombatants = 0;
        for (var index = 0; index < this.army.length; index++) {
            if (this.army[index].isAlive) {
                aliveCombatants++;
            }
        }
        this.processTurn(aliveCombatants);
        if (!this.boss.isAlive || !aliveCombatants) {
            if (!aliveCombatants) {
                console.log(this.boss.name + " has killed all the peasants. His health is " + this.boss.health);
            } else {
                console.log("The dragon has perished at the hands of the peasants");
            }
            return true;
        }
    }
    this.processTurn = function(aliveCombatants) {
        if (!aliveCombatants) {
            return true;
        }
        var victim = this.army[getRandom(0, this.army.length - 1)];

        for (var j = 0; j < this.army.length; j++) {
            // console.log(this.army[j]);
            if (this.army[j].isShielding) {
                victim = this.army[j];
            }
        }

        if (victim.isAlive) {
            if (victim.isShielding) {
                this.boss.attack(victim, 0);
            } else {
                this.boss.attack(victim, getRandom(this.boss.minDamage, this.boss.maxDamage));
            }
            
        } else {
           return this.processTurn();
        }
        
        for (var index = 0; index < this.army.length; index++) {
            if (this.boss.isAlive && this.army[index].isAlive) {
                this.army[index].attack(this.boss, 
                    getRandom(this.army[index].minDamage, this.army[index].maxDamage));
            }
        }
    }
    this.generateArmy = function() {
        for (var index = 0; index < 10; index++) {
            var combatant = getRandom(1, 3);
            switch (combatant) {
                case 1:
                    this.army.push(new Knight("Knight " + index));
                    break;
                case 2:
                    this.army.push(new Wizard("Wizard " + index));
                    break;
                case 3:
                    this.army.push(new Archer("Archer " + index));
                    break;
                default:
                    break;
            }   
        }
    }
    this.generateArmy();
}