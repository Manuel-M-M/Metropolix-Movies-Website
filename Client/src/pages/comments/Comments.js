import { useContext } from 'react';
import { Context } from '../../context/Context';
import "./Comments.css";


function Comments () {

    const { CommentsArray, saveCommentsArray } = useContext(Context);

    return (
        <div className="container-comments">
            <div className="header_comments">
                <button className="btn btn-transparent ml-5 mt-3 header_comments_btn"
                                onClick={() => {
                                    window.history.back();
                                }}
                                >Go Back
                </button>
                <div class="wrap_title_comments">
                    {/* pasar por props el movie_title */}
                                <h4 className="h4_comments">COMMENTS: <span>&#160; </span> </h4>
                            </div>
            </div>
            <div className="wrap_body_comments">
                    <div className="wrap_cards">
                        <div className="card_comments">{CommentsArray.map((comments) => {
                            return (
                                <div className="wrap_card_body">
                                    <h6>{comments.user} <span> {comments.date}</span></h6>
                                    <p>{comments.text}</p>
                                </div>
                            )})}
                        </div>
                        {/* <div className="card_comments">
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
                        </div> */}
                    </div>
            </div>
        </div>
    )
}

export default Comments;