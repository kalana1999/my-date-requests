const intro = document.getElementById("intro");
const question = document.getElementById("question");
const msg = document.getElementById("message");
const popup = document.getElementById("popup");

// intro animation
setTimeout(() => {
  msg.innerHTML = " රශ්මි, මම ඔයාව හමුවෙන්න කැමතියි 💖...";
}, 2000);

setTimeout(() => {
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    question.classList.remove("hidden");
  }, 600);

}, 4000);

// submit
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

  // popup show
  popup.classList.remove("hidden");

  setTimeout(() => {

    // ✅ CLEAN FIXED MESSAGE (NO weird first line issue)
    const message =
`💖 රශ්මි
🥺 මට ඔයාව හමුවෙන්න ම ඕන ...

📅 දිනය: ${date}
⏰ වෙලාව: ${time}
💌 අදහස: ${thought || "Adarei ❤️"}`;

    const phone = "94750793109";

    const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    popup.classList.add("hidden");

  }, 1200);

});