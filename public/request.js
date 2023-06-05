const URL = "https://portugueados-server-8szouyopa-noinblake.vercel.app/api/v1/";

async function scoreboard (){
  const res = await fetch(`${URL}scoreboard`);
  const data = await res.json();
  console.log(data);
};

async function login(playerName){
  const res = await fetch(`${URL}login`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name:`${playerName}`})
  })
}

async function score(){
  const res = await fetch(`${URL}score`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      name:"pedro",
      score:20,
    })
  })
}

scoreboard()