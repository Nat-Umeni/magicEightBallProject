//Word arrays


const adjectives = ['slimy', 'warm', 'vague', 'sticky', 'polite'];

const adverbs = ['dramatically', 'angrily', 'obnoxiously', 'worriedly', 'coyly'];

const nouns = ['oven', 'cow', 'man', 'monster', 'potato'];



const adjIndex = () => {
    return Math.floor(Math.random() * 5);
};

const advIndex = () => {
    return Math.floor(Math.random() * 5);
};

const nounIndex = () => {
    return Math.floor(Math.random() * 5);
};


let chosenAdj = adjectives[adjIndex()];

let chosenAdv = adverbs[advIndex()];

let chosenNoun = nouns[nounIndex()];

/* To check that the indexes are being generated correctly
console.log(chosenAdj);
console.log(chosenAdv);
console.log(chosenNoun); */

console.log(`There once was a ${chosenNoun}, who was ${chosenAdj}, and could not help itself from staring ${chosenAdv}`);