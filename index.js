const siyalu = function(string) {
  let output = '';
  const stringLength = string.length;
  for (let i = 0; i < stringLength; i++) {
    // skip vowlSigns
    if(isVowelSign(getCharCode(string[i]))){
      continue;
    }
    if ( i+1 < stringLength ) {
      const nextCharCode = getCharCode(string[i+1]);
      const j = i+1;
      if(isCombuwa(nextCharCode)){
        output += `ෙ${string[i]}`;
      } else if(isDigaCombuwa(nextCharCode)) {
        output += `ෙ${string[i]}්`;
      } else if(isCombuwaAndAelaPilla(nextCharCode)) {
        output += `ෙ${string[i]}ා`;
      } else if(isCombuwaAndDigaAelaPilla(nextCharCode)) {
        output += `ෙ${string[i]}ා්`;
      } else if(isCombuwaAndGayanukitta(nextCharCode)) {
        output += `ෙ${string[i]}ෟ`;
      } else if(isVowelSign(nextCharCode)){
        // for things like hal kireema

        // TODO: handle PAA-PILLA, DIGA PAA-PILLA, IS-PILLA for special cases
        output += `${string[i]}${string[i+1]}`;
      } else if(isGeneralChar(getCharCode(string[i]))){
        // general char in the middle
        output += string[i];
      }
    } else {
      output += string[i];
    }
  }
  return output;
}

/* the big f*ck off charactor in sinhala hodiya :D */
const isCombuwa = function(charCode) {
 return charCode === 3545;
}

/* These vowel signs have glyph pieces which stand on both sides of the consonant; */
const isTwoPartVowelSign = function(charCode) {
  return isDigaCombuwa(charCode)
    || isCombuwaAndAelaPilla(charCode)
    || isCombuwaAndDigaAelaPilla(charCode)
    || isCombuwaAndGayanukitta(charCode);
}

const isDigaCombuwa = function(charCode) {
  return charCode === 3546;
}
const isCombuwaAndAelaPilla = function(charCode) {
  return charCode === 3548;
}
const isCombuwaAndDigaAelaPilla = function(charCode) {
  return charCode === 3549;
}
const isCombuwaAndGayanukitta = function(charCode) {
  return charCode === 3550;
}
const isGeneralChar = function(charCode) {
  return !isVowelSign(charCode);
}

const isVowelSign = function(charCode) {
  return charCode >= 3530 && charCode <= 3572;
}

const getCharCode = function(charactor) {
  return charactor.charCodeAt(0)
}

module.exports = siyalu;
