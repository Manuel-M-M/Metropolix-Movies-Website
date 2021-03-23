import { useContext } from "react";
import { Context } from "../../context/Context";
import './Trailer.css'

function Trailer () {

    const {MovieDetails} = useContext(Context);

    return (
        <div className="trailer-container">
                <div className="wrap-title">
                    <button className="btn btn-transparent mr-5 header_comments_btn"
                        onClick={() => {
                            window.history.back();
                        }}
                    >Go Back
                    </button>
                    <h3 className="trailer-title">{MovieDetails.title}</h3>
                </div>
                <div className="box-wrap">
                    <iframe title={MovieDetails.id} className="trailer-box" src={MovieDetails.video_path} frameBorder="0"></iframe>
                </div>
            </div>
    );
};

export default Trailer;
