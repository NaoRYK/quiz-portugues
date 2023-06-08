const PatchPut=async(name,points,URL)=>{
    const fetchName = await fetch(`${URL}updateScore/${name}`);
    const data = await fetchName.json();
    if(data.length>0 && data[0].hasOwnProperty('puntos')){
        if(data[0].nombre === name){
            const pointsUpdate = await fetch(`${URL}updateScore/${name}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    "score":points
                })
            })
        }
    }else{

        console.log("Not existing", data)
        const res = await fetch(`${URL}score`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `${name}`,
                score: points,
            })
        })
    };
}

export const login=async(URL,name)=>{
    const res = await fetch(`${URL}login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`
        })
    });
};

export const sendData = async (name, points,URL) => {
    try{
        PatchPut(name,points,URL);
    }catch(err){
        if(err){
            PatchPut(name,points,URL);
        }
    }
};

export const getData = (container,URL,callback) => {
    container.innerHTML="<div class='loader'></div>";
    const GetDataCode=(data)=>{
        const nombres = {};
        const objetosSinDuplicados = {};

        data.forEach(objeto => {
            if (!nombres[objeto.nombre] || objeto.puntos > objetosSinDuplicados[objeto.nombre].puntos) {
                nombres[objeto.nombre] = true;
                objetosSinDuplicados[objeto.nombre] = objeto;
            }
        });

        const arraySinDuplicados = Object.values(objetosSinDuplicados);
        const arrayOrdenado = arraySinDuplicados.sort((a, b) => b.puntos - a.puntos);

        console.log(arrayOrdenado)
        arrayOrdenado.map(items => {
            callback(items);
        });
    }
    setTimeout(async () => {
        container.innerHTML="<div class='loader hidden'></div>";
        try{
            const res = await fetch(`${URL}scoreboard`);
            const data = await res.json();
            console.log(data);
            GetDataCode(data);
        }catch(err){
            if(err){
                const res = await fetch(`${URL}scoreboard`);
                const data = await res.json();
                console.log(data);
                GetDataCode(data);
            }
        }

    }, 2000)
};

