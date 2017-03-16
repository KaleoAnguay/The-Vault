'use strict';
module.exports = (function() {
  var vault = {};
  var myKey = {};
  function setValue(key,value){
    vault = value;
    myKey = key;
  }

  function getValue(key){
    if(key === myKey) {
      return vault;
    } else {
      return null;
    }
  }

  return {
    setValue,
    getValue
  };
});