import confetti from "https://cdn.skypack.dev/canvas-confetti";

document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      confetti();
      document.getElementById("container").classList.add("fun-container");
      document.getElementById("header").textContent = `🎉🤖 FunBot! 🤖🎉`;
      document.getElementById("header").classList.add("fun-header");
      document.getElementById("activity").textContent = `${data.activity}!`;
      document.getElementById("activity").classList.add("fun-activity");
      document.getElementById("get-activity").classList.add("fun-btn");
      document.getElementById("get-activity").disabled = true;
      setTimeout(function () {
        document.getElementById("get-activity").disabled = true;
        document.getElementById("header").textContent = `💤🤖 BoredBot 🤖💤`;
        document.getElementById("container").classList.remove("fun-container");
        document.getElementById("get-activity").classList.remove("fun-btn");
        document.getElementById("activity").classList.remove("fun-activity");
        document.getElementById("header").classList.remove("fun-header");
        document.getElementById("activity").textContent = "hmm...what else?";
        document.getElementById("get-activity").disabled = false;
      }, 4000);
    });
});
