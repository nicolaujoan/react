// palabra class
// constructor

// no se pueden definir atributos, deben pasarse a los constructores

class Device {
    constructor (name, price = 66.6) {
        this.name = name;
        this.price = price;
    }

    start () {
        console.log('Starting...');
    }

    doStuff () {
        console.log(`${this.name} doing stuff`);
    }
}

const myPhone = new Device('nokia 3');
myPhone.doStuff();
console.log(myPhone.name);
