

const URL = "https://portugueados-server.vercel.app/api/v1/";

let listaPalabras = [
    pregunta1 = {
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
    }
    // pregunta4 = {
    //     texto: "¿Cómo se denomina el resultado de la multiplicación?",
    //     opcion1: "producto",
    //     opcion2: "sustracción",
    //     opcion3: "reactivo",
    //     opcion4: "adición",
    //     respuestaCorrecta: "producto"
    // },
    // pregunta5 = {
    //     texto: "¿Cual es el oceano mas grande del mundo?",
    //     opcion1: "Atlantico",
    //     opcion2: "Indico",
    //     opcion3: "Pacifico",
    //     opcion4: "Artico",
    //     respuestaCorrecta: "Pacifico"
    // },
    // pregunta6 = {
    //     texto: "En que año llego Cristobal Colon a America?",
    //     opcion1: "1492",
    //     opcion2: "1501",
    //     opcion3: "1490",
    //     opcion4: "1600",
    //     respuestaCorrecta: "1492"
    // },
    // pregunta7 = {
    //     texto: "¿Quien es el padre del psicoanalisis?",
    //     opcion1: "William James",
    //     opcion2: "Hippolyte Bernheim",
    //     opcion3: "Sigmund Freud",
    //     opcion4: "Jean Piaget",
    //     respuestaCorrecta: "Sigmund Freud"
    // },
    // pregunta8 = {
    //     texto: "¿Que estudia la cartografia?",
    //     opcion1: "Estudia la produccion de cartones",
    //     opcion2: "Estudia las estrellas",
    //     opcion3: "Estudia la escritura de cartas",
    //     opcion4: "Estudia los mapas",
    //     respuestaCorrecta: "Estudia los mapas"
    // },
    // pregunta9 = {
    //     texto: "¿Cual es el pais mas grande del mundo?",
    //     opcion1: "Rusia",
    //     opcion2: "Brasil",
    //     opcion3: "China",
    //     opcion4: "Estados Unidos",
    //     respuestaCorrecta: "Rusia"
    // },
    // pregunta10 = {
    //     texto: "¿En Donde esta ubicada la torre Eiffel?",
    //     opcion1: "Francia",
    //     opcion2: "España",
    //     opcion3: "Dinamarca",
    //     opcion4: "Italia",
    //     respuestaCorrecta: "Francia"
    // },
    // pregunta11 = {
    //     texto: "¿Que deporte practicaba Michael Jordan?",
    //     opcion1: "Rugby",
    //     opcion2: "Boxeo",
    //     opcion3: "Futbol",
    //     opcion4: "Basket",
    //     respuestaCorrecta: "Basket"
    // },
    // pregunta12 = {
    //     texto: "¿En que año comenzo la II guerra mundial?",
    //     opcion1: "1943",
    //     opcion2: "1939",
    //     opcion3: "1941",
    //     opcion4: "1993",
    //     respuestaCorrecta: "1939"
    // },
    // pregunta13 = {
    //     texto: "¿Cual es el pais con mas poblacion de la tierra?",
    //     opcion1: "Estados Unidos",
    //     opcion2: "Rusia",
    //     opcion3: "China",
    //     opcion4: "Brasil",
    //     respuestaCorrecta: "China"
    // },
    // pregunta14 = {
    //     texto: "¿Quien fue el general de los nazis en la segunda guerra mundial?",
    //     opcion1: "Bin Laden",
    //     opcion2: "Adolf Hitler",
    //     opcion3: "Napoleon",
    //     opcion4: "John F Kennedy",
    //     respuestaCorrecta: "Adolf Hitler"
    // },
    // pregunta15 = {
    //     texto: "¿Cual es el primer numerp primo?",
    //     opcion1: "5",
    //     opcion2: "11",
    //     opcion3: "7",
    //     opcion4: "2",
    //     respuestaCorrecta: "2",
    // }
];

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

const pointsCounter = document.getElementById("points-counter")

const userInput = document.getElementById("user-input");

var buttons = document.querySelectorAll("button");



