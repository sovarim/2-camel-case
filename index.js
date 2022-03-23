import camelCase from 'camelcase';
import { snakeCase } from 'snake-case';

const toCamelCase = (data) => {
  const objectToCamelCase = (obj) => {
    if (typeof obj !== 'object') return obj;
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

const toSnakeCase = (data) => {
  const objectToSnakeCase = (obj) => {
    if (typeof obj !== 'object') return obj;
    const entries = Object.entries(obj).map(([key, value]) => {
      if (value && typeof value === 'object') {
        return [snakeCase(key), toSnakeCase(value)];
      }
      return [snakeCase(key), value];
    });
    return Object.fromEntries(entries);
  };

  if (Array.isArray(data)) {
    return data.map((item) => objectToSnakeCase(item));
  }
  return objectToSnakeCase(data);
};

export default toCamelCase;

export { toSnakeCase, toCamelCase };
