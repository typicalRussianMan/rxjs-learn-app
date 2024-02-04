/**
 * Asserts if value ins't null or undefined.
 * @param val Val.
 */
export function assertNonNullable<T>(val: T): asserts val is NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error('Value is null');
  }
}
