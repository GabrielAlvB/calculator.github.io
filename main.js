const pantalla=document.querySelector(".pantalla");
// haciendo un array para todos los elementos tipo botton
const botones=document.querySelectorAll(".btn")

botones.forEach(boton=> {
    boton.addEventListener("click",()=>{
        const botonApretado= boton.textContent;
        if (boton.id==="c"){
            pantalla.textContent="0";
            return;
        }

        if (boton.id==="borrar"){
            if(pantalla.textContent.length===1 ||
                pantalla.textContent=="Infinity" || pantalla.textContent=="Syntax Error"){
                pantalla.textContent="0";
            }else{
            pantalla.textContent= pantalla.textContent.slice(0,-1);
            }
            return;
        }


        if(boton.id==="igual"){

            if(buscarCaracteresEspeciales(pantalla.textContent)){
                pantalla.textContent="Syntax Error"
            }else{
                try {
                    pantalla.textContent=eval(pantalla.textContent);
                } catch {
                    pantalla.textContent="Syntax Error";
                }
            }
            return;
        }



        if(pantalla.textContent === "0" ||
        pantalla.textContent=="Infinity" || pantalla.textContent=="Syntax Error"){
            pantalla.textContent=botonApretado;
        }else{
        pantalla.textContent += botonApretado;
        }
        //console.log(boton.textContent);
    });
});


function buscarCaracteresEspeciales(cadena) {
    // Construir la expresión regular para buscar caracteres especiales juntos
    const patron = /\/\/ | \+\+ |-- |..|\+\-|\-\+|\/\*|\*\*/;
    //En la expresión /\/\/|\*\+/g, los caracteres // y *+ están precedidos por las barras diagonales 
    // (/) que indican el inicio y el final de la expresión regular. Entre las barras diagonales, 
    //se encuentra el patrón de búsqueda.
  
    if (patron.test(cadena)) {
        return true;
      } else {
        return false;
      }
    }
  
  
 