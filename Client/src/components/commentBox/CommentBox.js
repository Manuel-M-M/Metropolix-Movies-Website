import "./CommentBox.css";


function CommentBox () {
    return(
        
        <div className="wrap-comment">
            <div className="texarea-comment">
                <textarea
                    name="textareaComent"
                    id="textareaComent"
                    cols="25" rows="4"
                    placeholder="Add your comment"
                >
                </textarea>
            </div>
            <div className="btn-comment"><button className="btn btn-transparent mt-2 mr-5">Send comment</button></div>
        </div>
        
    )
};

export default CommentBox;