var timer;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    function startTimer() {
      timer = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
      clearInterval(timer);
    }

    function resetTimer() {
      clearInterval(timer);
      hours = 0;
      minutes = 0;
      seconds = 0;
      document.querySelector(".time").textContent = "00:00:00";
    }

    function updateTimer() {
      seconds++;

      if (seconds >= 60) {
        seconds = 0;
        minutes++;

        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }

      var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
      document.querySelector(".time").textContent = timeString;
    }

    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }