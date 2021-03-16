import { useState, useContext } from "react";
import { Context } from "../../context/Context";

function Trailer () {

    const {MovieDetails} = useContext(Context);

    return (
        <div className="trailer-container">
            <iframe src={MovieDetails.video_path} frameborder="0"></iframe>
        </div>
    );
};

export default Trailer;