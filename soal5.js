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
        return totalGaji;
    }
}

const pegKontrak = new PegawaiKontrak('Helmi Andi', 30, 10000000, 2);

console.log("Isi Dari Pegawai Kontrak");
console.log(pegKontrak);
console.log('Durasi Kontrak (Tahun) : ' + pegKontrak.durasi);
console.log("Gaji Total : " + pegKontrak.getGajiTotal());
