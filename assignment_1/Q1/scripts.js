"use strict"
const isleapyear=function(year){
   return (year% 100 === 0)? (year% 400 === 0) :(year% 4 === 0);
}
console.log(isleapyear(2000));
console.log(isleapyear(2001));
