// packages/billing/guessIfUserIsBrazil.ts

const brazilianUnionCountryCodes = ['BR'];
const brazilianUnionExclusiveLanguageCodes = ['pt'];

export const guessIfUserIsBrazilian = () => {
  if (typeof window === 'undefined') return false;
  return window.navigator.languages.some((language) => {
    const [languageCode, countryCode] = language.split('-');
    return brazilianUnionCountryCodes.includes(countryCode) || brazilianUnionExclusiveLanguageCodes.includes(languageCode);
  });
}
