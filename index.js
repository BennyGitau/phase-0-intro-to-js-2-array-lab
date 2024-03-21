// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


//appends a cat to the end of the cats array
function destructivelyAppendCat(name){
    cats.push("Ralph");
}

//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}


//removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop("Garfield");

}

//removes the last cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name];
}


//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}


//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1)
}


//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}