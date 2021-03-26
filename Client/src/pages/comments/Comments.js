import { useContext } from 'react';
import { Context } from '../../context/Context';
import "./Comments.css";


function Comments () {

    const { CommentsArray } = useContext(Context);

    return (
        <div className="container-comments">
            <div className="header_comments">
                <button className="btn btn-transparent mt-2 mr-5 header_comments_btn"
                                onClick={() => {
                                    window.history.back();
                                }}
                                >Go Back
                </button>
                <div className="wrap_title_comments">
                    <h4 className="h4_comments">COMMENTS: <span>&#160; </span> </h4>
                </div>
            </div>
            <div className="wrap_body_comments">
                    {/* <div className="wrap_cards"> */}
                            <div className="card_comments">{CommentsArray.map((comments) => {
                                return (
                                    <div className="wrap_card_body">
                                        <h6>{comments.user} <span> {comments.date}</span></h6>
                                        <p>{comments.text}</p>
                                    </div>
                                )})}
                              
                            </div>
                     {/* </div>   */}
            </div>
        </div>
    )
}

export default Comments;
