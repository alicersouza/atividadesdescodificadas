var original = [];

function inserir() {
  var entrada = document.getElementById("entrada").value;
  original.push(entrada);
  document.getElementById("entrada").value = "";
  imprimir();
}

function imprimir() {
  document.getElementById("resultado").innerHTML = original;
}
