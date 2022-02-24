# 2-camel-case

Converting an object or array of any nesting level to camelcase style

## Installation

```
$ npm install 2-camel-case
```

or

```
$ yarn add 2-camel-case
```

## Example

```js
import toCamelCase from '2-camel-case';

toCamelCase({
  first_name: 'Ivan',
  middle_name: 'Ivanovich',
  last_name: 'Ivanov',
});
/* 
  return {
    firstName: 'Ivan',
    middleName: 'Ivanovich',
    lastName: 'Ivanov', 
  }
*/

toCamelCase([
  {
    first_name: 'Ivan',
    middle_name: 'Ivanovich',
    last_name: 'Ivanov',
  },
]);
/* 
  return [
  {
    firstName: 'Ivan',
    middleName: 'Ivanovich',
    lastName: 'Ivanov',
  },
]
*/
```

## API

### toCameCase(data)

#### data

Type: `array | object`
