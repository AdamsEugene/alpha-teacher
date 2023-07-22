export const saveItemLS = <T>(key: string, value: T, eventKey?: string) => {
  if (!key) return false;
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
  if (eventKey) window.dispatchEvent(new Event(eventKey));
  return true;
};

export const getItemLS = <T>(key: string): T | null => {
  if (!key) return null;
  const value = localStorage.getItem(key);
  return JSON.parse(value || "{}") as T;
};
