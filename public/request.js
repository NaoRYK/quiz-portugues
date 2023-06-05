const URL = "https://portugueados-server-8szouyopa-noinblake.vercel.app/api/v1/";

async function scoreboard (URL){
  const res = await fetch(`${URL}`);
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
login("naodesu")

scoreboard("https://sheetlabs.com/NAOT/pruebaApi?_limit=5")

scoreboard(URL)

