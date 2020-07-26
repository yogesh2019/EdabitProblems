// const cityFacts = ({name,population,continent}) => name+" has a population of "+population+" and is situated in "+continent;

const cityFacts = ({name,population,continent}) => `${name} has a population of ${population} and is situated in ${continent}`;

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }));

