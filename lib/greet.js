const _ = require("lodash");

const GREETINGS = {
  en: "Good Morning",
  fr: "Bonjour",
  sp: 'Buenos Dias',
  pt: 'Bom Dia',
  gr: "Guten Morgen",
  ru: "Dobre Utra",
  kr: 'Joh-eun Achim',
  jp: 'Ohayōgozaimasu',
  ch: 'Zǎoshang Hǎo',
  th: 'S̄wạs̄dī txn chêā kh̀a'
};

const LANGUAGES = {
  en: 'English',
  fr: 'French',
  sp: 'Spanish',
  pt: 'Portuguese',
  gr: 'German',
  ru: 'Russian',
  kr: 'Korean',
  jp: 'Japanese',
  ch: 'Chinese',
  th: 'Thai'
};

// greet by the language code
exports.greet = function(code) {
  if (code) {
    // check if value associated with the language code exists
    if (!GREETINGS[code]) {
      return "Error! We don't support this language.";
    } else {
      return GREETINGS[code];
    }
  } else {
    // return greeting in english if code is empty
    return GREETINGS['en'];
  }
}

// greet with a random greeting
exports.greetRandom = function() {
  // _.values returns values of objects in array
  // _.sample returns any random item in array
  return _.sample(_.values(GREETINGS));
}

// returns all languages
exports.allLanguages = function() {
  return LANGUAGES;
}