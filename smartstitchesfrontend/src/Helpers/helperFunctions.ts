export function filterArray<T>(array: T[], filter: (item: T) => boolean): T[] {
  return array.filter(filter);
}
