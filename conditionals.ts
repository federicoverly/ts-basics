import fetch from "node-fetch";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
function fetchPokemon(url: string): Promise<PokemonResults>;

function fetchPokemon(
  url: string,
  cb?: (data: PokemonResults) => void
): unknown {
  if (cb) {
    fetch(url)
      .then((data) => data.json())
      .then((data) => cb(data as PokemonResults));
    return;
  } else {
    return fetch(url).then((data) => data.json());
  }
}
