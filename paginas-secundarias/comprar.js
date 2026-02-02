function moneyUSD(n){
  const val = Number(n || 0);
  return "$" + val.toFixed(2).replace(".", ",");
}

function qs(name){
  return new URLSearchParams(location.search).get(name);
}

const prodName = qs("name") || "Producto";
const prodPrice = Number(qs("price") || 0);
const prodImg = qs("img") || "";

document.getElementById("prodName").textContent = prodName;
document.getElementById("prodPrice").textContent = moneyUSD(prodPrice);
document.getElementById("subTotal").textContent = moneyUSD(prodPrice);
document.getElementById("total").textContent = moneyUSD(prodPrice);

const imgEl = document.getElementById("prodImg");
imgEl.src = prodImg;
imgEl.alt = prodName;

const form = document.getElementById("buyForm");

if (form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();

    let valido = true;

    const campos = [
      "nombres","apellidos","tipoId","numId","telefono","email",
      "provincia","ciudad","direccion",
      "cardNumber","cardExp","cardCvc","cardHolder"
    ];

    campos.forEach(id => {
      const input = document.getElementById(id);
      const error = document.getElementById("err-" + id);

      if(!input) return;

      if(!input.value.trim()){
        if(error) error.textContent = "Completa este campo";
        valido = false;
      }else{
        if(error) error.textContent = "";
      }
    });

    // email simple
    const email = document.getElementById("email");
    const errEmail = document.getElementById("err-email");
    if (email && email.value.trim()) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!ok) {
        if (errEmail) errEmail.textContent = "Email inválido";
        valido = false;
      }
    }

    if (valido) {
      location.href = "pedido-confirmado.html";
    }
  });
}