import React from 'react';
import imga from '../assets/01.jpg';
import imgb from '../assets/02.jpg';
import imgc from '../assets/03.jpg';
import imgd from '../assets/04.jpg';
import imge from '../assets/05.png';

const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade"          data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imga} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={imgb} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={imgc} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={imgd} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={imge} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
