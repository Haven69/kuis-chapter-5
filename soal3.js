class Karyawan {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }
}

class PegawaiKontrak extends Karyawan {
    constructor(nama, umur, gaji, durasi) {
        super(nama, gaji);
        this.umur = umur;
        this.durasi = durasi;
    }

    getGajiTotal() {
        const potongan = this.gaji * 0.1;
        const totalGaji = this.gaji - potongan;
        console.log(`Total Gaji : ${totalGaji}`);
    }
}

class Dosen extends Karyawan {
    constructor(object) {
        super(object.nama, object.gaji);
        this.nomor = object.nomor;
        this.sksMengajar = object.sksMengajar;
        this.honorPerSks = object.honorPerSks;
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
        console.log(`Total Gaji : ${totalGaji}`);
    }
}

const pegawai1 = new PegawaiKontrak('David', 25, 6000000, '6 bulan');
pegawai1.getGajiTotal();

const dataDosen = {
    nama: 'Prof. Smith',
    nomor: '12345',
    gaji: 8000000,
    sksMengajar: 10,
    honorPerSks: 2000000,
};

const dosen1 = new Dosen(dataDosen);
dosen1.getGajiTotal();
