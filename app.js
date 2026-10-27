// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        // Update tab buttons
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(targetTab).classList.add('active');
    });
});

// Calculate Zakat Pendapatan (Income)
function calculateIncome() {
    const input = document.getElementById('income');
    const resultDiv = document.getElementById('incomeResult');
    const amount = parseFloat(input.value) || 0;

    if (amount <= 0) {
        alert('Sila masukkan jumlah pendapatan yang sah');
        return;
    }

    const result = ZakatLib.calculateZakat(amount);

    resultDiv.style.display = 'block';

    if (result.isEligible) {
        resultDiv.className = 'result wajib';
        resultDiv.innerHTML = `
            <h4>✅ Zakat Wajib Dibayar</h4>
            <div class="amount">${ZakatLib.formatRM(result.zakatDue)}</div>
            <div class="detail">
                <strong>Pendapatan:</strong> ${ZakatLib.formatRM(result.amount)}<br>
                <strong>Kadar zakat:</strong> 2.5%<br>
                <strong>Baki selepas zakat:</strong> ${ZakatLib.formatRM(result.amountAfterZakat)}
            </div>
        `;
    } else {
        resultDiv.className = 'result tidak-wajib';
        resultDiv.innerHTML = `
            <h4>ℹ️ Zakat Tidak Wajib Lagi</h4>
            <div class="detail">
                <strong>Pendapatan:</strong> ${ZakatLib.formatRM(result.amount)}<br>
                <strong>Nisab:</strong> ${ZakatLib.formatRM(result.nisab)}<br>
                <strong>Baki untuk capai nisab:</strong> ${ZakatLib.formatRM(result.remaining)}<br><br>
                Pendapatan anda belum mencapai nisab. Zakat tidak wajib buat masa ini.
            </div>
        `;
    }
}

// Calculate Zakat Simpanan (Savings)
function calculateSavings() {
    const input = document.getElementById('savings');
    const resultDiv = document.getElementById('savingsResult');
    const amount = parseFloat(input.value) || 0;

    if (amount <= 0) {
        alert('Sila masukkan jumlah simpanan yang sah');
        return;
    }

    const result = ZakatLib.calculateZakat(amount);

    resultDiv.style.display = 'block';

    if (result.isEligible) {
        resultDiv.className = 'result wajib';
        resultDiv.innerHTML = `
            <h4>✅ Zakat Wajib Dibayar</h4>
            <div class="amount">${ZakatLib.formatRM(result.zakatDue)}</div>
            <div class="detail">
                <strong>Simpanan:</strong> ${ZakatLib.formatRM(result.amount)}<br>
                <strong>Kadar zakat:</strong> 2.5%<br>
                <strong>Baki selepas zakat:</strong> ${ZakatLib.formatRM(result.amountAfterZakat)}<br><br>
                <em>Pastikan simpanan ini telah dimiliki selama setahun (haul)</em>
            </div>
        `;
    } else {
        resultDiv.className = 'result tidak-wajib';
        resultDiv.innerHTML = `
            <h4>ℹ️ Zakat Tidak Wajib Lagi</h4>
            <div class="detail">
                <strong>Simpanan:</strong> ${ZakatLib.formatRM(result.amount)}<br>
                <strong>Nisab:</strong> ${ZakatLib.formatRM(result.nisab)}<br>
                <strong>Baki untuk capai nisab:</strong> ${ZakatLib.formatRM(result.remaining)}<br><br>
                Simpanan anda belum mencapai nisab. Zakat tidak wajib buat masa ini.
            </div>
        `;
    }
}

