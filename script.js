(function () {
  const PENDING_KEY = "theta:pending";
  const CONFIRMED_KEY = "theta:confirmed";
  const subscribeBtn = document.getElementById("subscribeBtn");
  const subscribeHint = document.getElementById("subscribeHint");
  const confirmedBtn = document.getElementById("confirmedBtn");
  const eventInfo = document.getElementById("eventInfo");
  const resetBtn = document.getElementById("resetBtn");

  function showConfirmed() {
    subscribeBtn.hidden = true;
    subscribeHint.hidden = true;
    confirmedBtn.hidden = false;
    eventInfo.hidden = false;
    resetBtn.hidden = false;
  }

  function showSubscribe() {
    subscribeBtn.hidden = false;
    subscribeHint.hidden = false;
    confirmedBtn.hidden = true;
    eventInfo.hidden = true;
    resetBtn.hidden = true;
  }

  if (localStorage.getItem(CONFIRMED_KEY) === "1") {
    showConfirmed();
  }

  subscribeBtn.addEventListener("click", function () {
    localStorage.setItem(PENDING_KEY, "1");
  });

  resetBtn.addEventListener("click", function () {
    localStorage.removeItem(PENDING_KEY);
    localStorage.removeItem(CONFIRMED_KEY);
    showSubscribe();
  });

  document.addEventListener("visibilitychange", function () {
    if (
      document.visibilityState === "visible" &&
      localStorage.getItem(PENDING_KEY) === "1"
    ) {
      localStorage.removeItem(PENDING_KEY);
      localStorage.setItem(CONFIRMED_KEY, "1");
      showConfirmed();
    }
  });
})();
