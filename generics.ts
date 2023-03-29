function simpleStringState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleStringState(10);

console.log(st1getter());

st1setter(50);

console.log(st1getter());

const [st2getter, st2setter] = simpleStringState<string | null>(null);

console.log(st2getter());

// Can't take anything but null unless we override in line 20
st2setter("Fede");

console.log(st2getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

export function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  points: number;
}

const pokemon: Pokemon[] = [
  { name: "Bulbasor", points: 20 },
  { name: "Charizard", points: 10 },
];

const ranks = ranker(pokemon, ({ points }) => points);

console.log(ranks);
