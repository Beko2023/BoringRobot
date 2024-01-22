import confetti from "https://cdn.skypack.dev/canvas-confetti";

document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = `${data.activity}!`;
      confetti();
      document.getElementById("container").classList.add("fun-container");
      document.getElementById("header").textContent = `🎉🤖 FunBot! 🤖🎉`;
      document.getElementById("header").classList.add("fun-header");
      document.getElementById("get-activity").classList.add("fun-btn");
      document.getElementById("activity").classList.add("fun-activity");
      setTimeout(function () {
        document.getElementById("header").textContent = `💤🤖 BoredBot 🤖💤`;
        document.getElementById("container").classList.remove("fun-container");
        document.getElementById("get-activity").classList.remove("fun-btn");
        document.getElementById("activity").classList.remove("fun-activity");
        document.getElementById("header").classList.remove("fun-header");
        document.getElementById("activity").textContent = "hmm...what else?";
      }, 4000);
    });
});
