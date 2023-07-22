export const isObject = (value: unknown) =>
  typeof value === "object" && !Array.isArray(value) && value !== null;

export const isArray = (value: unknown) => {
  return Array.isArray(value);
};
