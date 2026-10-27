# Kalkulator Zakat

Kalkulator zakat dalam Bahasa Melayu untuk mengira zakat pendapatan, simpanan, emas dan perniagaan.

**Last Updated:** 27 Oktober 2026

## Ciri-ciri

✅ **4 jenis zakat:**
- Zakat Pendapatan (Income Zakat)
- Zakat Simpanan (Savings Zakat)
- Zakat Emas/Perak (Gold/Silver Zakat)
- Zakat Perniagaan (Business Zakat)

✅ **Mudah digunakan:**
- Antara muka bersih dan ringkas
- Pengiraan tepat mengikut kadar 2.5%
- Nisab dikemaskini berdasarkan harga emas semasa
- Responsif untuk desktop dan mobile

✅ **Privasi terjamin:**
- Semua pengiraan dilakukan dalam pelayar anda
- Tiada data dihantar ke pelayan
- Tiada akaun diperlukan
- Tiada cookies atau tracking

## Nilai Nisab Semasa

**Dikemaskini:** 27 Oktober 2026

| Jenis | Nilai Nisab |
|-------|-------------|
| Wang tunai/Simpanan | RM 15,000 (berdasarkan 85g emas @ RM 176/g) |
| Emas | 85 gram |
| Perak | 595 gram |

### Sumber Autoriti

Nilai nisab dan kaedah pengiraan berdasarkan:

