var numeroSecreto = parseInt(Math.random() * 11);
var chances = 3;

function Adivinhar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    chances = chances - 1;
    elementoResultado.innerHTML =
      "Você deve digitar um número de 0 a 10. Resta(m) " +
      chances +
      " chance(s).";
  } else if (chute > numeroSecreto) {
    chances = chances - 1;
    elementoResultado.innerHTML =
      "O numero secreto é menor do que " +
      chute +
      ". Resta(m) " +
      chances +
      " chance(s).";
  } else {
    chances = chances - 1;
    elementoResultado.innerHTML =
      "O numero secreto é maior do que " +
      chute +
      ". Resta(m) " +
      chances +
      " chance(s).";
  }
  if (chances <= 0) {
    elementoResultado.innerHTML =
      "Acabaram as suas chances! O número que está na Bola de Cristal é o número " +
      numeroSecreto;
  }
}
