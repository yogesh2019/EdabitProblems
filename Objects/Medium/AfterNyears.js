function afterNYears(names, n) {
	for(name in names){
        names[name]+=n;
    }
    return names;
 }

names = {
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  };
console.log(afterNYears(names,1))
