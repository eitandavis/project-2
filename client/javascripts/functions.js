// jshint esversion: 7
//function to reverse a single word
let reverseWord = word => {
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};

//Req. 3A
let revWords1 = sentence => {
  let wordsArr = sentence.split(" ");
  let result = "";
  for (var i = 0; i < wordsArr.length; i++) {
    result = result + reverseWord(wordsArr[i]) + " ";
    }
  return result;
};

//Req. 3B
let revWords2 = sentence => {
  let wordsArr = sentence.split(" ");
  let result = "";
  wordsArr.forEach((word) => {
    result = result + reverseWord(word) + " ";
  });
  return result;
};

//Req. 3C
let revWords3 = sentence => {
  let wordsArr = sentence.split(" ");
  let result = "";
  for (var word of wordsArr) {
    result = result + reverseWord(word) + " ";
  }
  return result;
};

//Step 5 XC
let containsDuplicates = s => {
  let count = new Array(26).fill(0);
  let cArr = Array.from(s.toUpperCase());
  for (let i in cArr) {
    if (cArr[i] != " ") {
      let index = s.toUpperCase().charCodeAt(i) - 65;
      if (count[index] == 0) {
        count[index] = cArr[i];
      }
      else {
        return true;
      }
    }
  }
  return false;
};
