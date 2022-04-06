// mezclando notaciones
let oneCustomer = {
    name: 'John Doe',
    'customer address': 'c/ unknown',
    '-+-+-+-': 'wtf',
    payment: {
        ptype: 'VISA',
        card: '233454353045',
        'expiry date': 'never'
    }
}

// combining object acces notations:
oneCustomer["-+-+-+-"] = 'something';
oneCustomer.payment['ptype'] = 'Account';
oneCustomer['payment'].card = '667878';
oneCustomer['payment']['expiry date'] = 'tomorrow';


// métodos como datos  (una función es como otro tipo de dato)

let student = {
    id: 2,
    name: 'monty python',
    sayHello: function() {
        return 'Hello';
    }
}

console.log(student);
console.log(student.sayHello());

// js --> interpretado y debilmente tipado
// cuidado, tratamos con objetos, no con clases

// si se quiere añadir atributos o funciones a un objeto se puede usar su propiedad prototype

student.age = 20;
student.sayGoodbye = function () {
    return 'bye';
}

console.log(student.sayGoodbye());

// 'this' keyword  --> objeto actual
// resulta util si nos queremos referir a las propiedades de un objeto

let invoice = {
    description: 'sample invoice',
    price: 100.0,
    vat: 5.0,
    subtotal: function () {
        return this.price;
    },
    total: function () {
        return this.price + ((this.price * this.vat) / 100);
    }
}

console.log(invoice)
console.log(invoice.subtotal());
console.log(invoice.total());


// simulando classes (antes de ES6)

// USO DE CONSTRUCTORES 

function Web() {
    this.url = 'http://localhost.com';
    this.name = 'Localhost';
    this.showInfo = function () {
        return this.url + ': ' + this.name;
    }
}

let oneWeb = new Web();
oneWeb.url = 'http://localhost:5000';
oneWeb.name = 'Ollivanders api';
console.log(oneWeb);
console.log(oneWeb.showInfo ());


// ES6

// destructuring  --> value extraction

// arrays
const names = ['Sam', 'foo', 'bar', 'spam', 'monty'];
const [normal, loyal, loco, hero, peter] = names;
console.log(normal);
console.log(loyal);
console.log(loco);
console.log(hero);
console.log(peter);

// se pueden omitir o saltar valores del array
const [tete, , george, ...rest] = names;
console.log(tete);  // 'Sam'
console.log(george); // 'bar'
console.log(rest) // ['spam', 'monty']


// objects

const character = {
    name: 'peter',
    nickname: 'mykw wasowsky',
    age: 23,
    roles: ['backend', 'qa']
};

const {name, roles} = character;
console.log(name);
console.log(roles);

// atajos para asignacion de propiedades en objetos
// se pueden usar variables y resumimos ya que coinciden

nombre = 'Legolas';
const race = 'Elf';
const weapons = [{type: 'bow', qty: 1}, {type: 'arrows', qty: 2}];
const caracter = {
    nombre,
    race,
    weapons,
    age: 2222
};


// cadenas como plantillas
// template literals

// curiosidad --> si es necesario incluir saltos de linea y estos se respetan
// no hace falta introducir los caracteres de salto de linea

// BUCLES

// for..in

// no hace falta definir el indice
for (i in names) {
    console.log(names[i]);
}

// podemos recorrer todas las propiedades de un objeto también
for (i in character) {
    console.log(`${i}: ${character[i]}`);
}

// for..of  -> para hacer bucles sobre cualquier iterable

// operador SPREAD
// toma todos los elementos de un array y los despliega

// util cuando se mueven valores de data structures, concatenar arrays...

const heroes = ['Frodo', 'Sam'];
const kids = ['Merin', 'Pipin'];
const chars = [...heroes, ...kids];
console.log(chars);


// paso de valores array y establecer valores por defecto
// programacion defensiva --> nos evitamos type errors

// parametros REST
// podemos usar la palabra rseservada arguments
// o parametros rest (ES6)