var listaPalabras = [pregunta1 = {
    texto: "¿Cuál es el lugar más frío de la tierra?",
    opcion1: "Rusia",
    opcion2: "Indonesia",
    opcion3: "Noruega",
    opcion4: "Antartida",
    respuestaCorrecta: "Antartida"
},
pregunta2 = {
    texto: "¿Quién escribió La Odisea?",
    opcion1: "homero",
    opcion2: "Caridad Bravo Adams",
    opcion3: "Abel Santa Cruz",
    opcion4: "James Joyce",
    respuestaCorrecta: "homero"
},
pregunta3 = {
    texto: "¿Cómo se llama la capital de Mongolia?",
    opcion1: "Jujuy",
    opcion2: "AfganistánKabul",
    opcion3: "Ulan Bator",
    opcion4: "AnguilaThe Valley",
    respuestaCorrecta: "Ulan Bator"
},
pregunta4 = {
    texto: "¿Cómo se denomina el resultado de la multiplicación?",
    opcion1: "producto",
    opcion2: "sustracción",
    opcion3: "reactivo",
    opcion4: "adición",
    respuestaCorrecta: "producto"
},
pregunta5 = {
    texto: "¿Cual es el oceano mas grande del mundo?",
    opcion1: "Atlantico",
    opcion2: "Indico",
    opcion3: "Pacifico",
    opcion4: "Artico",
    respuestaCorrecta: "Pacifico"
},
pregunta6 = {
    texto: "En que año llego Cristobal Colon a America?",
    opcion1: "1492",
    opcion2: "1501",
    opcion3: "1490",
    opcion4: "1600",
    respuestaCorrecta: "1492"
},
pregunta7 = {
    texto: "¿Quien es el padre del psicoanalisis?",
    opcion1: "William James",
    opcion2: "Hippolyte Bernheim",
    opcion3: "Sigmund Freud",
    opcion4: "Jean Piaget",
    respuestaCorrecta: "Sigmund Freud"
},
pregunta8 = {
    texto: "¿Que estudia la cartografia?",
    opcion1: "Estudia la produccion de cartones",
    opcion2: "Estudia las estrellas",
    opcion3: "Estudia la escritura de cartas",
    opcion4: "Estudia los mapas",
    respuestaCorrecta: "Estudia los mapas"
},
pregunta9 = {
    texto: "¿Cual es el pais mas grande del mundo?",
    opcion1: "Rusia",
    opcion2: "Brasil",
    opcion3: "China",
    opcion4: "Estados Unidos",
    respuestaCorrecta: "Rusia"
},
pregunta10 = {
    texto: "¿En Donde esta ubicada la torre Eiffel?",
    opcion1: "Francia",
    opcion2: "España",
    opcion3: "Dinamarca",
    opcion4: "Italia",
    respuestaCorrecta: "Francia"
},
pregunta11 = {
    texto: "¿Que deporte practicaba Michael Jordan?",
    opcion1: "Rugby",
    opcion2: "Boxeo",
    opcion3: "Futbol",
    opcion4: "Basket",
    respuestaCorrecta: "Basket"
},
pregunta12 = {
    texto: "¿En que año comenzo la II guerra mundial?",
    opcion1: "1943",
    opcion2: "1939",
    opcion3: "1941",
    opcion4: "1993",
    respuestaCorrecta: "1939"
},
pregunta13 = {
    texto: "¿Cual es el pais con mas poblacion de la tierra?",
    opcion1: "Estados Unidos",
    opcion2: "Rusia",
    opcion3: "China",
    opcion4: "Brasil",
    respuestaCorrecta: "China"
},
pregunta14 = {
    texto: "¿Quien fue el general de los nazis en la segunda guerra mundial?",
    opcion1: "Bin Laden",
    opcion2: "Adolf Hitler",
    opcion3: "Napoleon",
    opcion4: "John F Kennedy",
    respuestaCorrecta: "Adolf Hitler"
},
pregunta15 = {
    texto: "¿Cual es el primer numerp primo?",
    opcion1: "5",
    opcion2: "11",
    opcion3: "7",
    opcion4: "2",
    respuestaCorrecta: "2",
}
];

