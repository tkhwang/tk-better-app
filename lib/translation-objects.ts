import type { TFunction } from "i18next";

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object";

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every(isString);

/**
 * Reads an array from the translation resources and validates each entry.
 * Returns an empty array (and warns) when the key is missing or malformed so
 * the UI degrades instead of crashing.
 */
export const getTranslatedArray = <T>(
  t: TFunction,
  key: string,
  guard: (value: unknown) => value is T,
): T[] => {
  const raw: unknown = t(key, { returnObjects: true });

  if (Array.isArray(raw) && raw.every(guard)) {
    return raw;
  }

  console.warn(`Missing or invalid translation for key "${key}"`, raw);
  return [];
};
