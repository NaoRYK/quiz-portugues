
export const sendData = async (name, points,URL) => {
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

export const getData = async (callback,URL) => {
    const res = await fetch(`${URL}scoreboard`);
    const data = await res.json();
    
    data.map(items=>{
        callback(items);
    });
};



