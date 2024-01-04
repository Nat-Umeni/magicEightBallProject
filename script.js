//Word arrays (Need to add more words and change the sentence each time the program is ran, started on line 10)


const adjectives = ['slimy', 'warm', 'vague', 'sticky', 'polite', 'handsome', 'beautiful'];

const adverbs = ['dramatically', 'angrily', 'obnoxiously', 'worriedly', 'coyly'];

const nouns = ['oven', 'cow', 'man', 'monster', 'potato', 'woman'];

/*  let sentence = ''
    let sentenceArray = [`There once was a ${chosenNoun}, who was ${chosenAdj}, and could not help itself from staring ${chosenAdv}`, `Soon I will be the most ${chosenAdj} ${chosenNoun} that has ever {chosenAdv} lived.`,];



*/



//generates a random index depending on the length of the word array entered into it
const giveRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};

//assiging random indexes to arrays

let adjIndex = giveRandomIndex(adjectives);

let advIndex = giveRandomIndex(adverbs);

let nounIndex = giveRandomIndex(nouns);

//Chosen words from arrays are assined below

let chosenAdj = adjectives[adjIndex];

let chosenAdv = adverbs[advIndex];

let chosenNoun = nouns[nounIndex];


/* To check that the indexes are being generated correctly

console.log(chosenAdj);
console.log(chosenAdv);
console.log(chosenNoun); 

*/

console.log(`There once was a ${chosenNoun}, who was ${chosenAdj}, and could not help itself from staring ${chosenAdv}`);