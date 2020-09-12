### introduction to number-to-words-in-malayalam

many places we are writing number in words ([cheques](https://upload.wikimedia.org/wikipedia/commons/3/3c/Sample_cheque.jpeg), [invoices](https://i.ibb.co/3FNRgX9/Screenshot-2020-04-16-at-11-06-03-AM.png), etc) & most of the places we are using english

in english, we are counting in multiples of thousands (example millions, billions, etc) to spell that (like 6493 as _six thousand four hundred and ninety three_) but in kerala we are using lacks & crores more common than millions & billions

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
00000000000000000000 പൂജ്യം
9 ഒമ്പത്
30 മുപ്പത്
198 നൂറ്റി തൊണ്ണൂറ്റിയെട്ട്
9397 ഒമ്പതിനായിരത്തി മുന്നൂറ്റി തൊണ്ണൂറ്റിയേഴ്
74229 എഴുപത്തിനാലായിരത്തി ഇരുനൂറ്റി ഇരുപത്തൊമ്പത്
375660 മൂന്ന് ലക്ഷത്തി എഴുപത്തയ്യായിരത്തി അറുനൂറ്റി അറുപത്
3268950 മുപ്പത്തിരണ്ട് ലക്ഷത്തി അറുപത്തിയെട്ടായിരത്തി തൊള്ളായിരത്തി അമ്പത്
07205863 എഴുപത്തിരണ്ട് ലക്ഷത്തി അയ്യായിരത്തി എണ്ണൂറ്റി അറുപത്തിമൂന്ന്
027738009 രണ്ട് കോടി എഴുപത്തിയേഴ് ലക്ഷത്തി മുപ്പത്തിയെട്ടായിരത്തി ഒമ്പത്
3518868276 മുന്നൂറ്റി അമ്പത്തൊന്ന് കോടി എൺപത്തിയെട്ട് ലക്ഷത്തി അറുപത്തിയെട്ടായിരത്തി ഇരുനൂറ്റി എഴുപത്തിയാറ്
26613735684 രണ്ടായിരത്തി അറുനൂറ്റി അറുപത്തൊന്ന് കോടി മുപ്പത്തിയേഴ് ലക്ഷത്തി മുപ്പത്തയ്യായിരത്തി അറുനൂറ്റി എൺപത്തിനാല്
103360390436 പത്ത്ആയിരത്തി മുന്നൂറ്റി മുപ്പത്തിയാറ് കോടി മൂന്ന് ലക്ഷത്തി തൊണ്ണൂറായിരത്തി നാനൂറ്റി മുപ്പത്തിയാറ്
8854126832987 എട്ട് ലക്ഷത്തി എൺപത്തയ്യായിരത്തി നാനൂറ്റി പന്ത്രണ്ട് കോടി അറുപത്തിയെട്ട് ലക്ഷത്തി മുപ്പത്തിരണ്ടായിരത്തി തൊള്ളായിരത്തി എൺപത്തിയേഴ്
01390829598910 ഒരു ലക്ഷത്തി മുപ്പത്തൊമ്പതിനായിരത്തി എൺപത്തിരണ്ട് കോടി തൊണ്ണൂറ്റഞ്ച് ലക്ഷത്തി തൊണ്ണൂറ്റിയെട്ടായിരത്തി തൊള്ളായിരത്തി പത്ത്
632610142361213 ആറ് കോടി മുപ്പത്തിരണ്ട് ലക്ഷത്തി അറുപത്തൊന്നായിരത്തി പതിനാല് കോടി ഇരുപത്തിമൂന്ന് ലക്ഷത്തി അറുപത്തൊന്നായിരത്തി ഇരുനൂറ്റി പതിമൂന്ന്
7782926636705558 എഴുപത്തിയേഴ് കോടി എൺപത്തിരണ്ട് ലക്ഷത്തി തൊണ്ണൂറ്റിരണ്ടായിരത്തി അറുനൂറ്റി അറുപത്തിമൂന്ന് കോടി അറുപത്തിയേഴ് ലക്ഷത്തി അയ്യായിരത്തി അഞ്ഞൂറ്റി അമ്പത്തിയെട്ട്
```
