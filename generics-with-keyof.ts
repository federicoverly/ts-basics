function plucks<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Dog 1", age: 10 },
  { name: "Dog 2", age: 5 },
];

console.log(plucks(dogs, "age"));
console.log(plucks(dogs, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function setEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

setEvent("addToCart", {
  time: 20,
  user: "federico",
  productId: "foo",
  quantity: 10,
});

setEvent("checkout", { user: "John", time: 10 });
