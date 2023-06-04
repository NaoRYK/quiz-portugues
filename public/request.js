const URL = "https://portugueados-server.vercel.app/api/v1/";

async function scoreboard (){
  const res = await fetch(`${URL}scoreboard`);
  const data = await res.json();
  console.log(data);
};

async function login(){
  const res = await fetch(`${URL}login`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name:"Qie"})
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
login();
score();
scoreboard();