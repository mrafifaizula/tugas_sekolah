// import express
import express from "express";

// init express routes
const router = express.Router();

// basic router
router.get('/biodata/:nama/:tempat/:tanggal/:jenis/:agama/:alamat/:telepon/:email/:hobi/:cita_cita', (req, res) => {
    var Nama = req.params.nama; 
    var Tempat_lahir = req.params.tempat;
    var Taggal_lahir = req.params.tanggal;
    var Jenis_kelamin = req.params.jenis;
    var Agama = req.params.agama;
    var Alamat = req.params.alamat;
    var Telepon = req.params.telepon;
    var Email = req.params.email;
    var Hobi = req.params.hobi;
    var Cita_Cita = req.params.cita_cita;
    res.send(
        'Nama : ' + Nama + '<br>' +
        'Tempat Lahir : ' + Tempat_lahir + '<br>' +
        'Taggal lahir : ' + Taggal_lahir + '<br>' +
        'Jenis Kelamin : ' + Jenis_kelamin + '<br>' +
        'Agama : ' + Agama + '<br>' +
        'Alamat : ' + Alamat + '<br>' +
        'Telepon : ' + Telepon + '<br>' +
        'Email : '  + Email + '<br>' +
        'Hobi : ' + Hobi + '<br>' +
        'Cita-Cita : ' + Cita_Cita + '<br>' 
        );
});

router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah1 = bilangan1 + bilangan2;
    var tambah2 = bilangan1 - bilangan2;
    var tambah3 = bilangan1 * bilangan2;
    var tambah4 = bilangan1 / bilangan2;


    res.send(
    '<h3>Penjumlahan<h3>' +
    'bilangan ke 1 : ' + bilangan1 + '<br>' +
    'bilangan ke 2 : ' + bilangan2 + '<br>' +
    'Hasil : ' + tambah1 + '<br>' +
    '<h3>pengurangan<h3>' +
    'bilangan ke 1 : ' + bilangan1 + '<br>' +
    'bilangan ke 2 : ' + bilangan2 + '<br>' +
    'Hasil : ' + tambah2 + '<br>' +
    '<h3>perkalian<h3>' +
    'bilangan ke 1 : ' + bilangan1 + '<br>' +
    'bilangan ke 2 : ' + bilangan2 + '<br>' +
    'Hasil : ' + tambah3 + '<br>' +
    '<h3>pembagian<h3>' +
    'bilangan ke 1 : ' + bilangan1 + '<br>' +
    'bilangan ke 2 : ' + bilangan2 + '<br>' +
    'Hasil : ' + tambah4 + '<hr>' +
    "<center><h1>-_-  -_-  -_-  -_-  -_-<h1><center>"
    );
});

router.get('/bagun_datar' , (req, res) => {
    // persegi
    var sisi_persegi = 10;
    // persegi panjang
    var panjang_persegi = 20;
    var lebar_persegi = 10;
    // segitiga 
    var alassegitiga = 10;
    var tinggisegitiga = 10;
    // lingkaran
    var jari_jari_lingkaran = 10;
    // rumus
    var luas_persegi = sisi_persegi * sisi_persegi;
    var luas_persegi_panjang = panjang_persegi * lebar_persegi;
    var luas_segitiga = alassegitiga * tinggisegitiga / 2;
    var luas_lingkaran = jari_jari_lingkaran * jari_jari_lingkaran * 3.14;
    res.send(
    '<h3>persegi<h3>' +
    'sisi : ' +sisi_persegi+ '<br>'+
    'sisi : ' +sisi_persegi+ '<br>' +
    'luas : ' +luas_persegi+ '<hr>'+

    '<h3>persegi panjang<h3>' + 
    'panjang : ' +panjang_persegi+ '<br>' +
    'lebar : ' +lebar_persegi+ '<br>' +
    'luas : ' +luas_persegi_panjang+ '<hr>' +

    '<h3>segitiga<h3>' +
    'alas : ' +alassegitiga+ '<br>' +
    'tinggi : ' +tinggisegitiga+ '<br>' +
    'dibagi : 2 <br>' +
    'luas : ' +luas_segitiga+ '<hr>' +

    '<h3>lingkaran<h3>' + 
    'jari jari : ' +jari_jari_lingkaran+ '<br>' +
    'luas : ' +luas_lingkaran+ '<hr>'
    );
});

