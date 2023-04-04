(() => {
  
  const runCounter = (endTime) => {
    const counter = document.querySelector('#promotion-counter');

    const getSecondsUntillDate = (date) => {
      const end = new Date(date);
      const seconds = end.getTime() / 1000;
      const startSeconds = Date.now() / 1000;

      return seconds - startSeconds;
    }
    const getTimerFormat = seconds => {
      if (seconds <= 0) return 'Koniec'
      
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds - h * 3600) / 60); 
      const s = Math.floor(seconds - h * 3600 - m * 60);

      return `${h} godz. ${m} min ${s} s`;
    }

    const s = getSecondsUntillDate(endTime);

    counter.innerHTML = getTimerFormat(s);
  }

  const date = new Date();
  date.setMinutes(date.getMinutes() + 1);
  const endTime = date.toISOString();
  // const endTime = '2023-03-24T14:54:00Z';

  runCounter(endTime);

  const intervalId = setInterval(() => {
    runCounter(endTime);

    if (Date.now() > date.getTime()) {
      clearInterval(intervalId);
    }
  }, 1000);

})();