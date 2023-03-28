let username: string = "Federico";
let hasLoggedIn: boolean = true;

// hasLoggedIn += 'Verly'

username += "Verly";

console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = username.split(" ");

const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
  cool: boolean;
}

const myPerson = {
  first: "Federico",
  last: "Verly",
  cool: true,
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

if (ids[30] === "D") {
}

// Infering the type
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) => v * 10);
