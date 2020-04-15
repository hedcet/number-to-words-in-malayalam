# convert number to words in malayalam

helper functions for number (digits) to malayalam words conversion

### install

with [npm](https://www.npmjs.com/package/number-to-words-in-malayalam) do:

```
npm install --save number-to-words-in-malayalam
```

### usage

for basic test

```js
const converter = require("number-to-words-in-malayalam");

const randomNumber = `${Math.random()}`.substr(2);
console.log(randomNumber, converter.toWords(randomNumber));
```

### toWords(number)

this helper function will convert number to malayalam words, only accept <code>Integers</code> now

@return <code>String</code> words in malayalam

| opt    | type                       | description           |
| ------ | -------------------------- | --------------------- |
| number | <code>Number/String</code> | [required] sample 123 |

```sh
000000000000000000000 'പൂജ്യം'

62940 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്'
62941 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തൊന്ന്'
62942 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തിരണ്ട്'
62943 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തിമൂന്ന്'
62944 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തിനാല്'
62945 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തഞ്ച്'
62946 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തിയാറ്'
62947 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തിയേഴ്'
62948 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തിയെട്ട്'
62949 'അറുപത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി നാല്പത്തൊമ്പത്'

8716225683197534 'എൺപത്തിയേഴ് കോടി പതിനാറ് ലക്ഷത്തി ഇരുപത്തിരണ്ടായിരത്തി അഞ്ഞൂറ്റി അറുപത്തിയെട്ട് കോടി മുപ്പത്തൊന്ന് ലക്ഷത്തി തൊണ്ണൂറ്റിയേഴായിരത്തി അഞ്ഞൂറ്റി മുപ്പത്തിനാല്'
```
