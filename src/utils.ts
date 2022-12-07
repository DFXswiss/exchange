type KeyType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

export class Utils {
  static groupBy<T, U>(list: T[], key: KeyType<T, U>): Map<U, T[]> {
    return list.reduce(
      (map, item) => map.set(item[key] as unknown as U, (map.get(item[key] as unknown as U) ?? []).concat(item)),
      new Map<U, T[]>(),
    );
  }
}
