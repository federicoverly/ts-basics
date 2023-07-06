// Enumeration
enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

// In case you don't add the description to the LoadingsState
const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
};

const isLoading = (state: LoadingState): boolean => {
  return state === LoadingState.loading;
};

// Literal types
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

// String literal types
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;

function sendEvent(name: string, data: unknown) {
  console.log(`${name}: ${JSON.stringify(data)}`);
}
