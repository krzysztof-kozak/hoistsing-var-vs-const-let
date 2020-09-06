// hoisting var vs let/const

function hoist(){
  console.log(foo); // foo was moved up to the top of its scope but it was not assigned any value yet, so the default unefined value remains!
  
  console.log(bar); // bar was moved up to the top of its scope but it was not initialized it so we cannot access bar before initialization :(
 
  const bar = "Hoist me up, Scotty!" // const and let work the same in this example
  var foo = "Hoist me up, Scotty!"

}

// hoist();
// var = hoisted, and declared, and initialized, but not assigned!
// const/let = hoisted, and declared, but NOT initialized and not assigned!


// hoisting function declaration vs function expression

hoistFnDeclaration(); // The entire function is hoisted and we get the result we want:)

function hoistFnDeclaration() {
  console.log("Hoist me up, Scotty!")
}

hoistFnExpression(); // Only the variable is hoisted, and not the entire function. As we learned in the previous examples, variables declared with const/let are hoisted but are not initialized so we get an error cannot access ... before initialization.

const hoistFnExpression = function() {
  console.log("Hoist me up, Scotty!")
}