router.get('/tes/:nama/:kelas/:pts/:pas/', (req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas) / 2;

    if (rapot >= 90 && rapot <= 100){
        grade = 'Grade A'
    }else if (rapot >= 80 && rapot <=89){
        grade = 'Grade B'
    }else if (rapot >= 70 && rapot <=79){
        grade = 'Grade C'
    }else if (rapot >= 60 && rapot <=69){
        grade = 'Grade D'
    }else if (rapot >= 500 && rapot <=59){
        grade = 'Grade E'
    }else if (rapot >= 0 && rapot <=50){
        grade = 'Sing rajin Belajar'
    }else {
        var grade = 'Nilai tidak Valid'
    }


    res.send(
        'nama : ' +nama+ '<br>' +
        'kelas : ' +kelas+ '<br>' +
        'pts : ' +pts+ '<br>' +
        'pas : ' +pas+ '<br>' +
        'rapot : ' + rapot+ '<br>' +
        'keterangan : ' + grade
         
    );
});

    router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {

        var nama = req.params.nama;
        var jurusan = req.params.jurusan;
        var kelas = req.params.kelas;
        
        if (jurusan == 'RPL') {
            if (kelas == '10 RPL'){
                var ket = "Anda kelas 10 RPL"
            } else if (kelas == '11 RPL'){
                var ket = "Anda kelas 11 RPL"
            } else if (kelas == '12 RPL'){
                var ket = "Anda kelas 12 RPL"
            } else {
                var ket = "Anda Alumni cuyy"
            }
        } else if (jurusan == 'TKRO') {
            if (kelas == '10 TKRO'){
                var ket = "Anda kelas 10 TKRO"
            } else if (kelas == '11 TKRO'){
                var ket = "Anda kelas 11 TKRO"
            } else if (kelas == '12 TKRO'){
                var ket = "Anda kelas 12 TKRO"
            } else {
                var ket = "Anda Alumni cuyy"
            }
        } else if (jurusan == 'TBSM') {
            if (kelas == '10 TBSM'){
                var ket = "Anda kelas 10 TBSM"
            } else if (kelas == '11 RPL'){
                var ket = "Anda kelas 11 TBSM"
            } else if (kelas == '12 TBSM'){
                var ket = "Anda kelas 12 TBSM"
            } else {
                var ket = "Anda Alumni cuyy"
            }
        }else {
            var ket = "Jurusan tidal ada";
        }
        

        res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan :' + ket 

        );
    });

    router.get('/Starbucks/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => {

        var nama = req.params.nama
        var tanggal = req.params.tanggal
        var jenis = req.params.jenis
        var pesanan = req.params.pesanan
        var jumlah = req.params.jumlah


        if (jenis == 'Makanan') {
            if (pesanan == 'Nasi Goreng'){
                var harga = 20000
            } else if (pesanan == 'Mie Goreng'){
                var harga = 30000
            } else if (pesanan == 'Ayam Goreng'){
                var harga = 40000
            } else {
                var pesanan = "Tidak ada di daftar menu"
            }
        } else if (jenis == 'Minuman') {
            if (pesanan == 'Air Mineral'){
                var harga = 100000
            } else if (pesanan == 'Jus'){
                var harga = 20000
            } else if (pesanan == 'Kopi'){
                var harga = 30000
            } else {
                var pesanan = "Tidak ada di daftar menu"
            }
        }

        var total = harga * jumlah;

        if (total >= 100000){
            var diskon = total * 0.5
        }else {
            var diskon = 0
        }

        var total_pembayar = total - diskon;
       
        
        res.send(
            'Nama Pembeli        : ' +nama+ '<br>'+
            'Tanggal             : ' +tanggal+ '<br>'+
            'Jenis               : ' +jenis+ '<br>'+
            'Pesanan             : ' +pesanan+ '<br>'+
            'Harga               : ' +harga+ '<br>'+
            'Jumlah              : ' +jumlah+ '<br>'+
            '---------------------------------------<br>'+
            'total               : ' +total+ '<br>' +
            'Diskon 50%          : ' +diskon+ '<br>' +
            'Total Pembayaran    : ' +total_pembayar

        )

    });

    router.get('./sample', (req, res) => {

        res.send(
        '<h3>selamat datang<h3>'
        
        );
    });
 

// express default router
export default router;