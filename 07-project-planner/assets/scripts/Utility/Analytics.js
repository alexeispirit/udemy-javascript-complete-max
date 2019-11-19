const timerValue = 2000;

const intervalId = setInterval(() => {
  console.log("sending analytics...");
}, timerValue);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
