(function() {
  // wrap in an IIFE 
  // -- keeps from clashing with other applications/libraries
  // -- prevents polluting the global scope

  // used to get a random quote. Should be pulled in from some internal module library
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 
