
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2") };

const texts = [
	"",
	"TOCA AQUI π§π",
	"TOCA AQUI π§π",
	"(γ£ββΏβ)γ£ π",
	"ππ PARA: ππ",
	" β€ KASS β€ ",
	"DEFINITIVAMENTE",
	"ERES LA CHICA β€",
	"MΓS LINDA β€,",
	"β€INTELIGENTEβ€",
	"E",
	"β INCREIBLE β",
	"DE ESTE",
	"MUNDO π",
	"TE QUIERO MUCHO β€",
	"EN VERDAD β€,",
	"GRACIAS POR EXISTIR.",
	"POR UN AΓO",
	"MΓS JUNTOS",
	"DONDE LAS RISAS Y ",
	"EL CHISMECITO NO FALTE",
	"GRACIAS POR",
	"HACERME REIR TANTO",
	"ADEMΓS DE ESTAR",
	"AHΓ CUANDO LO NECESITO",
	"DE NUEVO GRACIAS POR EXISTIR",
	"NO ME CANSARΓ DE DECIRLO",
	"MEEEEE ENCANTAAAAAS",
	"UUUUUN CHIIIIIIINGO",
	"POR TODO LO QUE ERES",
	"AMO TUS AUDIOS LARGOS",
	"Y AMO TU RISA β€",
	"COMO NO TIENES UNA IDEA",
	"β₯",
	"β₯ β₯",
	"β₯ β₯ β₯",
	"β₯ β₯ β₯ β₯",
	"β₯ β₯ β₯ β₯ β₯",
	"β₯ β₯ β₯ β₯ β₯ β₯",
	"β₯ β₯ β₯ β₯ β₯ β₯ β₯",
	"β₯ β₯ β₯ β₯ β₯ β₯ β₯",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β€λΉμ μ μ¬λν΄μβ€",
	"β₯ β₯ β₯",
	"β₯ β₯ β₯",
	"β₯ β₯ β₯",
	"β₯ β₯ β₯",
	"π«°π» β₯ π«°π»",
	"π«°π» β₯ π«°π»",
	"π«°π» β₯ π«°π»",
	"ππ» β₯ ππ»",
	"ππ» β₯ ππ»",
	"NO TODOS LOS DΓAS",
	"SON BONITOS",
	"PERO . . .",
	"TΓ SI ERES BONITA",
	"TODOS LOS DΓAS β€οΈπ₯°",
	"πββπ₯βπͺβ",
	"β­πβ­",
	"πͺββπ₯βπ",
	"β­πβ­",
	"πββπ₯βπͺβ",
	"FELIIIZ NAVIDAD!!!",
	"Y AΓO NUEVO!!",
	"π―π₯ 2023 ππ",
	"",
	"VA DE NUEVO uwu β€",
	"π",
];


// Controla la velocidad de morphing.
const morphTime = 1;
const cooldownTime = 0.50;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

// esto es lo que aplica el filtro de desenfoque al texto.
function setMorph(fraction) {
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

// Bucle de animaciΓ³n, que se llama cada fotograma.
function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}
function PlayAudio(){
	document.getElementById("skz").play();
}
// Start the animation.
animate();