let cambiarPalabra = false;
let numeroAnterior = 0;
var number = 0;
let longitudListaPalabras = listaPalabras.length - 1;

let points = 0;
let correctPoints = 0;



let playerName;

// PASO 1: Login
const playGame=async()=>{
    
    playerName = userInput.value;
    console.log(playerName)
    containerArea.setAttribute("style", "display: none !important; ");
    highscoreArea.setAttribute("style", "display: none !important; ");
    questionArea.style.display = "flex";
    try {
        //login
        const res = await fetch(`${URL}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `${playerName}`
            })
        });
    } catch (error) {
        console.error("El error es", error);
    };
    preguntas(number);
};

// PASO 2: Traer preguntas del array;
const preguntas=(random)=> {

    if (listaPalabras.length === 0) {
        sendData(playerName,correctPoints);
        openHighscore();
    } else {
        htmlQuestion.innerText = listaPalabras[random].texto;
        btn1.innerText = listaPalabras[random].opcion1;
        btn2.innerText = listaPalabras[random].opcion2;
        btn3.innerText = listaPalabras[random].opcion3;
        btn4.innerText = listaPalabras[random].opcion4;
        botones();
    };
};

// PASO 3: Logica de botones
const botones = () => {
    const forPreguntas = ()=>{
        buttons.forEach((value) => {
            value.onclick = () => {
                buttons.forEach((values) => {
                    values.setAttribute("disabled", "");
                    values.classList.remove("option-hover");
                });
                if (value.innerText === listaPalabras[number].respuestaCorrecta) {
                    //TODO puntos correctos
                    correctPoints += 1;

                    console.log("Aciertos", correctPoints)
                    points += 1;
                    pointsCounter.innerText = String(points) + "/20";

                    value.setAttribute("style", "background: #1992198d !important; ");

                    cambiarPalabra = true;
                    setTimeout(() => {
                        listaPalabras.forEach((value, index) => {
                            if (number === index) {
                                if (listaPalabras.length === 0) {
                                    listaPalabras.splice(0, 1)
                                }else {
                                    listaPalabras.splice(index, 1);
                                };
                            };
                        });


                        buttons.forEach((values) => {
                            values.removeAttribute("disabled", "");
                            values.setAttribute("style", "background: rgba(106, 88, 88, 0.41);");
                            values.classList.add("option-hover")
                        });

                        aleatorio = Math.floor(Math.random() * longitudListaPalabras);
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
                            listaPalabras.forEach((value, index) => {
                                if (number === index) {
                                    if (listaPalabras.length === 0) {
                                        listaPalabras.splice(0, 1);
                                    } else {
                                        listaPalabras.splice(index, 1);
                                    };
                                };
                            });


                            buttons.forEach((values) => {
                                values.removeAttribute("disabled", "");
                                values.setAttribute("style", "background: rgba(106, 88, 88, 0.41);");
                                values.classList.add("option-hover");
                            });

                            aleatorio = Math.floor(Math.random() * longitudListaPalabras);
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



const openHighscore=()=>{
    questionArea.style.display = "none";
    containerArea.style.display = "none";
    highscoreArea.style.display = "flex";
    return getData(renderHighscore,URL);
};

const openHome=()=>{
    questionArea.style.display = "flex";
    containerArea.style.display = "grid";
    highscoreArea.style.display = "none";
    highscoreContainer.innerHTML="";
}

const sendData = async (name, points) => {
    const res = await fetch(`${URL}score`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            score: points,
        })
    });
};

const getData =() => {
    setTimeout(async()=>{
        const res = await fetch(`${URL}scoreboard`);
        const data = await res.json();
        
        data.map(items=>{
            renderHighscore(items);
        });
    },1000)
};


const renderHighscore = (object)=>{
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




if(backButton !== null){
    backButton.addEventListener("click", openHome, false);
}
if(highscoreButton !== null){
    highscoreButton.addEventListener("click", openHighscore, false);
}


window.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.id !== "buttonPlay") return;
    console.log(e);
    playGame();
}, false);

