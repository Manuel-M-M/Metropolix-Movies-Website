import "./Comments.css";


function Comments () {

    return (
        <div className="container-comments">
            <div className="header_comments">
                <button className="btn btn-transparent ml-5 mt-3"
                                onClick={() => {
                                    window.history.back();
                                }}
                                >Go Back
                </button>
                <div class="wrap_title_comments">
                    {/* pasar por props el movie_title */}
                                <h4>COMMENTS: <span>&#160; </span> </h4>
                            </div>
            </div>
            <div className="wrap_body_comments">
                    <div className="wrap_cards">
                        <div className="card_comments">
                            <h6>Miles Davies <span> 15-03-2021 17:32</span></h6>
                            <p>Esta película es una obra maestra. Me quedo boquiabierto
                                con el uso de la cámara, esos colores y la banda sonora.
                                Las interpretaciones son una maravilla. Totalmente recomendable.
                            </p>
                        </div>
                        <div className="card_comments">
                            <h6>Miles Davies <span> 15-03-2021 17:32</span></h6>
                            <p>No sé que pensar sobre esta obra. ¿Es una genialidad o una
                                tomadura de pelo? Merece la pena un revisionado. Es lenta,
                                cuesta bastante entrar para poder disfrutarla. Juzgen ustedes
                                mismos.
                            </p>
                        </div>
                        <div className="card_comments">
                            <h6>Miles Davies <span> 15-03-2021 17:32</span></h6>
                            <p>No sé que pensar sobre esta obra. ¿Es una genialidad o una
                                tomadura de pelo? Merece la pena un revisionado. Es lenta,
                                cuesta bastante entrar para poder disfrutarla. Juzgen ustedes
                                 mismos.
                            </p>
                        </div>
                        {/* <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div>
                        <div className="card_comments"><p>hola</p></div> */}
                    </div>
            </div>
        </div>
    )
}

export default Comments;