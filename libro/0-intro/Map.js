// map en js
const family = new Map();

family.set('son', 'Joan');
family.set('brother', 'LLorenç');
family.set('mother', 'Marga');
family.set('father', 'Guille');

console.log(family);

family.forEach((v, k) => {console.log(k, v)})
console.log(family.get('son'));

// iterar sobre map
7
