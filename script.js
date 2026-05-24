(function () {
  const PENDING_KEY = "theta:pending";
  const CONFIRMED_KEY = "theta:confirmed";
  const subscribeBtn = document.getElementById("subscribeBtn");
  const confirmedBtn = document.getElementById("confirmedBtn");

  function showConfirmed() {
    subscribeBtn.hidden = true;
    confirmedBtn.hidden = false;
  }

  if (localStorage.getItem(CONFIRMED_KEY) === "1") {
    showConfirmed();
  }

  subscribeBtn.addEventListener("click", function () {
    localStorage.setItem(PENDING_KEY, "1");
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
