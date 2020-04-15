module.exports = {
  lessThan100(number = "") {
    const formatted = `${number}`
      .replace(/[^0-9]+/g, "")
      .replace(/^0+([1-9][0-9]*)/, "$1")
      .replace(/^0+0/, "0");

    if (!formatted) return new Error("invalid number format");

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

    const multipleOf10 = `${formatted.charAt(0)}0`;
    const multipleOf1 = `${formatted.charAt(1)}`;

    const word = `${mapping[multipleOf10]}${mapping[multipleOf1]}`;

    switch (multipleOf10) {
      case "10": {
        switch (multipleOf1) {
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
        switch (multipleOf1) {
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
        switch (multipleOf1) {
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

    if (!formatted) return new Error("invalid number format");

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

    if (formatted.length == 3) {
      const multipleOf100 = `${formatted.charAt(0)}00`;
      const lessThan100 = this.lessThan100(
        `${formatted.charAt(1)}${formatted.charAt(2)}`
      );

      switch (multipleOf100) {
        case "100":
        case "200":
        case "300":
        case "400":
        case "500":
        case "600":
        case "700":
        case "800": {
          return `${mapping[multipleOf100].replace(
            /റ്$/,
            "റ്റി"
          )} ${lessThan100}`;
        }

        case "900": {
          return `${mapping[multipleOf100].replace(
            /ം$/,
            "ത്തി"
          )} ${lessThan100}`;
        }
      }
    }

    return this.lessThan100(number);
  },
};
