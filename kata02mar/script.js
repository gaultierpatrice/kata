var warrior = /** @class */ (function () {
    function warrior(name, pv) {
        this.name = name;
        this.pv = pv;
    }
    warrior.prototype.attackMonster = function (monster) {
        monster.pv -= 1;
        console.log("".concat(this.name, " attacks ").concat(monster.name, " !"));
    };
    warrior.prototype.getPv = function () {
        console.log("".concat(this.name, "'s PV : "), this.pv);
    };
    return warrior;
}());
var healer = /** @class */ (function () {
    function healer(name) {
        this.name = name;
    }
    healer.prototype.heal = function (warrior) {
        console.log("".concat(this.name, " heals ").concat(warrior.name));
        warrior.pv += 1;
    };
    return healer;
}());
var monster = /** @class */ (function () {
    function monster(name, pv) {
        this.name = name;
        this.pv = pv;
    }
    monster.prototype.attackWarrior = function (warrior) {
        warrior.pv -= 1;
        console.log("".concat(this.name, " attacks ").concat(warrior.name, " !"));
    };
    monster.prototype.getPv = function () {
        console.log("".concat(this.name, "'s PV : "), this.pv);
    };
    return monster;
}());
var monster1 = new monster("monster1", 10);
var healer1 = new healer("healer1");
var warrior1 = new warrior("warrior1", 10);
monster1.attackWarrior(warrior1);
warrior1.getPv();
warrior1.attackMonster(monster1);
monster1.getPv();
healer1.heal(warrior1);
warrior1.getPv();
