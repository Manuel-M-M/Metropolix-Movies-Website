import {useContext, useState} from "react";
import { Context } from '../../context/Context';
import './Carousel.css';


function Carousel() {

    const { show } = useContext(Context);

    if (show === true) {
        return null
    }


    return (
        <div 
            id="carouselHeaderControls" 
            className="carousel slide" 
            data-interval="4000" 
            data-ride="carousel" 
            data-pause="false"
        >
            <div className="carousel-inner h-100">
                <div className="carousel-item h-100 active">
                    <div className="carousel-caption d-md-block">
                        <h5>Ran. Akira Kurasawa</h5>
                        <p>1985</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5 >Love and death. Woody Allen</h5>
                        <p>1975</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>I'm still here. Casey Affleck</h5>
                        <p>2010</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Apur sansar. Satyajit Ray</h5>
                        <p>1959</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Lost highway. David Lynch</h5>
                        <p>1997</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Berlin Alexanderplatz. Rainer Werner Fassbinder</h5>
                        <p>1980</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Wings of desire. Win Wenders</h5>
                        <p>1987</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>La chinoise. Jean-Luc Godard</h5>
                        <p>1967</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Cold war. Pawel Pawlikowski</h5>
                        <p>2018</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>2001: A space odyssey. Stanley Kubrick</h5>
                        <p>1968</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Otto e mezzo. Federico Fellini</h5>
                        <p>1963</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Easy rider. Dennis Hopper</h5>
                        <p>1969</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Hiroshima, mon amour. Alain Resnais</h5>
                        <p>1959</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Lazzaro felice. Alice Rohrwacher</h5>
                        <p>2018</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Scarface. Brian De Palma</h5>
                        <p>1983</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>The big Lebowski. Joel & Ethan Coen</h5>
                        <p>1998</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Oldboy. Park Chan-wook</h5>
                        <p>2003</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Metropolis. Fritz Lang</h5>
                        <p>1927</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Being John Malkovich. Spike Jonze</h5>
                        <p>1999</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Memento. Christopher Nolan</h5>
                        <p>2000</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Monty Python and the holy grail. Monty Python</h5>
                        <p>1975</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Waking Life. Richard Linklater</h5>
                        <p>2001</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Pulp Fiction. Quentin Tarantino</h5>
                        <p>1994</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>The seventh seal. Ingmar Bergman</h5>
                        <p>1957</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Solaris. Andrei Tarkovsky</h5>
                        <p>1972</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Vertigo. Alfred Hitchcock</h5>
                        <p>1958</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>The house that Jack built. Lars Von Trier</h5>
                        <p>2018</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="carousel-caption d-md-block">
                        <h5>Synecdoche, New York. Charlie Kaufman</h5>
                        <p>2008</p>
                    </div>
                </div>   
            </div>
            <a 
                className="carousel-control-prev" 
                href="#carouselHeaderControls" 
                role="button" 
                data-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a 
                className="carousel-control-next" 
                href="#carouselHeaderControls" 
                role="button" 
                data-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
};

export default Carousel;