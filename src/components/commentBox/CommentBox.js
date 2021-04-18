import "./CommentBox.css";


function CommentBox ({value, onChange}) {
    return(
        
        <div className="wrap-comment">
            <div className="texarea-comment">
                <textarea
                    name="textareaComent"
                    id="textareaComent"
                    cols="25" rows="4"
                    placeholder="Add your comment"
                    value={value}
                    onChange={onChange}
                >
                </textarea>
            </div>
        </div>
        
    )
};

export default CommentBox;