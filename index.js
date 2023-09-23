// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat() {
    destructivelyAppendCat=cats.push('Ralph') 

 }
 function destructivelyPrependCat() {
    destructivelyPrependCat=cats.unshift('Bob')
}
function destructivelyRemoveLastCat() {
    destructivelyRemoveLastCat=cats.pop()
}
function destructivelyRemoveFirstCat(params) {
    destructivelyRemoveFirstCat=cats.shift()
}
function appendCat () {
    const newCat=[...cats,"Broom"] 
    return newCat
   }
function prependCat() {
    const theCat=["Arnold",...cats]
    return theCat
   }
function removeLastCat() {
    const ycat= cats.slice(0, cats.length - 1)
    return ycat
}
function removeFirstCat() {
    const mycat= cats.slice(1)
    return mycat
}