export const formatNumber = (number: number) => {
  const numberDivided = number / 1000
  if (numberDivided < 1) return number
  if (numberDivided > 100) return `${Number(numberDivided)}k`
  return `${numberDivided.toFixed(1)}k`
}