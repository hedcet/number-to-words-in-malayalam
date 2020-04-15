module.exports = {
  lessThan100(number = "") {
    const formatted = `${number}`
      .replace(/[^0-9]+/g, "")
      .replace(/^0+([1-9][0-9]*)/, "$1")
      .replace(/^0+0/, "0");

    if (!formatted || 2 < formatted.length)
      return new Error("invalid number format");

    const mapping = {
      0: "പൂജ്യം",
      1: "ഒന്ന്",
      2: "രണ്ട്",
      3: "മൂന്ന്",
      4: "നാല്",
      5: "അഞ്ച്",
      6: "ആറ്",
      7: "ഏഴ്",
      8: "എട്ട്",
      9: "ഒമ്പത്",

      10: "പത്ത്",
      11: "പതിനൊന്ന്",
      12: "പന്ത്രണ്ട്",
      19: "പത്തൊമ്പത്",
      20: "ഇരുപത്",
      30: "മുപ്പത്",
      40: "നാല്പത്",
      50: "അമ്പത്",
      60: "അറുപത്",
      70: "എഴുപത്",
      80: "എൺപത്",
      90: "തൊണ്ണൂറ്",
    };

    if (mapping[formatted]) return mapping[formatted];

    const multiplesOf10 = `${formatted.charAt(0)}0`;
    const multiplesOf1 = `${formatted.charAt(1)}`;

    const word = `${mapping[multiplesOf10]}${mapping[multiplesOf1]}`;

    switch (multiplesOf10) {
      case "10": {
        switch (multiplesOf1) {
          case "3": {
            return word.replace(/ത്ത്മ/, "തിമ");
          }

          case "4":
          case "5": {
            return word.replace(/ത്ത്ന|ത്ത്അ/, "തിന");
          }

          case "6": {
            return word.replace(/ത്ത്ആ/, "തിനാ");
          }

          case "7": {
            return word.replace(/ത്ത്ഏ/, "തിനേ");
          }

          case "8": {
            return word.replace(/ത്ത്എ/, "തിനെ");
          }
        }
      }

      case "20":
      case "30":
      case "40":
      case "50":
      case "60":
      case "70":
      case "80": {
        switch (multiplesOf1) {
          case "1":
          case "9": {
            return word.replace(/ത്ഒ/, "ത്തൊ");
          }

          case "2": {
            return word.replace(/ത്ര/, "ത്തിര");
          }

          case "3": {
            return word.replace(/ത്മ/, "ത്തിമ");
          }

          case "4": {
            return word.replace(/ത്ന/, "ത്തിന");
          }

          case "5": {
            return word.replace(/ത്അ/, "ത്ത");
          }

          case "6": {
            return word.replace(/ത്ആ/, "ത്തിയാ");
          }

          case "7": {
            return word.replace(/ത്ഏ/, "ത്തിയേ");
          }

          case "8": {
            return word.replace(/ത്എ/, "ത്തിയെ");
          }
        }
      }

      case "90": {
        switch (multiplesOf1) {
          case "1":
          case "9": {
            return word.replace(/റ്ഒ/, "റ്റൊ");
          }

          case "2": {
            return word.replace(/റ്ര/, "റ്റിര");
          }

          case "3": {
            return word.replace(/റ്മ/, "റ്റിമ");
          }

          case "4": {
            return word.replace(/റ്ന/, "റ്റിന");
          }

          case "5": {
            return word.replace(/റ്അ/, "റ്റ");
          }

          case "6": {
            return word.replace(/റ്ആ/, "റ്റിയാ");
          }

          case "7": {
            return word.replace(/റ്ഏ/, "റ്റിയേ");
          }

          case "8": {
            return word.replace(/റ്എ/, "റ്റിയെ");
          }
        }
      }
    }
  },

  lessThan1000(number = "") {
    const formatted = `${number}`
      .replace(/[^0-9]+/g, "")
      .replace(/^0+([1-9][0-9]*)/, "$1")
      .replace(/^0+0/, "0");

    if (!formatted || 3 < formatted.length)
      return new Error("invalid number format");

    const mapping = {
      100: "നൂറ്",
      200: "ഇരുനൂറ്",
      300: "മുന്നൂറ്",
      400: "നാനൂറ്",
      500: "അഞ്ഞൂറ്",
      600: "അറുനൂറ്",
      700: "എഴുനൂറ്",
      800: "എണ്ണൂറ്",
      900: "തൊള്ളായിരം",
    };

    if (mapping[formatted]) return mapping[formatted];

    if (2 < formatted.length) {
      const multiplesOf100 = `${formatted.charAt(0)}00`;
      const lessThan100 = this.lessThan100(
        `${formatted.charAt(1)}${formatted.charAt(2)}`
      );

      switch (multiplesOf100) {
        case "100":
        case "200":
        case "300":
        case "400":
        case "500":
        case "600":
        case "700":
        case "800": {
          return `${mapping[multiplesOf100].replace(
            /റ്$/,
            "റ്റി"
          )} ${lessThan100}`;
        }

        case "900": {
          return `${mapping[multiplesOf100].replace(
            /ം$/,
            "ത്തി"
          )} ${lessThan100}`;
        }
      }
    }

    return this.lessThan100(formatted);
  },

  lessThan100000(number = "") {
    const formatted = `${number}`
      .replace(/[^0-9]+/g, "")
      .replace(/^0+([1-9][0-9]*)/, "$1")
      .replace(/^0+0/, "0");

    if (!formatted || 5 < formatted.length)
      return new Error("invalid number format");

    const mapping = {
      1000: "ആയിരം",
      3000: "മൂവ്വായിരം",
      8000: "എണ്ണായിരം",

      11000: "പതിനൊന്നായിരം",
      13000: "പതിമൂന്നായിരം",
      18000: "പതിനെട്ടായിരം",

      21000: "ഇരുപത്തൊന്നായിരം",
      23000: "ഇരുപത്തിമൂന്നായിരം",
      28000: "ഇരുപത്തിയെട്ടായിരം",

      31000: "മുപ്പത്തൊന്നായിരം",
      33000: "മുപ്പത്തിമൂന്നായിരം",
      38000: "മുപ്പത്തിയെട്ടായിരം",

      41000: "നാല്പത്തൊന്നായിരം",
      43000: "നാല്പത്തിമൂന്നായിരം",
      48000: "നാല്പത്തിയെട്ടായിരം",

      51000: "അമ്പത്തൊന്നായിരം",
      53000: "അമ്പത്തിമൂന്നായിരം",
      58000: "അമ്പത്തിയെട്ടായിരം",

      61000: "അറുപത്തൊന്നായിരം",
      63000: "അറുപത്തിമൂന്നായിരം",
      68000: "അറുപത്തിയെട്ടായിരം",

      71000: "എഴുപത്തൊന്നായിരം",
      73000: "എഴുപത്തിമൂന്നായിരം",
      78000: "എഴുപത്തിയെട്ടായിരം",

      81000: "എൺപത്തൊന്നായിരം",
      83000: "എൺപത്തിമൂന്നായിരം",
      88000: "എൺപത്തിയെട്ടായിരം",

      91000: "തൊണ്ണൂറ്റൊന്നായിരം",
      93000: "തൊണ്ണൂറ്റിമൂന്നായിരം",
      98000: "തൊണ്ണൂറ്റിയെട്ടായിരം",
    };

    if (mapping[formatted]) return mapping[formatted];

    if (3 < formatted.length) {
      const multiples = formatted.match(/(.{1,2})(.{3})/);

      const multiplesOf1000 = `${multiples[1]}000`;
      let lessThan100000 = "";

      if (mapping[multiplesOf1000]) lessThan100000 = mapping[multiplesOf1000];
      else {
        lessThan100000 = `${this.lessThan100(multiples[1])}${mapping[1000]}`;

        switch (multiples[1].substr(-1)) {
          case "0":
          case "6": {
            lessThan100000 = lessThan100000.replace(/റ്ആ/, "റാ");
            break;
          }

          case "0":
          case "9": {
            lessThan100000 = lessThan100000.replace(/ത്ആ|ത്ത്ആ/, "തിനാ");
            break;
          }

          case "2": {
            lessThan100000 = lessThan100000.replace(/ണ്ട്ആ/, "ണ്ടാ");
            break;
          }

          case "4": {
            lessThan100000 = lessThan100000.replace(/ല്ആ/, "ലാ");
            break;
          }

          case "5": {
            lessThan100000 = lessThan100000.replace(/ഞ്ച്ആ/, "യ്യാ");
            break;
          }

          case "7": {
            lessThan100000 = lessThan100000.replace(/ഴ്ആ/, "ഴാ");
            break;
          }
        }
      }

      if (multiples[2] == "000") return lessThan100000;

      return `${lessThan100000.replace(/ം$/, "ത്തി")} ${this.lessThan1000(
        multiples[2]
      )}`.replace(/ത്തി നൂ/, "ത്തി ഒരുനൂ");
    }

    return this.lessThan1000(number);
  },
};