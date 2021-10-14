var mirar = document.getElementById("mirar");
var btnLeft = document.querySelector("#izquierda");
var btnRight = document.querySelector("#derecha");
var numero = 0;

btnLeft.addEventListener("click", function () {
  if (numero < 0) {
    numero += 100;
    mirar.style.marginLeft = numero + "%";
    mirar.style.transition = "all 0.5s";
  }
  console.log(numero);
});

btnRight.addEventListener("click", function () {
  if (numero == -300) {
    numero = 100;
  }
  numero -= 100;
  mirar.style.marginLeft = numero + "%";
  mirar.style.transition = "all 0.5s";

  console.log(numero);
});
