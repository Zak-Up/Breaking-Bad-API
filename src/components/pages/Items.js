import React, { useState, useEffect } from 'react';

const Items = () => {
    const url = 'https://breakingbadapi.com/api/random-death';
    const [death, setDeath] = useState();

    const deathApi = async () => {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);

        setDeath(json);
    };

    useEffect(() => {
        deathApi();
    }, [url]);


    return (
        <div>
            {
                !death ? 'Cargando...' :
                death.map((el) => {
                    return <img src={el.img} alt='death'></img>
                }) 
            }
        </div>
    )
}

export default Items