// Calculate Zakat Emas/Perak (Gold/Silver)
function calculateGold() {
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const pricePerGram = parseFloat(document.getElementById('pricePerGram').value) || 0;
    const metalType = document.querySelector('input[name="metalType"]:checked').value;
    const resultDiv = document.getElementById('goldResult');

    if (weight <= 0 || pricePerGram <= 0) {
        alert('Sila masukkan berat dan harga yang sah');
        return;
    }

    const result = ZakatLib.calculateGoldZakat(weight, pricePerGram, metalType);
    const metalName = metalType === 'emas' ? 'Emas' : 'Perak';

    resultDiv.style.display = 'block';

    if (result.isEligible) {
        resultDiv.className = 'result wajib';
        resultDiv.innerHTML = `
            <h4>✅ Zakat Wajib Dibayar</h4>
            <div class="amount">${ZakatLib.formatRM(result.zakatDue)}</div>
            <div class="detail">
                <strong>${metalName}:</strong> ${result.weight}g<br>
                <strong>Harga per gram:</strong> ${ZakatLib.formatRM(pricePerGram)}<br>
                <strong>Jumlah nilai:</strong> ${ZakatLib.formatRM(result.totalValue)}<br>
                <strong>Kadar zakat:</strong> 2.5%<br><br>
                <em>Zakat emas/perak adalah untuk simpanan, bukan perhiasan yang dipakai</em>
            </div>
        `;
    } else {
        resultDiv.className = 'result tidak-wajib';
        resultDiv.innerHTML = `
            <h4>ℹ️ Zakat Tidak Wajib Lagi</h4>
            <div class="detail">
                <strong>${metalName}:</strong> ${result.weight}g<br>
                <strong>Nisab ${metalName.toLowerCase()}:</strong> ${result.nisabGrams}g<br>
                <strong>Baki untuk capai nisab:</strong> ${result.remainingGrams.toFixed(1)}g<br><br>
                ${metalName} anda belum mencapai nisab. Zakat tidak wajib buat masa ini.
            </div>
        `;
    }
}

// Calculate Zakat Perniagaan (Business)
function calculateBusiness() {
    const assets = parseFloat(document.getElementById('assets').value) || 0;
    const liabilities = parseFloat(document.getElementById('liabilities').value) || 0;
    const resultDiv = document.getElementById('businessResult');

    if (assets <= 0) {
        alert('Sila masukkan jumlah aset yang sah');
        return;
    }

    if (liabilities < 0) {
        alert('Liabiliti tidak boleh negatif');
        return;
    }

    const result = ZakatLib.calculateBusinessZakat(assets, liabilities);

    resultDiv.style.display = 'block';

    if (result.isEligible) {
        resultDiv.className = 'result wajib';
        resultDiv.innerHTML = `
            <h4>✅ Zakat Wajib Dibayar</h4>
            <div class="amount">${ZakatLib.formatRM(result.zakatDue)}</div>
            <div class="detail">
                <strong>Aset semasa:</strong> ${ZakatLib.formatRM(result.assets)}<br>
                <strong>Liabiliti semasa:</strong> ${ZakatLib.formatRM(result.liabilities)}<br>
                <strong>Aset bersih:</strong> ${ZakatLib.formatRM(result.netAssets)}<br>
                <strong>Kadar zakat:</strong> 2.5%<br><br>
                <em>Pastikan perniagaan telah berjalan selama setahun (haul)</em>
            </div>
        `;
    } else {
        resultDiv.className = 'result tidak-wajib';
        resultDiv.innerHTML = `
            <h4>ℹ️ Zakat Tidak Wajib Lagi</h4>
            <div class="detail">
                <strong>Aset semasa:</strong> ${ZakatLib.formatRM(result.assets)}<br>
                <strong>Liabiliti semasa:</strong> ${ZakatLib.formatRM(result.liabilities)}<br>
                <strong>Aset bersih:</strong> ${ZakatLib.formatRM(result.netAssets)}<br>
                <strong>Nisab:</strong> ${ZakatLib.formatRM(result.nisab)}<br>
                <strong>Baki untuk capai nisab:</strong> ${ZakatLib.formatRM(result.remaining)}<br><br>
                Aset bersih perniagaan belum mencapai nisab. Zakat tidak wajib buat masa ini.
            </div>
        `;
    }
}

// Enable Enter key to calculate
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const tab = input.closest('.tab-content').id;
            switch(tab) {
                case 'pendapatan': calculateIncome(); break;
                case 'simpanan': calculateSavings(); break;
                case 'emas': calculateGold(); break;
                case 'perniagaan': calculateBusiness(); break;
            }
        }
    });
});

// WhatsApp share function
function shareViaWhatsApp() {
    const text = 'Kalkulator Zakat - Kira zakat pendapatan, simpanan, emas dan perniagaan dengan mudah dan tepat. Percuma! 🕌';
    const url = 'https://faridrameli.github.io/kalkulator-zakat/';
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n\n' + url)}`;
    window.open(whatsappUrl, '_blank');
}
