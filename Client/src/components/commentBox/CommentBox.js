import "./CommentBox.css";


function CommentBox () {
    return(
        <textarea 
            name="textareaComent" 
            id="textareaComent" 
            cols="25" rows="4" 
            placeholder="Add your comment"
        >          
        </textarea>
    )
};

export default CommentBox;