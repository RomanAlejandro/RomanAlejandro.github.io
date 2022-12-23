
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2") };

// The strings to morph between. You can change these to anything you want!
const texts = [
	"",
	"TOCA AQUI 🎯👈",
	"TOCA AQUI 🎯👈",
	"(っ◕‿◕)っ 🎁",
	"🎄🎁 PARA: 🎁🎄",
	" ❤ KASS ❤ ",
	"DEFINITIVAMENTE",
	"ERES LA CHICA ❤",
	"MÁS LINDA ❤,",
	"❤INTELIGENTE❤",
	"E",
	"☁ INCREIBLE ☁",
	"DE ESTE",
	"MUNDO 🌎",
	"TE QUIERO MUCHO ❤",
	"EN VERDAD ❤,",
	"GRACIAS POR EXISTIR.",
	"POR UN AÑO",
	"MÁS JUNTOS",
	"DONDE LAS RISAS Y ",
	"EL CHISMECITO NO FALTE",
	"GRACIAS POR",
	"HACERME REIR TANTO",
	"ADEMÁS DE ESTAR",
	"AHÍ CUANDO LO NECESITO",
	"DE NUEVO GRACIAS POR EXISTIR",
	"NO ME CANSARÉ DE DECIRLO",
	"MEEEEE ENCANTAAAAAS",
	"UUUUUN CHIIIIIIINGO",
	"POR TODO LO QUE ERES",
	"AMO TUS AUDIOS LARGOS",
	"Y AMO TU RISA ❤",
	"COMO NO TIENES UNA IDEA",
	"♥",
	"♥ ♥",
	"♥ ♥ ♥",
	"♥ ♥ ♥ ♥",
	"♥ ♥ ♥ ♥ ♥",
	"♥ ♥ ♥ ♥ ♥ ♥",
	"♥ ♥ ♥ ♥ ♥ ♥ ♥",
	"NO TODOS LOS DÍAS",
	"SON BONITOS",
	"PERO . . .",
	"TÚ SI ERES BONITA",
	"TODOS LOS DÍAS ❤️🥰",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"❤당신을 사랑해요❤",
	"♥ ♥ ♥",
	"♥ ♥ ♥",
	"♥ ♥ ♥",
	"♥ ♥ ♥",
	"♥ ♥ ♥",
	"♥ ♥ ♥",
	"🎅  🥛 🍪 ",
	"⭐🎄⭐",
	"🍪  🥛 🎅",
	"⭐🎄⭐",
	"🎅  🥛 🍪 ",
	"FELIIIZ NAVIDAD!!!",
	"Y AÑO NUEVO!!",
	"👯🥂 2023 🎉🎉",
	"",
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

// Bucle de animación, que se llama cada fotograma.
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
