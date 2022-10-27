export function numeros(){
    let uno = document.querySelector(".uno");
    let dos = document.querySelector(".dos");
    let tres = document.querySelector(".tres");
    let cuatro = document.querySelector(".cuatro");
    let cinco = document.querySelector(".cinco");
    let seis = document.querySelector(".seis");
    let siete = document.querySelector(".siete");
    let ocho = document.querySelector(".ocho");
    let nueve = document.querySelector(".nueve");
    let cero = document.querySelector(".cero");
    let punto = document.querySelector(".punto");
    let pantalla = document.querySelector(".numero");
    let suma = document.querySelector(".suma");
    let resta = document.querySelector(".resta");
    let multiplicacion = document.querySelector(".multiplicacion");
    let division = document.querySelector(".division");
    let resultado = document.querySelector(".resultado-boton");
    let limpiar = document.querySelector(".borrador-boton");
    let operacion,operacion1,operacion2;

    cero.addEventListener("click",zero);
    function zero(){
        pantalla.textContent= pantalla.textContent + '0';
    }

    uno.addEventListener("click",one);
    function one(){
        pantalla.textContent= pantalla.textContent + '1';
    }

    dos.addEventListener("click",two);
    function two(){
        pantalla.textContent= pantalla.textContent + '2';
    }

    tres.addEventListener("click",three);
    function three(){
        pantalla.textContent= pantalla.textContent + '3';
    }

    cuatro.addEventListener("click",four);
    function four(){
        pantalla.textContent= pantalla.textContent + '4';
    }

    cinco.addEventListener("click",five);
    function five(){
        pantalla.textContent= pantalla.textContent + '5';
    }

    seis.addEventListener("click",six);
    function six(){
        pantalla.textContent= pantalla.textContent + '6';
    }

    siete.addEventListener("click",seven);
    function seven(){
        pantalla.textContent= pantalla.textContent + '7';
    }

    ocho.addEventListener("click",eight);
    function eight(){
        pantalla.textContent= pantalla.textContent + '8';
    }

    nueve.addEventListener("click",nine);
    function nine(){
        pantalla.textContent= pantalla.textContent + '9';
    }

    punto.addEventListener("click",point);
    function point(){
        pantalla.textContent= pantalla.textContent + '.';
    }

    
    ///////////////////OPERACIONES///////////////////////

    suma.addEventListener("click",sum);
    function sum(){
        operacion1 = pantalla.textContent;
        operacion = "+";
        clean();
    }
    resta.addEventListener("click",subtraction)
    function subtraction(){
        operacion1 = pantalla.textContent;
        operacion = "-";
        clean();
    }
    multiplicacion.addEventListener("click",multiplication);
    function multiplication(){
        operacion1 = pantalla.textContent;
        operacion = "*";
        clean();
    }
    division.addEventListener("click",div);
    function div(){
        operacion1 = pantalla.textContent;
        operacion = "/";
        clean();
    }

    limpiar.addEventListener("click",limpieza);
    function limpieza(){
        reset();
    }

    resultado.addEventListener("click",res);
    function res(){
        operacion2 = pantalla.textContent;
        calculo();
    }

    function reset(){
        pantalla.textContent=" ";
        operacion = " ";
        operacion1 = 0;
        operacion2 = 0;
    }

    function clean(){
        pantalla.textContent=" ";
    }

    function calculo(){
        let r = 0;
        switch(operacion){
            case "+":
                r = parseFloat(operacion1) + parseFloat(operacion2);
                break;
            case "-":
                r = parseFloat(operacion1) - parseFloat(operacion2);
                break;
            case "*":
                r = parseFloat(operacion1) * parseFloat(operacion2);
                break
            case "/":
                r = parseFloat(operacion1) / parseFloat(operacion2);
                break
        }
        reset();
        pantalla.textContent = r;
    }
    
}





