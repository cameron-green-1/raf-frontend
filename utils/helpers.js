export const calculateDelta = (launch) => {
  const dateCurrent = new Date();
  const dateLaunch = new Date(launch);
  const msCurrent = dateCurrent.getTime();
  const msLaunch = dateLaunch.getTime();
  const delta = msLaunch - msCurrent;
  return delta;
};

export const convertTime = (ms) => {
  // if greater than 72 hours return days, i.e. "4 days"
  // if less than 72 hours return HH:MM:SS, i.e. "25:57:12"

  const limitToDisplayDays = 259200000;

  if (ms < limitToDisplayDays) {
    let seconds = ms / 1000;

    // Extract hours
    const hours = parseInt(seconds / 3600); // 3600 seconds in 1 hour
    seconds = parseInt(seconds % 3600); // extract the remaining seconds after extracting hours

    // Extract minutes
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute

    // Keep only seconds not extracted to minutes:
    seconds = parseInt(seconds % 60);

    // Format so it shows a leading zero if needed
    const hoursStr =
      hours.toString().length > 2 ? hours : ('00' + hours).slice(-2);
    const minutesStr = ('00' + minutes).slice(-2);
    const secondsStr = ('00' + seconds).slice(-2);

    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  } else {
    const days = Math.floor(ms / 86400000);

    return `${days} DAYS`;
  }
};