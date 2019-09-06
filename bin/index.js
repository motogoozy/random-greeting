#!/usr/bin/env node

const colors = require('colors');
const greet = require("../lib/greet");

// get arguments after first two elements in process.argv
var arguments = process.argv.splice(2);

// check if user wants language specific greeting
// default value of language is `null`
var lang = null;
// check if first argument is `--lang`
if (arguments[0] == '-lang' || arguments[0] == '-l') {
  // set second argument as language.
  lang = arguments[1];
} else if (arguments[0] == '-options' || arguments[0] == '-o') {
  lang = 'all';
}

// if 'lang' has a value and does not equal 'all', show greeting in the specified language. If `lang` is empty, then show random greeting
if (lang !== null && lang !== 'all') {
  // print greeting in the specified language (lang)
  console.log(
    // returns the greeting text with specified language
    greet.greet(lang).rainbow.bold
  );
} else if (lang === 'all') {
  let languages = greet.allLanguages();
  for (let key in languages) {
    console.log(
      `${key.white.bold}: ${languages[key].cyan.bold}`
    );
  }
} else {
  // print random greeting
  console.log(
    // returns the random greeting text
    greet.greetRandom().rainbow.bold
  );
}