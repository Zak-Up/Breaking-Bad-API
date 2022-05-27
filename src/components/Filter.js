import React from 'react';

const Filter = () => {
    const url = 'https://breakingbadapi.com/api/random-death';
    const [filter, setFilter] = React.useState();

    const filterApi = async () => {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);

        setFilter(json);
    }


    React.useEffect(() => {
        filterApi();
    }, [url]);


    return (
        <div>
            {
                !filter ? 'Cargando...' :
                filter.map((el, index)=> {
                    return <div  className='card'>
                        <img src={el.img} alt='img'></img>
                        <h6>{el.death}</h6>
                        <p>Causa de muerte: {el.cause}</p>
                        <p>Responsable: {el.responsible}</p>
                        <p>Ultimas palabras: {el.last_words}</p>
                    </div> 
                })
            }
        </div>
    )
}

export default Filter
