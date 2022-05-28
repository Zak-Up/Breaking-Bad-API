import React from 'react';
import Carousel from '../Carousel';
import Curiosidades from '../Curiosidades';
import Footer from '../Footer';

const Inicio = () => {
    return (
        <div className='inicio'>
            <Carousel/>
            <div className='reseña'>
                <h2>La mejor serie de todos los tiempos...</h2>
                <p>Decir que Breaking Bad es una de las mejores ficciones televisivas de los últimos 20 años no es exagerar ni un poco. Adéntrate con nosostros en esta sorprendente serie aqui encontraras a tus personajes favoritos y conocerlos un poco mas, no esta demas traer sus recuerdos llenos de aventura y accion a nuestras mentes y corazones.</p>
                <div className='blue-sky'>
                    <div>
                        <img src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2013/09/251297-resenas-series-breaking-bad.jpg?itok=hCZbCuZ7'alt='blue'></img>
                        <h6>Blue Sky Candy</h6>
                    </div>
                    <div>
                        <h4>La fiebre de la Pasta Azul</h4>
                        <p>Como curiosidad, atencion al merchandising de la serie, que ha sido de lo más variado y, al margen de las clásicas camisetas, llaveros o figuritas ha incluido sales de baño de color azul llamadas "Bathing Bad" o réplicas de la famosa caravana utilizada por los protagonistas para cocinar meta. <br/><br/><br/>
                        La calidad de esta producción es indiscutible, podríamos debatir si es o no la mejor serie de todos los tiempos, pero no nos ocuparemos de eso. A continuación hablaremos de los mejores personajes de Breaking Bad.</p>
                    </div>

                </div> 
                <hr></hr>
                <div className='walter'>
                <div>
                        <h4>Walter White</h4>
                        <p>El personaje de los matices, víctima y victimario, el gran Heisenberg. Esposo y padre modelo (al menos en principio) y químico brillante. El cáncer toca su puerta y él responde con un imperio de metanfetaminas. Un producto único por su pureza y valioso en el negocio ilícito de las drogas.<br/><br/><br/>
                        Su ego y su ingenio forman parte esencial de su personalidad. Su familia tiene el primer lugar, pero no es su única prioridad. Él necesita el «éxito», anhela que sus talentos sean remunerados o de alguna forma reconocidos.</p>
                    </div>
                    <div>
                        <img src='https://www.seriesylibros.com/wp-content/uploads/2020/06/Walter-White.png'alt='blue' width="520px"></img>
                        <h6></h6>
                    </div>
                </div> 
                <hr/>
                <div className='tuco'>
                    <div>
                        <img src='https://www.seriesylibros.com/wp-content/uploads/2020/06/Tuco-Final.png' width="520px" alt='blue'></img>
                    </div>
                    <div>
                        <h4>Tuco Salamaca (Raymond Cruz)</h4>
                        <p>Es un personaje totalmente impredecible en extremo; se convierte en el distribuidor de Walter y Jesse. Domina el mercado mexicano y decide tratar con Heisenberg gracias a sus agallas.. <br/><br/><br/>
                        Tuco es la impulsividad encarnada. Violento por naturaleza, indomable por definición. Un sujeto sin escrúpulos, criminal en todo sentido. Su estadía en la serie fue breve, no podía ser de otra manera…</p>
                    </div>

                </div> 
                <hr></hr>
                <div className='skyler'>
                <div>
                        <h4>Skyler (Anna Gunn)</h4>
                        <p>Ver Breaking Bad sin odiar a Skyler es casi imposible. Sin embargo, los sentimientos negativos que despierta, en buena medida, se deben a su impecable papel en la serie. A pesar de que podamos cuestionar sus actos, no podríamos cuestionar su talento..<br/><br/><br/>
                        En otras palabras, no importa si Walter White merecía una esposa distinta, lo cierto es que tuvo la adecuada, aquella que necesitaba la historia..</p>
                    </div>
                    <div>
                        <img src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2013/09/251306-resenas-series-breaking-bad.jpg?itok=IMeJemJr'alt='blue' width="520px"></img>
                    </div>
                </div> 
                <hr/>
                <div className='gus'>
                    <div>
                        <img src='https://www.seriesylibros.com/wp-content/uploads/2020/06/Gus-Fring-BB.jpg' width="520px" alt='blue'></img>
                    </div>
                    <div>
                        <h4>Gus Fring (Giancarlo Esposito)</h4>
                        <p>Estratega, astuto, despiadado y discreto. Ese es Gus Fring. Un sujeto que se posicionó en un negocio tan peligroso como fugaz. Sin embargo, se mantuvo bajo perfil durante años, pero el factor Walter White fue un imponderable ineludible. <br/><br/><br/>
                        ¿Quién no recuerda a Los Pollos Hermanos?</p>
                    </div>
                </div>
                <hr className='hr'/>
                <div className='mike'>
                <div>
                        <h4>Mike Ehrmantraut (Jonathan Banks)</h4>
                        <p>Policía retirado. Su relación paternal con Pinkman y su sapiencia y pragmatismo en asuntos «policiales» son fundamentales en la historia. Es una pieza clave para Gus y uno de los personajes de Breaking Bad que despierta mayor empatía.<br/><br/><br/>
                        Su despedida afligió a muchos seguidores, pero pensar en un «final feliz» para Mike era casi utópico.</p>
                    </div>
                    <div>
                        <img src='https://www.seriesylibros.com/wp-content/uploads/2020/06/Mike-final.png'alt='blue' width="520px"></img>
                    </div>
                </div> 
            </div>
            <hr/>
            <div className='precuelas'>
                <h2>Ultimas entregas del universo Breaking Bad..</h2>
                <p>Como sabemos la serie culminó con la 6ta Temporada, Vince Guilligan nos sorprendió con la entrega de una película basáda en Breaking Bad, llamada el Camino, donde nos cuenta la historia de lo que sucede con Jesse despues de el final de la serie, la ultima producción basáda en la serie fue Better Call Saul, quien nos dejó la entrega de la 6ta temporada en el 2022.  </p>
            </div>
            <div className='trailers'>
                <div className='camino trailer'>
                    <iframe width="460" height="280" src="https://www.youtube.com/embed/Bi3mMWw_cJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2>El Camino</h2>
                    <p>Una Pelicula de Breaking Bad</p>
                </div>
                <div className='saul trailer'>
                    <iframe width="460" height="280" src="https://www.youtube.com/embed/30RIP7LYPXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2>Better Call Saul</h2>
                    <p>La sexta temporada esta disponible en Netflix</p>
                </div>
            </div>
            <Curiosidades/>
            <hr/>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Inicio
