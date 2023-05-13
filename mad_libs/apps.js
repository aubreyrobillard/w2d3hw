//First, create an object called words with the keys given below. Each key's property should be an empty string. This is where we will save the user's input later.
let words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}

//Now that we have our object set up, we want to work on accepting user input so that we can save it to the object.
// Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key. For example, the following prompt's user input should be saved to the number key in our words object:

const startMadLib = () => {
    words.number = prompt("Pick a number!"),
    words.adjective = prompt("Pick an adjective"),
    words.pluralNoun = prompt("Pick a plural noun"),
    words.adverb = prompt("Pick an adverb"),
    words.anotherAdjective = prompt("Pick a differnt adjective")
    buildMadLib(words)
}
startMadLib()
// console.log(words)

// Now that we've accepted the user's input and saved it to the object, we can use those values to create a MadLib!
// Use the following story and concatenate or interpolate the values from the object into it.

function buildMadLib() {
alert ("Once upon a time a group of " + words.number + " (number) General Assembly graduates got together and made a startup called " + words.adjective + " (adjective) Technologies. Their goal was to create smart " + words.pluralNoun + " (plural noun). They approached the challenge " + words.adverb + " (adverb) which ultimately lead them to " + words.anotherAdjective + " (another adjective) fame.")
} 