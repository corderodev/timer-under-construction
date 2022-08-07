const Timer = () => {
  // specify the date and time we are counting down to
  const countDate = new Date("May 31, 2100 00:00:00").getTime();
  const now = new Date().getTime();

  // calculate remaining time
  const remainingTime = countDate - now;

  // the time in days, hours, mins, seconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  // put the time left in html tags defined by class
  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour  > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute  > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
}

// specify the time function and time in ms to countdown and display the time
setInterval(Timer, 500);