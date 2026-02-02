const banners = [
  "img/banner1carrusel.png",
  "img/banner2carrusel.png",
  "img/banner3carrusel.png"
];

let index = 0;
let autoplay = null;

const banner = document.getElementById("banner");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function mostrarBanner(i) {
  if (!banner) return;
  banner.style.backgroundImage = `url("${banners[i]}")`;
}

function siguiente() {
  index++;
  if (index >= banners.length) index = 0;
  mostrarBanner(index);
}

function anterior() {
  index--;
  if (index < 0) index = banners.length - 1;
  mostrarBanner(index);
}

function reiniciarAuto() {
  if (autoplay) clearInterval(autoplay);
  autoplay = setInterval(siguiente, 4000); 
}

if (banner) {
  mostrarBanner(index);
  reiniciarAuto();
}

if (prev && next) {
  next.addEventListener("click", () => {
    siguiente();
    reiniciarAuto();
  });

  prev.addEventListener("click", () => {
    anterior();
    reiniciarAuto();
  });
}

const promociones = [
  {
    img: "img/bannersamsunggalaxys25ultra.png",
    nombre: "Samsung Galaxy S25 Ultra",
    incluye: "Incluye: cargador + case",
    precio: "$1.229,00",
    link: "detalles/detalleSamsungS25Ultra.html"
  },
  {
    img: "img/banneriphone17promax.png",
    nombre: "iPhone 17 Pro Max",
    incluye: "Incluye: cargador + case",
    precio: "$1.399,00",
    link: "detalles/detalleiPhone17ProMax.html"
  },
  {
    img: "img/bannerredminote15pro5g.png",
    nombre: "Redmi Note 15 Pro 5G",
    incluye: "Incluye: cargador + case",
    precio: "$799,00",
    link: "detalles/detalleRedminNote15Pro5G.html"
  }
];

let promoIndex = 0;

const promoImg = document.getElementById("promoImagen");
const promoNombre = document.getElementById("promoNombre");
const promoIncluye = document.getElementById("promoIncluye");
const promoPrecio = document.getElementById("promoPrecio");
const promoLink = document.getElementById("promoLink");

function mostrarPromo(i){
  promoImg.src = promociones[i].img;
  promoNombre.textContent = promociones[i].nombre;
  promoIncluye.textContent = promociones[i].incluye;
  promoPrecio.textContent = promociones[i].precio;
  promoLink.href = promociones[i].link;
}

document.getElementById("promoNext").onclick = () => {
  promoIndex++;
  if(promoIndex >= promociones.length) promoIndex = 0;
  mostrarPromo(promoIndex);
};

document.getElementById("promoPrev").onclick = () => {
  promoIndex--;
  if(promoIndex < 0) promoIndex = promociones.length - 1;
  mostrarPromo(promoIndex);
};

mostrarPromo(promoIndex);


