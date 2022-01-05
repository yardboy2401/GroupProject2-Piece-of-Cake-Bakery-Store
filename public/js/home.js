//function to log user out after 15mins of inactivity
var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events for mouse move or keypress
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
  
    function logoutMeOut() {
      logout();
    }
  
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logoutMeOut, 900000);
      // 1000 milliseconds = 1 second => equals timeout in 15mins
    }
  };
  
  window.onload = function () {
    inactivityTime();
  };