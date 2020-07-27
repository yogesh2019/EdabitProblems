function inkLevels(inks) {
    let min = inks[Object.keys(inks)[0]];
   
    console.log(min);
    for(let ink in inks)
    {
        if(inks[ink]<min)
           min = inks[ink] ;
           
    }
    console.log(min)
}

inks = {
    "cyan": 6543,
	"magenta": 74543,
	"yellow": 2345678
  };
inkLevels(inks);

// const inkLevels = inks => Math.min(...Object.values(inks));
// function inkLevels(inks) {
// 	return Object.values(inks).sort((a, b) => a - b)[0];
// }