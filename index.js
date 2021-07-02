let message = "Hello World";
console.log(message);

let lodash = require("lodash");

let name = "travis";
console.log("Name: " + name);

name = lodash.upperFirst(name);
console.log("Revised name: " + name);

// Convert the name you saw above using lowerCase().  What did it do?

name = lodash.lowerCase(name);
console.log("lowerCase Example: " + name)
// Convert the name you saw above using upperCase().  What did it do?

name = lodash.upperCase(name);
console.log("upperCase Example: " + name)
// Convert the name you saw above using startCase().  What did it do?
name = lodash.startCase(name);
console.log("startCase Example: " + name)
 