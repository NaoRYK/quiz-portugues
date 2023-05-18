const pregunta = document.getElementById("quiz-question")
const answerButtons = document.querySelectorAll(".answer-button");

let hasBeenEvented = false;




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






function loadQuestion(){

    const questionNumber = Math.floor(Math.random() * preguntas.length);

    console.log("El question number es:", questionNumber)
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
    answerButtons.forEach((value) => {
        value.removeAttribute("disabled", "");
    });


    function clickButton(clicked){

        console.log("aaa" , clicked.innerText , "cuestion:", questionNumber, preguntas[questionNumber].opcionCorrecta)
        if(clicked.innerText === preguntas[questionNumber].opcionCorrecta){
        
            clicked.classList.add("correct")


            if(clicked.classList.contains("correct")){
                changeQuestion(clicked, questionNumber)
            }
            console.log("Ganaste")

        }
        else if(clicked.innerText !== preguntas[questionNumber].opcionCorrecta){



            clicked.classList.add("incorrect")
            
            if(clicked.classList.contains("incorrect")){
                changeQuestion(clicked, questionNumber)
            }


        }
        answerButtons.forEach((value) => {
            value.setAttribute("disabled", "");
        });

    }

    if(!hasBeenEvented){
        answerButtons.forEach( boton => boton.addEventListener("click", (e)=>{
            clickButton(e.target)
            e.stopPropagation()
    
    
        },false))
    }
    else{
        return
    }

    hasBeenEvented = true;

    

  
    console.log(preguntas)

}


function changeQuestion(clicked, questionNumber){
    preguntas.splice(questionNumber,1)
    setTimeout( ()=>{

        clicked.classList.remove("correct")
        clicked.classList.remove("incorrect")

          
        loadQuestion()


    }, 3000)
}

loadQuestion()