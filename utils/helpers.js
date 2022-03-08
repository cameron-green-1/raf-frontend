import { motion } from 'framer-motion';

export const defaultHolding = true;
export const defaultLive = false;
export const defaultLaunch = '2022-03-30T18:30:00.000Z';

export const debugHolding = false;
export const debugLive = false;
export const debugLaunch = '2022-03-30T18:30:00.000Z';

// export const easeInOut = (val) => {
//   return 0.5 * (Math.sin((val - 0.5) * Math.PI) + 1);
// };

// export const easeInOut = (t, b, c, d) => {
//   // t is current time
//   // b is start value
//   // c is change in value
//   // d is duration
//   t /= d / 2;
//   if (t < 1) return (c / 2) * t * t + b;
//   t--;
//   return (-c / 2) * (t * (t - 2) - 1) + b;
// };

// export const slideIn = (
//   <motion.div
//     className='slide'
//     initial={{ y: '100%' }}
//     animate={{ y: '100%' }}
//     exit={{ y: 0 }}
//     transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
//   >
//     <div></div>
//     <img src='/transition.jpg' alt='' />
//   </motion.div>
// );

// export const slideOut = (
//   <motion.div
//     className='slide'
//     initial={{ y: 0 }}
//     animate={{ y: '-100%' }}
//     exit={{ y: '-100%' }}
//     transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
//   >
//     <div></div>
//     <img src='/transition.jpg' alt='' />
//   </motion.div>
// );

export const getDate = (launchTime) => {
  const convertedLaunchTime = new Date(launchTime).toLocaleDateString('en-gb'); // 18/02/2019
  const day = getDay(convertedLaunchTime.slice(0, 2));
  const month = getMonth(convertedLaunchTime.slice(3, 5));
  return `${day} ${month}`;
};

export const getDay = (n) => {
  n = parseInt(n);
  return (
    n +
    (n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : '')
  );
};

export const getMonth = (i) => {
  i = parseInt(i);
  switch (i) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      console.error('Month not found');
      break;
  }
};

export const getTime = (launchTime) => {
  let time = new Date(launchTime).toLocaleTimeString('en-gb', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });
  const regex = /0....pm/;
  const midday = regex.test(time);
  time = midday ? time.replace(/^.{2}/g, '12:') : time;
  return time;
};

export const calculateDelta = (launch) => {
  const dateCurrent = new Date();
  const dateLaunch = new Date(launch);
  const msCurrent = dateCurrent.getTime();
  const msLaunch = dateLaunch.getTime();
  const delta = msLaunch - msCurrent;
  return delta;
};

export const convertTime = (ms) => {
  // if greater than 72 hours return 72:00:00+
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
    // const days = Math.floor(ms / 86400000);

    // return `${days} DAYS`;
    return '72:00:00+';
  }
};

export const handleMobileVh = () => {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight / 100}px`
  );
  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };
  const handleResize = debounce((ev) => {
    console.log('debounce');
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}px`
    );
  }, 250);
  window.addEventListener('resize', handleResize);
};
