import fs from "fs";

export class PersistentMap<K, V> implements Map<K, V> {
  private map: Map<K, V>;
  private persistentFile: string;
  public readonly size: number;
  public readonly [Symbol.toStringTag]: "Map";

  public constructor(loadFromFilePath: string) {
    let json;
    try {
      json = JSON.parse(fs.readFileSync(loadFromFilePath).toString());
    } catch (e) {
      json = [];
    }

    this.map = new Map(json);
    this.size = 0;
    this.persistentFile = loadFromFilePath;
    this[Symbol.toStringTag] = "Map";
  }

  public save(): void {
    fs.writeFileSync(this.persistentFile, JSON.stringify([...this.map]), { flag: "w+" });
  }

  public clear(): void {
    this.map.clear();
  }

  public delete(key: K): boolean {
    return this.map.delete(key);
  }

  public forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
    this.map.forEach(callbackfn, thisArg);
  }

  public get(key: K): V | undefined {
    return this.map.get(key);
  }

  public has(key: K): boolean {
    return this.map.has(key);
  }

  public set(key: K, value: V): this {
    this.map.set(key, value);

    return this;
  }

  public [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.map[Symbol.iterator]();
  }

  public entries(): IterableIterator<[K, V]> {
    return this.map.entries();
  }

  public keys(): IterableIterator<K> {
    return this.map.keys();
  }

  public values(): IterableIterator<V> {
    return this.map.values();
  }
}
