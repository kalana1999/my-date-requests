const intro = document.getElementById("intro");
const question = document.getElementById("question");
const msg = document.getElementById("message");

// smooth intro text change
setTimeout(() => {
  msg.innerHTML = "💖 රශ්මි, මම ඔයාව හමුවෙන්න කැමතියි...";
}, 2000);

// smooth transition
setTimeout(() => {
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    question.classList.remove("hidden");
  }, 600);

}, 4000);

// form submit
document.getElementById("meetForm")
.addEventListener("submit", (e) => {

  e.preventDefault();

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const thought = document.getElementById("thought").value;

  if(!date || !time){
    alert("📅 දිනයයි ⏰ වෙලාවයි දාන්නකෝ ❤️");
    return;
  }

  const message = `
💖 රශ්මි

🥺 මට ඔයාව හමුවෙන්න ආසයි...

📅 දිනය: ${date}
⏰ වෙලාව: ${time}

💌 අදහස:
${thought}
`;

  const phone = "94750793109";

  const waLink =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(waLink, "_blank");

});S