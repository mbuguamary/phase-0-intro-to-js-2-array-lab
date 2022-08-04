// Write your solution here!

const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    cats;
}

function destructivelyPrependCat(name)
{
    cats.unshift("Bob");
    cats;
} 
function destructivelyRemoveLastCat()

{
    cats.pop();
    cats;
}

function destructivelyRemoveFirstCat()

{
    cats.shift();
    cats;
}
 function appendCat(name){
    var newArray = cats.slice();
  
  newArray.push(name)
  return newArray
  
 }
 function prependCat(name){
    var newArray = cats.slice();
  
  newArray.unshift(name)
  return newArray
  
 }

 function removeLastCat(){
    var newArray = cats.slice();
  
  newArray.pop();
  return newArray
  
 }

 function removeFirstCat(){
    var newArray = cats.slice();
  
  newArray.shift();
  return newArray
  
 }