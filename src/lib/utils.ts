export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && value !== undefined;
}

export function makeEnumGuard<T extends Record<string, string>>(enumObj: T) {
  return (value: string): value is T[keyof T] =>
    Object.values(enumObj).includes(value);
}
