export const entries = Object.entries as <T>(
  o: T,
) => [Extract<keyof T, string | number>, T[keyof T]][];

export const keys = Object.keys as <T>(o: T) => (keyof T)[];
