//**1 EJERCICIO: INTERES BANCARIO */
var name;
var dinner;
dinner=prompt("Digite su deposito");
name=prompt("Digite su nombre");
interes=0.02;
month=60;
total=dinner*interes;
sum=total*month;
result=parseInt(dinner)+parseInt(sum);
document.write(result);


//**2 EJERCICIO:MANZANAS */
var kilo=4200;
var discount
var total=prompt("Ingrese los kilos adquiridos",total);
console.log("Los kilos ingresados son:  ",total)
if(total<=2){
    discount=total*kilo*0/100;
}
if(total>2,1 && total<=5){
    discount=total*kilo*10/100; 
}
if(total>5,1 && total<=10){
    discount=total*kilo*15/100; 
}
if(total>=10,1){
    discount=total*kilo*20/100; 
}
console.log("El valor total a pagar es: ",total*kilo);
console.log("El valor a pagar con descuento es:  ",total*kilo-discount);
alert("GRACIAS POR SU COMPRA");


//**3 EJERCICIO: FUNCION */
var x=0;
var y=0;
let count=[];
let sum=0;
  for (let x = 1; x <=10; x++) {
        y=(x*x)-2*x;  
        console.log(y); 
        sum=y+y; */          
};
for (let x = 1; x<=10;x++) {
    y=(x*x)-2*x; 
    y=sum+count[1];
    console.log("La suma de los numeros es:",y);
}


//**4 EJERCICIOS:SUMA DE DIGITOS */
var to=0;
var num=prompt("Ingresar numero");
num.split('').forEach(num => to+= parseInt(num));
document.write("<h1>La suma de los digitos ingresados es:  </h1>"+to);

//**5 EJERCICIO:SALARIO */
var doc;
var name;
var money;
var day;
var ven;
var adelan;
prompt("Ingrese su numero de documento de identidad",doc);
prompt("Ingrese su nombre",name);
prompt("Ingrese su salario",money);
prompt("Ingrese los dias que laboró",day);
prompt("Ingrese valor total de las ventas que realizó",ven);
prompt("Ingrese monto de prestamos",adelan);

if(salario<=1562484){
    var cal=(money*day)/30;
    var preve=ven*0.2;
    var transpo=(88.211*day)/30;
    var preve=ven*0.2;
    var deposit=adelan;
    var tot=(cal+preve+transpo)-deposit;
}
document.write("Documento de identidad: "+doc+  "<br>");
document.write("Empleado: "+name+ "<br>");
document.write("Salario basico: "+money+ "<br>");
document.write("Auxilio de Transporte: "+transpo+ "<br>");
document.write("Prestamos: "+posit+ "<br>");
document.write("Salario total a recibir"+tot+ "<br>");


//**8 EJERCICIO: LLAMADAS */
var duration
prompt("Ingrese tiempo de la llamada");
if (duration<=3){
    document.write("El total a pagar es:"+"<br>");
    document.write(duration*200);
   
}
else if(duration>3){
  
    document.write("El total a pagar es:"+"<br>");
    document.write(duration*30+510);
}
