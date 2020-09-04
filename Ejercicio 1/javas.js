function Cargar() {

  var ndd = document.getElementById('dist').value;
  var dar = document.getElementById('ndias').value;
  var des, total, subTotal;

  if (ndd > 7 && dar > 1000) {
    window.alert("!Felicidades Tiene un descuento del 30 %");
    subTotal = dar * 35.00;
    des = subTotal *0.30;
    total = subTotal-des;
  }
  else {
    total = dar * 35.00;
  }
    document.getElementById("valor").innerHTML = 'El precio del boleto es: ' + "<br/>" + "<br/>"+ '   $ ' + total ;
}
