 var bultos = [];
 var cargas= [];
 var pesoTotal = 0;
 var valorTotal = 0;

function Cargar() {
    var tabla = document.getElementById("tb");
    var bu = document.getElementById('bult').value;
    var valor = 0;
    var carga = {};

if (bu < 501 && bu != "" && bu > 0 && pesoTotal < 18000) {

     tb.style.visibility = "visible";

     if(bu <=25)
     valor = 0;
     else if(bu >= 26 && bu <= 300)
     valor = 1500*bu;
     else if(bu >= 301 && bu <= 500)
     valor = 2500*bu;

     valorTotal += valor;
     pesoTotal += parseInt(bu, 10);
     carga= {item: bultos.length + 1,
                   peso: bu,
                   pesoTotal: pesoTotal,
                   valor: valor, valorTotal:
                   valorTotal};

     cargas.push(carga);
     var item = "<tr><td>"+carga.item+"</td><td>"+carga.peso+"</td><td>"+carga.pesoTotal+"</td><td>"+carga.valor+"</td><td>"+carga.valorTotal+"</td></tr></tbody>"
     tabla.innerHTML = tabla.innerHTML.replace("</tbody>", item )
     bultos.push(bu);

     lb.style.visibility = "visible";
     lc.style.visibility = "visible";
     ld.style.visibility = "visible";
     le.style.visibility = "visible";
     lh.style.visibility = "visible";
     lg.style.visibility = "visible";

     var pro = pesoTotal/bultos.length
     var prod = pro.toFixed(2);

     document.getElementById("valor").innerHTML = bultos.length;
     document.getElementById("valor1").innerHTML = Math.max.apply(null, bultos) + " Kg";
     document.getElementById("valor2").innerHTML = Math.min.apply(null, bultos) + " Kg";
     document.getElementById("valor3").innerHTML = prod + " Kg";
     document.getElementById("valor4").innerHTML =  "$  "+ valorTotal;
     document.getElementById("valor5").innerHTML = "$USD  "+ (valorTotal*0.00027);

  }else if (pesoTotal >= 18000)
       window.alert("Limite de peso alcanzado");
   else if (bu == "" )
       window.alert("Por favor ingrese un valor");
   else if (bu >= 501)
       window.alert("El bulto no es permitido pesa mas de 500 Kg");
   else
       window.alert("Peso no permitido");
}
