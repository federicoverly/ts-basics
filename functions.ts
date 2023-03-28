//Typing the parameters and typing the return type

export function addNumbers(a: number, b: number): number {
  return a + b;
}

export const addStrings = (str1: string, str2: string = ""): string => {
  return `${str1} ${str2}`;
};

export const format = (title: string, param: string | number) => {
  return `${title} ${param}`;
};

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
