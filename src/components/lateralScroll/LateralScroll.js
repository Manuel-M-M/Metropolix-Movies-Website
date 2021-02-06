import { useState, useEffect } from "react";
import './LateralScroll.css';

function LateralScroll () {

    const films = document.querySelectorAll(".film");
    const row = document.querySelector(".container_carousel");
    
    const leftArrow = document.getElementById("left_arrow");
    const rightArrow = document.getElementById("right_arrow")
    
    const [actualPage, setActualPage] = useState(Math.ceil(films.length / 5));

    

    const handleLeftArrow = () => {
        setActualPage(row.scrollLeft -= row.offsetWidth) 

        const indicatorActive = document.querySelector(".indicators .active");

        if (indicatorActive.previousSibling) {
            indicatorActive.previousSibling.classList.add("active");
            indicatorActive.classList.remove("active");
    }
    }
    
    const handleRightArrow = () => {
        setActualPage(row.scrollLeft += row.offsetWidth)  

        const indicatorActive = document.querySelector(".indicators .active");

        if (indicatorActive.nextSibling) {
            indicatorActive.nextSibling.classList.add("active");
            indicatorActive.classList.remove("active");
        }
    }

    for(let i = 0; i < actualPage; i++){
        const indicator = document.createElement("button");
    
        if (i === 0) {
            indicator.classList.add("active");
        }
    
        document.querySelector(".indicators").appendChild(indicator);
        indicator.addEventListener("click", (e) => {
            setActualPage( row.scrollLeft = i * row.offsetWidth) 
    
            document.querySelector(".indicators .active").classList.remove("active");
            e.target.classList.add("active");
        })
    }

    films.forEach((film) => {
        film.addEventListener("mouseenter", (e) => {
            const element = e.currentTarget;
            setTimeout(() => {
                films.forEach(film => film.classList.remove("hover"));
                element.classList.add("hover");
            }, 300);
        })
    })


    
    return (
        
        <div className="container">
            <div className="recomended_movies _container">
                <div className="container_title_control">
                    <h3>Recommended Movies</h3>
                    <div className="indicators"></div>
                </div>
                <div className="principal_container">
                    <button role="button" id="left_arrow" className="left_arrow"><i className="fas fa-angle-left" onClick={handleLeftArrow}></i></button>
                    <div className="container_carousel">
                        <div className="carousel">
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2j.pg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                            <div className="film">
                                <img src="../../images/small/pulp2.jpg" alt="Pulp Fiction"></img>
                            </div>
                        </div>
                    </div>
                    <button role="button" id="right_arrow" className="right_arrow"><i className="fas fa-angle-right" onClick={handleRightArrow}></i></button>
                </div>
            </div>
        </div>
        
    );
};

export default LateralScroll;