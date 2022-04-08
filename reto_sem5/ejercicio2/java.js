let sen;
let doble;
let triple;
let hamburguesa;

do{
    hamburguesa=+prompt("ingrese opcion: 1. hamburguesa sencilla 2.hamburguesa doble  3.hamburguesa triple ");
    switch(hamburguesa){
        case 1:
            sen=20+(20*0.05);
            console.log("el precio de la hamburguesa es"+sen);
        break;
        case 2:
            doble=25+(25*0.05);
            console.log("el precio de la hamburguesa es"+doble);
        break;
        case 3:
            triple=28(28*0.05);
            console.log("el precio de la hamburguesa es"+triple);
        break;
        
        default :
            alert("opcion incorrecta");
            
        break;
    } 
}while(hamburguesa!==1 && hamburguesa!==2 && hamburguesa!==3)


