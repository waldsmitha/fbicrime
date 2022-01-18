export const getStorageValue = (key) => {
  const saved = sessionStorage.getItem(key);
  const parsedSaved = JSON.parse(saved);
  if (!parsedSaved) return;
  return parsedSaved;
};

export const pushSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
