//elements
// nav buttons
logobtn = document.getElementById("logo-btn")
menuBtn = document.getElementById("menu")
lightdark = document.getElementById("lightdark")
// landing buttons
toProjBtn = document.getElementById("to-proj")
toAboutBtn = document.getElementById("to-about")

// Pages
LandingPg = document.getElementById("landing-pg")
// toProjBtn = document.getElementById("to-proj")
// toProjBtn = document.getElementById("to-proj")
// toProjBtn = document.getElementById("to-proj")
// toProjBtn = document.getElementById("to-proj")

toProjBtn.addEventListener("click", goToProj);

function goToProj(LandingPg) {
    alert("test")
    LandingPg.classList.add("noshow")
}