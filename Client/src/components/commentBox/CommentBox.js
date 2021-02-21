import "./CommentBox.css";


function CommentBox () {
    return(
        <textarea 
            name="textareaComent" 
            id="textareaComent" 
            cols="25" rows="4" 
            placeholder="Add your valoration"
        >          
        </textarea>
    )
};

export default CommentBox;