# convert number to words in malayalam

helpers for number to words conversion

### install

with [npm](https://www.npmjs.com/package/number-to-words-in-malayalam) do:

```
npm install --save number-to-words-in-malayalam
```

### usage

for basic test

```js
const randomNumber = `${Math.random()}`.substr(2);
console.log(randomNumber, converter.toWords(randomNumber));
```

##### toWords(number)

convert number to words
@return String words in malayalam

| opt    | type                       | description                             |
| ------ | -------------------------- | --------------------------------------- |
| number | <code>Number/String</code> | [required] sample 000000000000000000000 |

```sh
000000000000000000000 പൂജ്യം
8716225683197534 എൺപത്തിയേഴ് കോടി പതിനാറ് ലക്ഷത്തി ഇരുപത്തിരണ്ടായിരത്തി അഞ്ഞൂറ്റി അറുപത്തിയെട്ട് കോടി മുപ്പത്തൊന്ന് ലക്ഷത്തി തൊണ്ണൂറ്റിയേഴായിരത്തി അഞ്ഞൂറ്റി മുപ്പത്തിനാല്
```
