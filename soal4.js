class Pegawai {
    constructor(nama, umur, gaji) {
        this.nama = nama;
        this.umur = umur;
        this.gaji = gaji;
    }

    getInfo() {
        console.log(`Nama   : ${this.nama}`);
        console.log(`Umur   : ${this.umur}`);
        console.log(`Gaji   : ${this.gaji}`);
    }

    getPotongan() {
        if (this.gaji > 8000000) {
            return this.gaji * 0.02;
        } else {
            return this.gaji * 0.01;
        }
    }
}

class KaryawanTetap extends Pegawai {
    constructor(nama, umur, gaji, jabatan) {
        super(nama, umur, gaji);
        this.jabatan = jabatan;
    }

    getInsentif() {
        switch (this.jabatan.toLowerCase()) {
            case 'manager':
                return 5000000;
            case 'ass manager':
                return 3000000;
            case 'supervisor':
                return 2000000;
            default:
                return 0;
        }
    }

    getGajiTotal() {
        const insentif = this.getInsentif();
        const potongan = this.getPotongan();
        const totalGaji = this.gaji + insentif - potongan;
        console.log(`Total Gaji : ${totalGaji}`);
    }
}

const karyawan1 = new Pegawai('Asep', 30, 10000000);
karyawan1.getInfo();
console.log(`Potongan  : ${karyawan1.getPotongan()}`);

const karyawan2 = new KaryawanTetap('Susi', 28, 7000000, 'manager');
karyawan2.getInfo();
console.log(`Insentif  : ${karyawan2.getInsentif()}`);
karyawan2.getGajiTotal();

class PegawaiTetap extends Pegawai {
    constructor(nama, umur, gaji, jabatan) {
        super(nama, umur, gaji);
        this.jabatan = jabatan;
    }

    getInsentif() {
        switch (this.jabatan.toLowerCase()) {
            case 'manager':
                return 5000000;
            case 'ass manager':
                return 3000000;
            case 'supervisor':
                return 2000000;
            default:
                return 0;
        }
    }

    getGajiTotal() {
        const insentif = this.getInsentif();
        const potongan = this.getPotongan();
        const totalGaji = this.gaji + insentif - potongan;
        return totalGaji;
    }
}

const pegTetap = new PegawaiTetap('Budianto Tanuwijaya', 35, 10000000, 'manager');

console.log("Isi Dari Pegawai Tetap");
console.log(pegTetap);
console.log("Gaji Insentif  : " + pegTetap.getInsentif());
console.log("Gaji Total  : " + pegTetap.getGajiTotal());
