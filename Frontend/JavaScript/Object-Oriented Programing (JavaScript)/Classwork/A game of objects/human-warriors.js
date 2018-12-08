function Knight(name) {
    this.health = 1200;
    this.minDamage = 50;
    this.maxDamage = 75;
    this.name = name;
    this.type = "knight"
    this.protectArmy = function() {

    }
}
Knight.prototype = new Combatant();

function Wizard(name) {
    this.health = 700;
    this.minDamage = 100;
    this.maxDamage = 240;
    this.name = name;
    this.buffAllies = function() {
        
    }
}
Wizard.prototype = new Combatant();

function Archer(name) {
    this.name = name;
    this.health = 450;
    this.minDamage = 80;
    this.maxDamage = 150;
}
Archer.prototype = new Combatant();
