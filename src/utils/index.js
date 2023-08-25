export const capitalizeFirstLetter = (str) => {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}
export const msToTime = (ms) => {
    let milliseconds = Math.floor((ms % 1000) / 100),
    seconds = Math.floor((ms / 1000) % 60).toFixed(0),
    minutes = Math.floor((ms / (1000 * 60)) % 60),
    hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;

}