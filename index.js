function secure() {
  document.getElementById("allafterall").style.visibility = "hidden";
}

function hellnah() {
  const yesButton = document.getElementById("button1");
  const nahButton = document.getElementById("button2");

  let clickCount = 0;

  if (nahButton) {
    nahButton.addEventListener("click", function () {
      if (clickCount < 4) {

        clickCount++;

        if (clickCount === 4) {
          nahButton.disabled = true;
          nahButton.removeEventListener("click", arguments.callee);
        }
      }
    });
  } else {
    console.error("Element with id 'button1' not found.");
  }
}

var button1Texts = [
  "Ar tikrai?",
  "Wow, nesitikėjau",
  "Aš sužavėtas",
  "Jeigu jau nori...",
  "Susitinkam kada :)",
];

var button2Texts = [
  "Haha, juokinga tu",
  "Aš irgi panašu humoro jausmą turiu",
  "Tai vat, pajuokavome, o dabar rimtai. Tu gi žinai ką spausti.",
  "Baik bajerius, aš žinau kas tau patinka, tu žinai kas man patinka, mes gi vienas kitam idealus esam",
  "Prašau nereikia, gi pasirink teisingą variantą, tai nieko nekainuoja. Nei viena dar nėra manęs atstumusi, cmon. Aš žinau, kad tu normali. Please. You can do it GIRL! Galvojau, galvoju ir galvosiu apie mus. Taigi... Ką nusprendei? Gal jau esi apsisprendus? Jeigu apsisprendei, tai... Žinai gi ką reikia spausti. :))))) :3 Taip?",
];

var currentIndexButton1 = 0;
var currentIndexButton2 = 0;

function updateText(buttonId) {
  var button = document.getElementById(buttonId);
  if (buttonId === "button1") {
    if (currentIndexButton1 < button1Texts.length - 1) {
      currentIndexButton1++;
      button.innerText = button1Texts[currentIndexButton1];
    } else {
      document.body.style.backgroundImage = "url('hearts.gif')";
      document.body.style.backgroundSize = "cover";
      document.getElementById("allinall").style.visibility = "hidden";
      document.getElementById("allafterall").style.visibility = "visible";
      document.getElementById("allinall").innerHTML = "";
      // showInput();
    }
  } else if (buttonId === "button2") {
    if (currentIndexButton2 < button2Texts.length - 1) {
      currentIndexButton2++;
      button.innerText = button2Texts[currentIndexButton2];
    } else {
      document.body.style.backgroundImage = "url('fire.gif')";
      document.body.style.backgroundSize = "cover";
    }
  }
}

var pickuplines = [
  "Jeigu tau patinka saldainiai, tai žinok, jog aš tikras vaflis.",
  "Ar tu tektoninė plokštė? Nes tu drebini mano pasaulį.",
  "Gali iškviesti greitąją? Man aštavemyliozė.",
  "Ar tu angelas? Nes aš alergiškas plunksnoms... AA. AA.. APČY...",
  "Ar tu blakstiena? Nes sugebi greit krist į akį.",
  "Ar tu kava? Nes dėl tavęs miegot negaliu.",
  "Ką tu? Ką vakare?",
  "Ar tu padaryta iš plazmos? Nes tu karšta."
]

function submit() {
  document.getElementById("allafterall").style.visibility = "hidden";

  var newItem = document.getElementById("inputText").value;

  var lainas = pickuplines[Math.floor(Math.random()*pickuplines.length)];

  var tekstasomenyje = document.getElementById("omeny");
  tekstasomenyje.innerHTML = "Turėsiu omenyje, " + newItem + ". ❤";
  var antrasis = document.getElementById("omeny2");
  antrasis.innerHTML = "O šiaip... " + lainas;
}
