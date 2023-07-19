// As a template
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attachk with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

// Can't do this
// const ryu = new StreetFighter()

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }

  get name(): string {
    return "Ryu";
  }
}

const ryu = new Ryu();
console.log(ryu.getSpecialAttack());

ryu.fight();

class Chunli extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightening Kick";
  }

  get name(): string {
    return "Chun-Li";
  }
}

const chunLi = new Chunli();
