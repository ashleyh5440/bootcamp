var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// * It's done when the string `"Canis Major"` is added as the first element of the `constellations` array and no elements are removed. 
constellations.unshift("Canis Major");

// * It's done when `"Venus"` is removed from the `planets` array.
planets.pop()
// planets = planets.slice(0,planets.length - 1);
// planets.splice(planets.length - 1, 1)

// * It's done when the arrays `constellations` and `planets` are joined to form a new array named `galaxy`. The arrays `constellations` and `planets` should not be altered.
// var galaxy = constellations.concat(planets);
var galaxy = constellations.concat(planets).concat(["Pluto"]); // since concat is a pure function, you can chain them together

// * It's done when the string `"polaris"` is converted into all capital letters and the new string is stored in a variable.

var polaris = "polaris";
polaris = polaris.toUpperCase();

console.log(constellations);
console.log(planets);
console.log(galaxy);
console.log(polaris);