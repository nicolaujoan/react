// simbolos  --> new data type

// permite identificar de forma inequivoca e immutable la propiedad de un objeto
const smth = Symbol ();
const other = Symbol ('Just a description!');

console.log(smth);
console.log(other);

// ejemplo practico:

const mochila = {
    'bottle': {brand: 'tupperware', color: 'red'},
    'cup': {brand: 'nike', color: 'yellow'},
    'helmet': {brand: 'roll&roll', color: 'blue'}
};

console.log(mochila);
