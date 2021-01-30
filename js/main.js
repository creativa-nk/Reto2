
function empezar(e ){
    e.dataTransfer.setData('Text', this.id);
    e.dataTransfer.effectAllowed = 'move';
    }

function pizza(e ) {
    e.dataTransfer.dropEffect = 'move';
    return false;
    }

function soltar (e ) {
    e.preventDefault();
    imagen = new Image();
    imagen.setAttribute('draggable', false);
    imagen.src = "./img/" + e.dataTransfer.getData('Text') + '.png';
    document.getElementById('lista').appendChild(imagen);
    var ingrediente = e.dataTransfer.getData('Text');
    var listaActual = document.getElementById('listaDeIngredientes').innerHTML;
    console.log(listaActual);
    console.log(ingrediente);
    if(listaActual=="") {
        document.getElementById('listaDeIngredientes').innerHTML =  " " + listaActual.concat(ingrediente) ;
    }
     else {
        document.getElementById('listaDeIngredientes').innerHTML =  " " + listaActual.concat("," + "\n" , ingrediente) ;
     }   

    


    console.log(listaActual.concat(",", ingrediente));
    } 


    document.getElementById('lista').ondragover = pizza;

    document.getElementById('tomate').ondragstart = empezar;
    document.getElementById('mozarella').ondragstart = empezar;
    document.getElementById('queso').ondragstart = empezar;
    document.getElementById('cebolla').ondragstart = empezar;
    document.getElementById('aceitunas').ondragstart = empezar;
    document.getElementById('bacon').ondragstart = empezar;
    document.getElementById('champiniones').ondragstart = empezar;
    document.getElementById('gorgonzola').ondragstart = empezar;
    document.getElementById('albahaca').ondragstart = empezar;

    document.getElementById('lista').ondrop = soltar;

    function reset(){
        location.reload();
      }
      


  


