// // //**1 EJERCICIO: INTERES BANCARIO */
// var valorPresente=parseInt(prompt("Ingrese en NUMEROS la cantidad de dinero que desea depositar"));
// alert("El interés reconocido mensualmente es del 2% del monto total depositado");
//  document.write("<h1>El valor depositado es:  </h1>"+valorPresente)
// var high=valorPresente*Math.pow(1+0.02,60);
// document.write("<h2>Interes en 5 años</h2>"+high)




//**2 EJERCICIO:FRUTERIA */
var kilo;
var kilos=4200;

var kilo=prompt("Ingrese el NUMERO  de kilos adquiridos",kilo);

console.log("Los kilos a comprar son: ",kilo);
if(kilo <=2){
    descuento=kilo*kilos*0/100;
}
if(kilo >2,1 && kilo <=5,0){
    descuento=kilo*kilos*10/100;

    
}

if(kilo >=5,1 && kilo <=10){
    descuento=kilo*kilos*15/100;


    }

    if(kilo >=10,1){
        descuento=kilo*kilos*20/100;

     
        }
 console.log  ("E total de kilos es ",kilo*kilos) ;    
console.log("la cantidad total con descuento",kilo*kilos-descuento);