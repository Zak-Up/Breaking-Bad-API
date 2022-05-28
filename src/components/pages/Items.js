import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import Footer from '../Footer';

const Items = () => {
    const url = 'https://breakingbadapi.com/api/random-death/';
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
        <div className='kills'>
            <h2 className='kill_title'>Click y encuentra una muerte Random!</h2>
            <button 
                type='submit' 
                onClick={() => window.location.reload(false)}
                placeholder='Muerte Random...'
                className='kill-btn'
                >
                    Click!
            </button>
            {
                !death ? <Loader/> :
                    <div  className='card card_d mb-3' style={{maxWidth: '620px'}}>
                                <div className='row g-0'>
                                    <div className='col-md-4'>
                                        <img src={death.img} alt='img' key={death.name}></img>
                                    </div>
                                <div className='col-md-8'>
                                <div className='card-body'>
                                    <h6 className='card-title'>{death.death}</h6>
                                    <h7><span>Causa:</span> {death.cause}</h7>
                                    <br/>
                                    <h7><span>Responsable:</span> {death.responsible}</h7>
                                    <br/>
                                    <h7><span>Ultimas palabras:</span> {death.last_words}</h7>
                                    <br/>
                                    <h7><span>Temporada:</span> {death.season}</h7>
                                    <br/>
                                    <h7><span>Episodio:</span> {death.episode}</h7>
                                </div>
                        </div>
                            
                    </div>
                </div>
            }
            <hr/>
            
            <Footer/>
        </div>
    )
}

export default Items
