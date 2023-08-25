export const capitalizeFirstLetter = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const PRRESSURE_UNITS = 0.750062
export const getPressureMm = (hPa) => {
  return Math.round(hPa * PRRESSURE_UNITS)
}
export const getTime = (sec) => {
  return new Date(sec * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })

}