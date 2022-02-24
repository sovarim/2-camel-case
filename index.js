import camelCase from 'camelcase';

const toCamelCase = (data) => {
  const objectToCamelCase = (obj) => {
    if (typeof obj !== 'object') return data;
    const entries = Object.entries(obj).map(([key, value]) => {
      if (value && typeof value === 'object') {
        return [camelCase(key), toCamelCase(value)];
      }
      return [camelCase(key), value];
    });
    return Object.fromEntries(entries);
  };

  if (Array.isArray(data)) {
    return data.map((item) => objectToCamelCase(item));
  }
  return objectToCamelCase(data);
};

export default toCamelCase;
