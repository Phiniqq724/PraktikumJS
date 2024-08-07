class Lingkaran {
    constructor(r) {
        this.r = r;
    }

    luas() {
        return Math.PI * this.r * this.r;
    }

    keliling() {
        return 2 * Math.PI * this.r;
    }
}

class Tabung extends Lingkaran {
    constructor(r, t) {
        super(r);
        this.t = t;
    }

    volume() {
        return this.luas() * this.t;
    }

    luasPermukaan() {
        return 2 * this.luas() + this.keliling() * this.t;
    }
}

class Kerucut extends Lingkaran {
    constructor(r, t) {
        super(r);
        this.t = t;
    }

    volume() {
        return (this.luas() * this.t) / 3;
    }

    luasPermukaan() {
        return this.luas() + Math.PI * this.r * Math.sqrt(this.r * this.r + this.t * this.t);
    }
}

class Bola extends Lingkaran {
    constructor(r) {
        super(r);
    }

    volume() {
        return (4 / 3) * Math.PI * this.r * this.r * this.r;
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}

let bolaSepak = new Bola(30);
let gelas = new Tabung(15, 50);
let kerucutOren = new Kerucut(10, 40);

console.log("Volume bola sepak: " + bolaSepak.volume());
console.log("Luas permukaan bola sepak: " + bolaSepak.luasPermukaan());
console.log("Volume gelas: " + gelas.volume());
console.log("Luas permukaan gelas: " + gelas.luasPermukaan());
console.log("Volume kerucut oren: " + kerucutOren.volume());
console.log("Luas permukaan kerucut oren: " + kerucutOren.luasPermukaan());
