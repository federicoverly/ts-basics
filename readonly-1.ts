interface Cat {
  readonly name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");

// We can modify it, which is not cool. Unless we add readonly
// usul.name = "Peter";

// Not to allow changes

type ReadonlyCat = Readonly<Cat>;

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[1] = 30

// As const generates immutable arrays
const reallyConst = [1, 2, 3] as const;
// reallyConst[0] = 50;
