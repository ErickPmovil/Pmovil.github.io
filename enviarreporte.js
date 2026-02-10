const form = document.getElementById("reporteForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e){
  e.preventDefault();

  mensaje.style.display = "block";

  // limpiar campos
  form.reset();
});