- **JAKIM** (Jabatan Kemajuan Islam Malaysia): [www.islam.gov.my](https://www.islam.gov.my)
- **Portal Rasmi Zakat Malaysia**: [zakat.com.my](https://zakat.com.my)
- **Lembaga Zakat Selangor**: [zakatselangor.com.my](https://www.zakatselangor.com.my)
- **Pusat Pungutan Zakat Wilayah Persekutuan**: [zakat.com.my](https://www.zakat.com.my)

### Mengemaskini Nilai Nisab

Nilai nisab dalam kalkulator ini dikemaskini secara manual berdasarkan harga emas pasaran semasa. Untuk mengemaskini:

1. Semak harga emas semasa dari sumber yang dipercayai
2. Edit fail `lib.js`:
   - `GOLD_PRICE_PER_GRAM`: Harga emas per gram (RM)
   - `NISAB_AMOUNT`: 85g × harga emas per gram
3. Kemaskini tarikh "Last Updated" dalam README.md

**Untuk kemaskini automatik masa hadapan:** Kalkulator ini boleh disambungkan dengan API harga emas (contoh: API Bank Negara Malaysia atau API harga emas global) untuk mengemaskini nilai nisab secara automatik.

## Pengiraan Zakat

### Formula Asas

**Zakat = 2.5% × (Jumlah Harta - Liabiliti)**

Syarat wajib:
1. Harta mencapai **nisab** (threshold minimum)
2. Dimiliki selama **haul** (setahun Hijrah/lunar)
3. Harta adalah milik penuh (bukan pinjaman)

### 1. Zakat Pendapatan
- **Formula:** 2.5% × Pendapatan tahunan
- **Nisab:** RM 15,000
- Contoh: Pendapatan RM 50,000 → Zakat = RM 1,250

### 2. Zakat Simpanan
- **Formula:** 2.5% × Jumlah simpanan
- **Nisab:** RM 15,000
- **Syarat:** Wang disimpan selama setahun
- Contoh: Simpanan RM 100,000 → Zakat = RM 2,500

### 3. Zakat Emas/Perak
- **Nisab emas:** 85 gram
- **Nisab perak:** 595 gram
- **Formula:** 2.5% × (Berat × Harga per gram)
- **Catatan:** Untuk emas/perak simpanan sahaja, bukan perhiasan yang dipakai
- Contoh: 100g emas @ RM 176/g = RM 17,600 → Zakat = RM 440

### 4. Zakat Perniagaan
- **Formula:** 2.5% × (Aset Semasa - Liabiliti Semasa)
- **Nisab:** RM 15,000 (aset bersih)
- **Syarat:** Perniagaan berjalan selama setahun
- Contoh: Aset RM 200,000, Liabiliti RM 50,000 → Aset bersih RM 150,000 → Zakat = RM 3,750

## Teknologi

- HTML5, CSS3, JavaScript (vanilla)
- Tiada framework atau library
- PWA-ready (Progressive Web App)
- Mobile-first design

## Penggunaan

1. Pilih jenis zakat (tab)
2. Masukkan jumlah/berat
3. Klik "Kira Zakat"
4. Lihat hasil pengiraan

## Verifikasi Pengiraan

Kalkulator ini telah diuji dengan kes-kes berikut:

| Ujian | Input | Output | Status |
|-------|-------|--------|--------|
| Di bawah nisab | RM 10,000 | Zakat tidak wajib | ✅ Betul |
| Tepat pada nisab | RM 15,000 | Zakat = RM 375.00 | ✅ Betul |
| Di atas nisab | RM 50,000 | Zakat = RM 1,250.00 | ✅ Betul |
| Emas (85g @ RM176) | 85g × RM 176 | Zakat = RM 374.00 | ✅ Betul |
| Perniagaan | Aset RM 100k - Liabiliti RM 20k | Zakat = RM 2,000.00 | ✅ Betul |

Formula telah disahkan mengikut:
- Kadar zakat: 2.5% (1/40)
- Nisab berdasarkan 85g emas (standard JAKIM)
- Pengiraan perniagaan: Aset bersih × 2.5%

## Di mana Membayar Zakat

Setelah mengira zakat anda, bayar melalui:

### Mengikut Negeri

| Negeri | Portal | Telefon |
|--------|--------|---------|
| Wilayah Persekutuan | [zakat.com.my](https://www.zakat.com.my) | 1-300-88-6555 |
| Selangor | [zakatselangor.com.my](https://www.zakatselangor.com.my) | 03-8736 6100 |
| Johor | [zakatjohor.gov.my](https://www.zakatjohor.gov.my) | 07-224 0001 |
| Pulau Pinang | [zakatpenang.com](https://zakatpenang.com) | 04-263 1553 |
| Perak | [zakattabung.perak.gov.my](https://zakattabung.perak.gov.my) | 05-526 5432 |
| Kedah | [zakatkedah.com.my](https://www.zakatkedah.com.my) | 04-771 4455 |
| Kelantan | [e-zakat.com.my](https://www.e-zakat.com.my) | 09-748 1379 |
| Terengganu | [maidam.gov.my](https://www.maidam.gov.my) | 09-622 8765 |
| Pahang | [zakatpahang.my](https://www.zakatpahang.my) | 09-505 4300 |
| Negeri Sembilan | [mainsnet.gov.my](https://mainsnet.gov.my) | 06-760 1166 |
| Melaka | [zakatmelaka.gov.my](https://zakatmelaka.gov.my) | 06-336 5333 |
| Perlis | [zakat-perlis.my](https://www.zakat-perlis.my) | 04-976 6277 |
| Sabah | [maiwp.gov.my](https://www.maiwp.gov.my) | 088-232 688 |
| Sarawak | [tabunghaji.gov.my](https://www.tabunghaji.gov.my) | 082-580 580 |

## Penafian (Disclaimer)

⚠️ **PENTING:** Kalkulator ini adalah alat bantu untuk anggaran sahaja. Untuk kepastian mengenai kewajipan zakat anda, sila rujuk:

- **Pusat Zakat negeri anda** (lihat senarai di atas)
- **Ulama atau pegawai zakat yang berkelayakan**
- **Portal rasmi zakat negeri masing-masing**

Kewajipan zakat mungkin berbeza mengikut:
- Mazhab yang diamalkan
- Keadaan kewangan individu
- Fatwa negeri masing-masing
- Jenis harta yang dimiliki

**Kalkulator ini tidak menggantikan nasihat daripada pihak berkuasa agama yang sah.**

## Lesen

MIT License - © 2026 Farid Rameli

Percuma untuk digunakan, diubahsuai dan diedarkan.

## Hubungi

Email: 91trillionaire@gmail.com

---

**Nota:** Kalkulator ini adalah projek sumber terbuka untuk memudahkan pengiraan zakat. Tiada data peribadi anda dikumpul atau disimpan.
