// Lafla — monetization constants.
//
// Keep all user-facing fallback price copy in one place. Live App Store /
// RevenueCat price strings still win at runtime, but every local fallback,
// premium preview, and release-contract test should agree with these values.

export const PRO_MONTHLY_PRICE_TRY = 99;
export const PRO_YEARLY_PRICE_TRY = 999;

export const PRO_MONTHLY_PRICE_MICROS = PRO_MONTHLY_PRICE_TRY * 1_000_000;
export const PRO_YEARLY_PRICE_MICROS = PRO_YEARLY_PRICE_TRY * 1_000_000;

export const PRO_MONTHLY_PRICE_DISPLAY = `₺${PRO_MONTHLY_PRICE_TRY} / ay`;
export const PRO_YEARLY_PRICE_DISPLAY = `₺${PRO_YEARLY_PRICE_TRY} / yıl`;
export const PRO_MONTHLY_PRICE_COMPACT = `₺${PRO_MONTHLY_PRICE_TRY}/ay`;
export const PRO_YEARLY_PRICE_COMPACT = `₺${PRO_YEARLY_PRICE_TRY}/yıl`;

export const PRO_YEARLY_PER_MONTH_TRY = Math.round(PRO_YEARLY_PRICE_TRY / 12);
export const PRO_YEARLY_PER_MONTH_DISPLAY = `≈ ₺${PRO_YEARLY_PER_MONTH_TRY} / ay`;

export const PRO_YEARLY_SAVINGS_PERCENT = Math.round(
  ((PRO_MONTHLY_PRICE_TRY * 12 - PRO_YEARLY_PRICE_TRY) /
    (PRO_MONTHLY_PRICE_TRY * 12)) *
    100,
);
export const PRO_YEARLY_SAVINGS_LABEL_TR = `%${PRO_YEARLY_SAVINGS_PERCENT} tasarruf`;
export const PRO_YEARLY_SAVINGS_LABEL_EN = `${PRO_YEARLY_SAVINGS_PERCENT}% savings`;

export const IELTS_MOCK_TEST_PRICE_TRY = 500;
export const IELTS_MOCK_TEST_PRICE_DISPLAY = `₺${IELTS_MOCK_TEST_PRICE_TRY}`;
