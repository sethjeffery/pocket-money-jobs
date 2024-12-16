export default function toPoundsPence(
  value: any,
  largeCurrencySign = '£',
  smallCurrencySign = 'p'
): string {
  if (!value || value === '0') return ''

  const strValue = String(value || '')
  if (parseInt(strValue) >= 100) {
    // pounds
    const poundsValue =
      parseInt(strValue) % 100 === 0
        ? parseInt(strValue) / 100
        : (parseFloat(strValue) / 100).toFixed(2)
    return `${largeCurrencySign}${poundsValue}`
  } else {
    // pence
    return strValue + smallCurrencySign
  }
}