const buttonPlay = document.getElementById("buttonPlay");
const containerbuttonplay = document.getElementById("container-button-play");
containerbuttonplay.style.display = "flex";
const questionArea = document.getElementById("question-area");
questionArea.style.display = "none";
const htmlQuestion = document.getElementById("questionP");

const questionContainerDiv  = document.querySelector(".question-container-div");
questionContainerDiv.style.display = "flex";


const btn1 = document.getElementById("buttonText1");
const btn2 = document.getElementById("buttonText2");
const btn3 = document.getElementById("buttonText3");
const btn4 = document.getElementById("buttonText4");

const croos = document.querySelector(".pointer-incorrect-question");
const check = document.querySelector(".pointer-correct-question");


var buttons = document.querySelectorAll("button");

let cambiarPalabra = false;
let numeroAnterior = 0;
var number = 0;
let longitudListaPalabras = listaPalabras.length-1;

let numberofCorrectPoints = 0;
let numberofIncorrectPoints = 0;

buttonPlay.addEventListener("click", () => {
containerbuttonplay.style.display = "none";
questionArea.style.display = "flex";
preguntas(number);
});



function botones() {
console.log(listaPalabras)
console.log(longitudListaPalabras)
function forPreguntas(){
    
    buttons.forEach((value)=>{
        value.onclick = ()=>{
            buttons.forEach((values)=>{
                values.setAttribute("disabled","");
            });
            if(value.innerText === listaPalabras[number].respuestaCorrecta){
                
                numberofCorrectPoints += 1;
                check.innerText= String(numberofCorrectPoints);
                
                value.setAttribute("style", "background: #74d974;");

                cambiarPalabra = true;
                setTimeout(()=>{
                    listaPalabras.forEach((value, index)=>{
                        if(number === index){
                            if(listaPalabras.length === 0){
                                console.log(listaPalabras[index]);
                                listaPalabras.splice(0,1)
                            }else{
                                console.log(listaPalabras[index]);
                                listaPalabras.splice(index,1);
                            }
                        }
                    })
                    

                    buttons.forEach((values)=>{
                        values.removeAttribute("disabled","");
                        value.setAttribute("style", "background: #f0f0f0;");
                    });

                    aleatorio = Math.floor(Math.random() * longitudListaPalabras);
                    number = aleatorio;
                    longitudListaPalabras -=1
                    preguntas(number);
                    
                },1500);
            }else{
                numberofIncorrectPoints += 1;
                croos.innerText = numberofIncorrectPoints;
                value.setAttribute("style", "background: #e97272;");
                cambiarPalabra = true;
                setTimeout(()=>{
                    
                    if(cambiarPalabra === true){
                        
                        listaPalabras.forEach((value, index)=>{
                            if(number === index){
                                if(listaPalabras.length === 0){
                                    console.log(listaPalabras[index]);
                                    listaPalabras.splice(0,1)
                                }else{
                                    console.log(listaPalabras[index]);
                                    listaPalabras.splice(index,1);
                                }
                            }
                        })
                        

                        buttons.forEach((values)=>{
                            values.removeAttribute("disabled","");
                            value.setAttribute("style", "background: #f0f0f0;");
                        });

                        aleatorio = Math.floor(Math.random() * longitudListaPalabras);
                        number = aleatorio;
                        longitudListaPalabras -=1
                        preguntas(number);

                    }
                },1500)
            }
        }
    })
};
return forPreguntas();


}

function preguntas(random) {
console.log("lista de la funcion preguntas", listaPalabras)
if(listaPalabras.length === 0){
    questionContainerDiv.style.display = "none";
    questionContainerDiv.style.height = "300px";
    questionContainerDiv.style.width = "600px";
    htmlQuestion.innerText = "HAS COMPLETADO TODAS LAS PREGUNTAS!!";

}else{
    htmlQuestion.innerText = listaPalabras[random].texto;
    btn1.innerText = listaPalabras[random].opcion1;
    btn2.innerText = listaPalabras[random].opcion2;
    btn3.innerText = listaPalabras[random].opcion3;
    btn4.innerText = listaPalabras[random].opcion4;
    botones();
}

        


    
}

