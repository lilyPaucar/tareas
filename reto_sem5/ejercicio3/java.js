 let total=+prompt("ingrese la cantidad total de productos");
 const cantToner=+prompt("ingrese la cantidad de toner");
 const cantCabezal=+prompt("ingrese la cantidad de cabezal");
 const cantTinta=+prompt("ingrese la cantidad de tinta");

cantIngresada=cantToner+cantCabezal+cantTinta;
console.log(cantIngresada);
if(total==cantIngresada){
    alert("inventario completo");
}
else if(total>cantIngresada){
    total=total-cantIngresada;
    alert(`falta ${total} productos`);
}
else{
    total=cantIngresada-total;
    alert(`sobra ${parseInt(total)} productos`);
}