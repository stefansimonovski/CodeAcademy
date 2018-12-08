function Combatant() {
    this.attack = function(target, damage) {
        console.log(this.name +  " has attacked " + target.name + " for " + damage + " damage")
        target.receiveDamage(damage);
    }
    this.receiveDamage = function(damage) {
        this.health -= damage;
        this.checkLife();
        if(this.isAlive && this.type == "dragon" && this.health < 12500) {
            this.specialSkills = new DragonAbilities();
        }

        if(this.isAlive && this.type == "knight" && damage > 0) {
            console.log(this.name + " is shielding");
            this.isShielding = true;
        } else {
            this.isShielding = false;
        }
    }
}

Combatant.prototype = new Being();