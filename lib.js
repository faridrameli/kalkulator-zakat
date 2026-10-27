// Zakat calculation library
// Last updated: 27 Oktober 2026
// Source: JAKIM, Portal Rasmi Zakat Malaysia
const ZakatLib = {
    // Constants - UPDATE THESE VALUES WHEN GOLD PRICES CHANGE
    NISAB_AMOUNT: 15000, // RM based on 85g gold @ RM 176/g (Last updated: 27 Oct 2026)
    NISAB_GOLD_GRAMS: 85, // Standard nisab (fixed by Islamic jurisprudence)
    NISAB_SILVER_GRAMS: 595, // Standard nisab (fixed by Islamic jurisprudence)
    ZAKAT_RATE: 0.025, // 2.5% or 1/40 (fixed by Islamic jurisprudence)
    GOLD_PRICE_PER_GRAM: 176, // RM per gram (Last updated: 27 Oct 2026)
    SILVER_PRICE_PER_GRAM: 3.5, // RM per gram (Last updated: 27 Oct 2026)

    // To update nisab values:
    // 1. Check current gold price from reliable source (Bank Negara Malaysia, etc.)
    // 2. Update GOLD_PRICE_PER_GRAM above
    // 3. Calculate NISAB_AMOUNT = 85 × GOLD_PRICE_PER_GRAM
    // 4. Update "Last updated" date in this file and README.md

    /**
     * Format number as Ringgit Malaysia
     */
    formatRM(amount) {
        return 'RM ' + amount.toLocaleString('ms-MY', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    },

    /**
     * Calculate zakat on income/savings
     */
    calculateZakat(amount) {
        if (amount < this.NISAB_AMOUNT) {
            return {
                isEligible: false,
                amount: amount,
                nisab: this.NISAB_AMOUNT,
                zakatDue: 0,
                remaining: this.NISAB_AMOUNT - amount
            };
        }

        const zakatDue = amount * this.ZAKAT_RATE;
        return {
            isEligible: true,
            amount: amount,
            nisab: this.NISAB_AMOUNT,
            zakatDue: zakatDue,
            amountAfterZakat: amount - zakatDue
        };
    },

    /**
     * Calculate zakat on gold/silver
     */
    calculateGoldZakat(weightInGrams, pricePerGram, type = 'emas') {
        const nisabGrams = type === 'emas' ? this.NISAB_GOLD_GRAMS : this.NISAB_SILVER_GRAMS;
        const totalValue = weightInGrams * pricePerGram;

        if (weightInGrams < nisabGrams) {
            return {
                isEligible: false,
                weight: weightInGrams,
                nisabGrams: nisabGrams,
                totalValue: totalValue,
                zakatDue: 0,
                remainingGrams: nisabGrams - weightInGrams
            };
        }

        const zakatDue = totalValue * this.ZAKAT_RATE;
        return {
            isEligible: true,
            weight: weightInGrams,
            nisabGrams: nisabGrams,
            totalValue: totalValue,
            zakatDue: zakatDue
        };
    },

    /**
     * Calculate zakat on business
     */
    calculateBusinessZakat(assets, liabilities) {
        const netAssets = assets - liabilities;

        if (netAssets < this.NISAB_AMOUNT) {
            return {
                isEligible: false,
                assets: assets,
                liabilities: liabilities,
                netAssets: netAssets,
                nisab: this.NISAB_AMOUNT,
                zakatDue: 0,
                remaining: this.NISAB_AMOUNT - netAssets
            };
        }

        const zakatDue = netAssets * this.ZAKAT_RATE;
        return {
            isEligible: true,
            assets: assets,
            liabilities: liabilities,
            netAssets: netAssets,
            nisab: this.NISAB_AMOUNT,
            zakatDue: zakatDue
        };
    }
};
