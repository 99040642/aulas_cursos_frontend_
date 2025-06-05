function media() {
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  var c = parseFloat(document.getElementById('valor03').value);

  var maior = a;

  if (b > maior) {
    maior = b;
  }

  if (c > maior) {
    maior = c;
  }

  document.getElementById('demo').innerHTML = "Maior valor = " + maior.toString();
}