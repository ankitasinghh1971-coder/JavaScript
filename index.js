console.log("Ankita");


/**
 * var → old way, function-scoped, can redeclare and reassign, avoid using it.
let → block-scoped, can reassign but cannot redeclare in the same scope.
const → block-scoped, cannot reassign or redeclare, best choice by default.
 */
//if you leave a variable undeclared it will be undefined
const accoundId = "Ankita";
let accountEmail = "ank257z@gmail.com";
var accountPassword = "12345"


console.table([accoundId,accountEmail,accountPassword,accountCity]);