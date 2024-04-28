import { guessIfUserIsEuropean } from './guessIfUserIsEuropean'
import { guessIfUserIsBrazilian } from './guessIfUserIsBrazil'

type FormatPriceParams = {
  currency?: 'eur' | 'usd' | 'brl'
  maxFractionDigits?: number
}

export const formatPrice = (
  price: number,
  { currency, maxFractionDigits = 0 }: FormatPriceParams = {
    maxFractionDigits: 0,
  }
) => {
  const isEuropean = guessIfUserIsEuropean()
  const isBrazilian = guessIfUserIsBrazilian()
  const formatter = new Intl.NumberFormat(isEuropean ? 'fr-FR' : isBrazilian ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: currency?.toUpperCase() ?? (isEuropean ? 'EUR' : isBrazilian ? 'BRL' : 'USD'),
    maximumFractionDigits: maxFractionDigits,
  })
  return formatter.format(price)
}
