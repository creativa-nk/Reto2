
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



      function startup() {
        var el = document.getElementsByAtribute("draggable")[0];
        el.addEventListener("touchstart", handleStart, false);
        el.addEventListener("touchend", handleEnd, false);
        el.addEventListener("touchcancel", handleCancel, false);
        el.addEventListener("touchleave", handleLeave, false);
        el.addEventListener("touchmove", handleMove, false);
      }


      function handleStart(e ){
        e.dataTransfer.setData('Text', this.id);
        e.dataTransfer.effectAllowed = 'move';
        }
    
    function pizza(e ) {
        e.dataTransfer.dropEffect = 'move';
        return false;
        }

    function handleCancel(evt) {
            evt.preventDefault();
            var touches = evt.changedTouches;
          
        for (var i=0; i<touches.length; i++) {
              ongoingTouches.splice(i, 1);  // remove it; we're done
            }
          }
    function colorForTouch(touch) {
        var id = touch.identifier;
        id = id.toString(16); // make it a hex digit
        return "#" + id + id + id;
    }
    
    
    
    function handleEnd (e ) {
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
    
        document.getElementById('tomate').ondragstart = handleStart;
        document.getElementById('mozarella').ondragstart = handleStart;
        document.getElementById('queso').ondragstart = handleStart;
        document.getElementById('cebolla').ondragstart = handleStart;
        document.getElementById('aceitunas').ondragstart = handleStart;
        document.getElementById('bacon').ondragstart = handleStart;
        document.getElementById('champiniones').ondragstart = handleStart;
        document.getElementById('gorgonzola').ondragstart = handleStart;
        document.getElementById('albahaca').ondragstart = handleStart;
    
        document.getElementById('lista').ondrop = handleEnd;
    

      


  


