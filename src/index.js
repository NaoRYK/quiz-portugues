const pregunta = document.getElementById("quiz-question")
const answerButtons = document.querySelectorAll(".answer-button");






const preguntas = [

    {
        pregunta:"Cuanto es 2 + 2?", 
         opcionCorrecta: "4",
         opcion1:"2",
         opcion2:"8",
         opcion3:"6",
    },

    {
        pregunta:"Cuanto es 2 + 3?", 
         opcionCorrecta: "5",
         opcion1:"3",
         opcion2:"4",
         opcion3:"2",
    },

    {
        pregunta:"Cuanto es 1 + 2?", 
         opcionCorrecta: "3",
         opcion1:"7",
         opcion2:"4",
         opcion3:"1",
    },
    {
        pregunta:"Como se dice nosotros en portugues?", 
         opcionCorrecta: "nos",
         opcion1:"ela",
         opcion2:"ele",
         opcion3:"voces",
    }
    
]






function loadQuesiton(){

    const questionNumber = Math.floor(Math.random() * preguntas.length);


    valoresPreguntas = Object.values(preguntas[questionNumber])


    pregunta.innerHTML =valoresPreguntas[0]
    valoresPreguntas.shift();
    

    function changeButtons(){

        
        answerButtons.forEach((boton) =>{
            
            const randomQuestion = Math.floor(Math.random() * valoresPreguntas.length);
            boton.innerText = valoresPreguntas[randomQuestion];
       
            valoresPreguntas.splice(randomQuestion,1)
         

        }  )
    }

    changeButtons()


    function clickButton(clicked){

        console.log("aaa" , clicked.innerText , preguntas[questionNumber].opcionCorrecta)
        if(clicked.innerText === preguntas[questionNumber].opcionCorrecta){
            console.log("Ganaste")
            clicked.classList.add("correct")

            changeQuestion(clicked, questionNumber)
        }
        else{

            clicked.classList.add("incorrect")
            changeQuestion(clicked, questionNumber)

        }

    }
    answerButtons.forEach( boton => boton.addEventListener("click", (e)=>{
        clickButton(e.target)


    },false))
    

  
    console.log(preguntas)

}


function changeQuestion(clicked, questionNumber){
    
    setTimeout( ()=>{

        clicked.classList.remove("correct")
        clicked.classList.remove("incorrect")

        if(preguntas.length > 0){
            preguntas.splice(questionNumber,1)
            loadQuesiton()
        }else{
            document.body.innerHTML = "RAJA DE ACA YA TERMINÓ"
        }


    }, 3000)
}

loadQuesiton()