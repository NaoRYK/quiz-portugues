import { login,sendData,getData } from "./request.js";

const URL = "https://portugueados-server.vercel.app/api/v1/";

const buttonPlay = document.querySelector("#buttonPlay");
const containerbuttonplay = document.getElementById("container-button-play");
const containerArea = document.getElementById("container-main");
const questionArea = document.querySelector("#question-area_container");
questionArea.style.display = "none";
const htmlQuestion = document.getElementById("questionP");

const questionContainerDiv = document.querySelector(".question-container-div");
questionContainerDiv.style.display = "flex";

const highscoreArea = document.getElementById("highscore-div");

const highscoreContainer = document.getElementById("highscore-container");

const btn1 = document.getElementById("buttonText1");
const btn2 = document.getElementById("buttonText2");
const btn3 = document.getElementById("buttonText3");
const btn4 = document.getElementById("buttonText4");

const backButton = document.getElementById("back-arrow");
const highscoreButton = document.getElementById("highscore-button");

const pointsCounter = document.getElementById("points-counter");

const userInput = document.getElementById("user-input");

const loaderScore = document.querySelector(".loader");

const loaderQuestion = document.getElementById("loader");
loaderQuestion.setAttribute("style", "display: flex !important; ");
const fatherQuestion = document.getElementById('father-question');
fatherQuestion.setAttribute("style", "display: none !important; ");
var buttons = document.querySelectorAll(".option-button");



let cambiarPalabra = false;
let numeroAnterior = 0;
var number = 0;
let longitudListaPalabras;

let points = 0;
let correctPoints = 0;


let templatePreguntas;
let playerName;


function resetGame(){
    points = 0;
    correctPoints=0;
    templatePreguntas = [...listaPalabras];
    console.log(templatePreguntas)
    longitudListaPalabras =  templatePreguntas.length - 1;
    console.log("longitud", longitudListaPalabras)
}
// PASO 1: Login

function executeGame(){
    resetGame();

    const playGame = async () => {
    
        
        playerName = userInput.value;
        if(playerName === "") return;
        containerArea.setAttribute("style", "display: none !important; ");
        highscoreArea.setAttribute("style", "display: none !important; ");
        setTimeout(() => {
            questionArea.style.display = "flex";
            setTimeout(()=>{
                loaderQuestion.setAttribute("style", "display: none !important; ");
                fatherQuestion.setAttribute("style", "display: flex !important; ");
            },1000)
        }, 1000);
        try {
            
            //login
            setTimeout(async()=>{
                await login(URL,playerName);
            },1000);
            
        } catch (error) {
            console.error("El error es", error);
            if(error){
                login(URL,playerName);
            };
        };
        
        preguntas(number);
    
    };
    playGame()
}


// PASO 2: Traer preguntas del array;
const preguntas = (random) => {
    if (templatePreguntas.length === 0) {
        sendData(playerName, correctPoints,URL);
        openHighscore();

    } else {
        htmlQuestion.innerText = templatePreguntas[random].texto;
        btn1.innerText = templatePreguntas[random].opcion1;
        btn2.innerText = templatePreguntas[random].opcion2;
        btn3.innerText = templatePreguntas[random].opcion3;
        btn4.innerText = templatePreguntas[random].opcion4;
        botones();
    };
};

// PASO 3: Logica de botones
const botones = () => {
    const forPreguntas = () => {
        buttons.forEach((value) => {
            value.onclick = () => {
                buttons.forEach((values) => {
                    values.setAttribute("disabled", "");
                    values.classList.remove("option-hover");
                });
                if (value.innerText === templatePreguntas[number].respuestaCorrecta) {
                    //TODO puntos correctos
                    correctPoints += 1;

                    console.log("Aciertos", correctPoints)
                    points += 1;
                    pointsCounter.innerText = String(points) + "/20";

                    value.setAttribute("style", "background: #1992198d !important; ");

                    cambiarPalabra = true;
                    setTimeout(() => {
                        templatePreguntas.forEach((value, index) => {
                            if (number === index) {
                                if (templatePreguntas.length === 0) {
                                    templatePreguntas.splice(0, 1)
                                } else {
                                    templatePreguntas.splice(index, 1);
                                };
                            };
                        });


                        buttons.forEach((values) => {
                            values.removeAttribute("disabled", "");
                            values.setAttribute("style", "background: rgba(106, 88, 88, 0.41);");
                            values.classList.add("option-hover")
                        });

                        let aleatorio = Math.floor(Math.random() * longitudListaPalabras);
                        number = aleatorio;
                        longitudListaPalabras -= 1
                        return preguntas(number);
                    }, 1500);
                } else {
                    value.setAttribute("style", "background: #570606 !important;");
                    points += 1
                    pointsCounter.innerText = String(points) + "/20";
                    cambiarPalabra = true;
                    setTimeout(() => {
                        if (cambiarPalabra === true) {
                            templatePreguntas.forEach((value, index) => {
                                if (number === index) {
                                    if (templatePreguntas.length === 0) {
                                        templatePreguntas.splice(0, 1);
                                    } else {
                                        templatePreguntas.splice(index, 1);
                                    };
                                };
                            });


                            buttons.forEach((values) => {
                                values.removeAttribute("disabled", "");
                                values.setAttribute("style", "background: rgba(106, 88, 88, 0.41);");
                                values.classList.add("option-hover");
                            });

                            let aleatorio = Math.floor(Math.random() * longitudListaPalabras);
                            number = aleatorio;
                            longitudListaPalabras -= 1
                            preguntas(number);

                        };
                    }, 1500)
                }
            }
        })
    };
    return forPreguntas();
}



const openHighscore = () => {
    questionArea.style.display = "none";
    containerArea.style.display = "none";
    highscoreArea.style.display = "flex";
    getData(highscoreContainer, URL,renderHighscore);
};

const openHome = () => {   
    questionArea.style.display = "flex";
    containerArea.style.display = "grid";
    highscoreArea.style.display = "none";
    highscoreContainer.innerHTML="";
    userInput.value = "";
}




const renderHighscore = (object) => {
    return highscoreContainer.innerHTML += `
    <div class="highscore-player-container">
        <div class="player-highscore-name">
            <i class="fa-solid fa-user" style="color: #ffffff;"></i>
            <p class="player-name">${object.nombre}</p>

        </div>
        <div class="player-highscore-points">
            <i class="fa-solid fa-check"></i>
            <p class="player-points">${object.puntos}</p>
            
        </div>

    </div>`
}




if (backButton !== null) {
    backButton.addEventListener("click", openHome, false);
}
if (highscoreButton !== null) {
    highscoreButton.addEventListener("click", openHighscore, false);
}


window.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id !== "buttonPlay") return;
    console.log(e);
    executeGame();
}, false);