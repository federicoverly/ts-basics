class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy("LG", 22);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(lgg);
DogList.instance.getDogs();
