
import css from '../style.css';

//Random JS Codes for test

(function () {
    // body of the function
    console.log("Hello webpack you are awesome!");
  }());

  // A simple function

var greet = function(person, greeting) {
  var text = greeting + ', ' + person;
  console.log(text);
};
greet('Iwan', 'Hello');

// A Function that returns a value

var greet = function(person, greeting) {
  var text = greeting + ', ' + person;
  return text;
};

console.log(greet('Iwan','hello'));

// A Function that returns another function

var greet = function(person, greeting) {
  var text = greeting + ', ' + person;
  return function() { console.log(text); };
};

var greeting = greet('Iwan', 'Hello');
greeting();


