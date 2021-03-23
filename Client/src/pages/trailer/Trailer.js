import { useContext } from "react";
import { Context } from "../../context/Context";
import './Trailer.css'

function Trailer () {

    const {MovieDetails} = useContext(Context);

    return (
        <div className="trailer-container">
            {/* <div className="trailer-wrap"> */}
                <div className="wrap-title">
                    <h3 className="trailer-title">Pulp Fiction</h3>
                </div>
                <div className="box-wrap">
                    <iframe className="trailer-box" src={MovieDetails.video_path} frameborder="1"></iframe>
                </div>
            </div>
        // </div>
    );
};

export default Trailer;
