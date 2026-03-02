class warrior {
  name: string;
  pv: number;

  constructor(name: string, pv: number) {
    this.name = name;
    this.pv = pv;
  }

  attackMonster(monster: monster) {
    monster.pv -= 1;
    console.log(`${this.name} attacks ${monster.name} !`);
  }

  getPv() {
    console.log(`${this.name}'s PV : `, this.pv);
  }
}

class healer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  heal(warrior: warrior) {
    console.log(`${this.name} heals ${warrior.name}`);
    warrior.pv += 1;
  }
}

class monster {
  name: string;
  pv: number;

  constructor(name: string, pv: number) {
    this.name = name;
    this.pv = pv;
  }

  attackWarrior(warrior: warrior) {
    warrior.pv -= 1;
    console.log(`${this.name} attacks ${warrior.name} !`);
  }

  getPv() {
    console.log(`${this.name}'s PV : `, this.pv);
  }
}

const monster1 = new monster("monster1", 10);
const healer1 = new healer("healer1");
const warrior1 = new warrior("warrior1", 10);

monster1.attackWarrior(warrior1);
warrior1.getPv();

warrior1.attackMonster(monster1);
monster1.getPv();

healer1.heal(warrior1);
warrior1.getPv();
