### introduction to number-to-words-in-malayalam

many places we are writing number in words ([cheques](https://upload.wikimedia.org/wikipedia/commons/3/3c/Sample_cheque.jpeg), [invoices](https://i.ibb.co/3FNRgX9/Screenshot-2020-04-16-at-11-06-03-AM.png), etc) & most of the places we are using english

in english, we are counting multiples of thousands (example  millions, billions, etc) to spell that (like 6493 as _six thousand four hundred and ninety three_) but in kerala we are using lacks & crores more common than millions & billions

so this [npm](https://www.npmjs.com/package/number-to-words-in-malayalam) module will help you write number (digits) in malayalam words, by default we are counting in lacks & crores instead of millions & billions

### installation

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
