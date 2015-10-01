// ---------------------
// Define a function max() that takes two numbers as arguments 
//and returns the largest of them. Use the if-then-else construct 
//available in JavaScript.
// ---------------------

function max(a,b){
    if (a>b) {
      return a
    }
    else if (b>a) {
      return b
    }
    else {
      return 'NO ONE WINS, TOO BAD'
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments 
//and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if (a>b && a>c) {
      return a
    }
    else if (b>c && b>a) {
      return b
    }
    else if (c>a && c>b) {
      return c
    }
    else {
      return 'You dun goofed'
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) 
//and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' 
      || char === 'o' || char === 'u' || char === 'y'
      || char === 'A' || char === 'E' || char === 'I'
      || char === 'O' || char === 'U' || char === 'Y') {
      return true
    }
    else {
      return false
    }
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". 
//That is, double every consonant and place an occurrence of "o" in between. 
//For example, translate("this is fun") should return 
//the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var bits = phrase.split('');

};


// ---------------------
// Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(a){
    return a.split('').reverse().join('')
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and 
//returns the length of the longest one.
// ---------------------

var findLongestWord = function(arr, i) {
  return words.reduce(function(longest, current) {
    if (current.length > longest.length) {longest = current;}
    return longest
    });
}
// ---------------------
// Write a function filterLongWords() that takes an array of words 
//and an integer i and returns the array of words that are longer than i.
// ---------------------


var filterLongWords = function(arr, i) {
  var newWords = words.filter(function(word){
    return word.length > i;
  });
  return newWords;
}
  

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing 
//of the characters contained in it. Represent the frequency listing as a 
//Javascript object. Try it with something like 
//charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------




function charFreq(string){
  var newWord = 
};





