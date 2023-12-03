class Karyawan {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }
}

class Dosen extends Karyawan {
    constructor(data) {
        super(data.nama, data.gaji);
        this.umur = data.umur;
        this.sksMengajar = data.sksMengajar;
        this.honorPerSks = data.honorPerSks;
    }

    getHonorMengajar() {
        return this.sksMengajar * this.honorPerSks;
    }

    getPotonganHonorMengajar() {
        return 0.01 * this.getHonorMengajar();
    }

    getHonorMengajarBersih() {
        return this.getHonorMengajar() - this.getPotonganHonorMengajar();
    }

    getGajiTotal() {
        const honorMengajarBersih = this.getHonorMengajarBersih();
        const potongan = this.gaji * 0.05;
        const totalGaji = this.gaji + honorMengajarBersih - potongan;
        return totalGaji;
    }
}

const dataDosen = {
    nama: 'Herlambang',
    umur: 40,
    gaji: 5000000,
    sksMengajar: 10,
    honorPerSks: 50000
};

const dosen1 = new Dosen(dataDosen);

console.log('isiDari Data Dosen 1: ');
console.log(dosen1);
console.log("Honor Mengajar : " + dosen1.getHonorMengajar());
console.log("Gaji Total : " + dosen1.getGajiTotal());
