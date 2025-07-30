var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// adds one to the beginning/front
// .push or .shift to add one in a different position
constellations.unshift("Canis Major")
console.log(constellations)

// removes the last one
planets.pop()
console.log(planets)

// adds them together
var galaxy = constellations.concat (planets)
console.log(galaxy)

// changes to uppercase
var capitalStar = star.toLocaleUpperCase()
console.log(capitalStar)
