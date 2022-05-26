import { useState, useEffect } from 'react';

export const UseFetch = (url) => {
    const [data, setdata] = useState({cargando: true, datos:null});

    useEffect(() => {
        fetchApi(url);
    }, [url]);

    async function fetchApi(url){

        try{
            setdata({cargando:true, datos:null})
            const res = await fetch(url);
            const datos = await res.json();
            setdata({cargando:false, datos})
        }
        catch (e) {
            console.log(e)
        }
        
    }

    return data
}
