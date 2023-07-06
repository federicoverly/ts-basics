interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storeState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

const myDB = new InMemoryDatabase();

myDB.set("foo", "bar");

// By making it private or protected we can't override
// myDB.db["foo"] = "baz";

class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storeState: string): void {
    this.db = JSON.parse(storeState);
  }
}

const myNewDB = new PersistentMemoryDB();
myNewDB.set("foo", "bar");
const saved = myNewDB.saveToString();
myNewDB.restoreFromString(saved);

const genericDB = new InMemoryDatabase<number, string>();

genericDB.set("foo", 2);
