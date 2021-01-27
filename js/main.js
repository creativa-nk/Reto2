/*const tomate = document.querySelector(".tomate1");
/*const caja2 = document.querySelector(".caja2");


tomate.addEventListener("dragstart", e => {
    console.log("Drag start");
});

tomate.addEventListener("dragend", e => {
    console.log("Drag end");
});

tomate.addEventListener("drag", e => {
    console.log("Drag");
});


const contenedor = document.querySelector(".IMGpizza");

contenedor.addEventListener("dragenter", e => {
    console.log("Drag enter");
});


contenedor.addEventListener("dragleave", e => {
    console.log("Drag leave");
});

contenedor.addEventListener("dragover", e => {
    e.preventDefault();  //aunque hemos escrito el codigo correctamente el DROP no se va a poder ejecutar si no ponemos e.preventDefault() Dice que el navegador evite hacer algo que hace por defecto
    console.log("Drag over");
});

contenedor.addEventListener("drop", e => {
    console.log("Drop1");
    
    contenedor.appendChild(tomate); // la caja se queda dentro del contenedor
   
});

/*contenedor.addEventListener("drop", e => {
    console.log("Drop2");

contenedor.appendChild(caja2);
});
*/




/*p1 = new Drag.Move($(".tomate"),{
    droppables: $$(".pizza")[0],
    onStart: alcoger,
    onEnter: alentrar,
    onLeave: alsalir,
    onComplete: alsoltar
    });*/

//Al empezar el arrastramiento
function empezar(e ){
    //Definimos el objeto arrastrado (su Id)como Text
    e.dataTransfer.setData('Text', this.id);
    //Permitimos dejarlo en sitio de 'mover'
    e.dataTransfer.effectAllowed = 'move';
    }



 //Al llegar a la zona de destino 'List de compra'
 function pizza(e ) {
    // Dejamos mover
    e.dataTransfer.dropEffect = 'move';
    // Dejamos soltar
    return false;
    }


function soltar (e ) {
    //Indicamos el producto que ha comprado
    //creamos una imagen
    //console.log(e.dataTransfer.getData('Text'));
    imagen = new Image();
    //La imagen será igual a la que arrastramos
    imagen.src = "./img/" + e.dataTransfer.getData('Text') + '.png';
    //añadimos la imagen a la lista

   


    document.getElementById('lista').appendChild(imagen);
    var ingrediente = e.dataTransfer.getData('Text');
    var listaActual = document.getElementById('listaDeIngredientes').innerHTML;
    console.log(listaActual);
    console.log(ingrediente);
    if(listaActual=="") {
        document.getElementById('listaDeIngredientes').innerHTML =  " " + listaActual.concat(ingrediente) ;
    }
     else {
        document.getElementById('listaDeIngredientes').innerHTML =  " " + listaActual.concat(",", ingrediente) ;
     }   

    


    console.log(listaActual.concat(",", ingrediente));
    } 



    
    //Ya solo queda conectar los Div de lista y comida a las funciones que hemos creado anteriormente:
    
    //Conectamos los eventos
    //ondragover - Al mover sobre la lista
    document.getElementById('lista').ondragover = pizza;
    //ondragstart - Al empezar a arrastrar
    document.getElementById('tomate').ondragstart = empezar;
    document.getElementById('mozarella').ondragstart = empezar;
    document.getElementById('queso').ondragstart = empezar;
    document.getElementById('cebolla').ondragstart = empezar;
    document.getElementById('aceitunas').ondragstart = empezar;
    document.getElementById('baicon').ondragstart = empezar;
    document.getElementById('champiñones').ondragstart = empezar;
    document.getElementById('gorgonzola').ondragstart = empezar;
    //ondragstart - Al empezar a arrastrar
    document.getElementById('albahaca').ondragstart = empezar;
    //ondrop - Al soltar
    document.getElementById('lista').ondrop = soltar;
      


  


