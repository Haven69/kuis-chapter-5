
class Animal {
    constructor (name, age, isMammal, makanan){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
        this.makanan = makanan;
    }

    info () {
        console.log(`Hewan ini namanya ${this.name} berusia ${this.age}, jenisnya ${this.isMammal ? 'adalah' : 'bukan'} Mamalia`);
    }
    
    makan() {
        console.log(`Hewan yang bernama ${this.name} makanannya adalah ${this.makanan}`);
    }

}


const hewan1 = new Animal('kelinci', 10, true, 'rumput');
console.log(hewan1);
hewan1.info();
const a1 = new Animal('kelinci', 3, true, 'rumput');
a1.makan();

class Elang extends Animal {
    constructor(name, age) {
        super(name, age, false, '');
    }

    fly() {
        console.log(`Hewan yang bernama ${this.name} sedang terbang`);
    }
}

const myKelinci = new Animal('labi', 2, true, 'rumput');
const myElang = new Elang('Elo', 4);

console.log(myKelinci);
myKelinci.info();

console.log(myElang);
myElang.fly();



