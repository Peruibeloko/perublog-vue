export const urlEncodeObjectValues = obj =>
  Object.entries(obj).reduce(
    (prev, [k, v]) => ({
      ...prev,
      [k]: encodeURIComponent(JSON.stringify(v))
    }),
    {}
  );

export const urlDecodeObjectValues = obj =>
  Object.entries(obj).reduce(
    (prev, [k, v]) => ({
      ...prev,
      [k]: JSON.parse(decodeURIComponent(v))
    }),
    {}
  );
