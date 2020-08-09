const anagram = (name, words) => (JSON.stringify(name.split(' ').join('').toLowerCase().split("").sort())==JSON.stringify( words.join('').toLowerCase().split("").sort()));
    



console.log(anagram("Natalie Portman", ["ornamental", "pita"]));
console.log(anagram("Justin Bieber", ["injures", "ebb", "it"]));
console.log(anagram("Chris Pratt", ["chirps", "rat"]))