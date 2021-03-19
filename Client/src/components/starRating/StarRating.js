import "./StarRating.css";


function StarRating () {
    return(
        <div className="detailsStars">
            <div class="ec-stars-wrapper">
                <span  data-value="1" title="Vote 1 stars">&#9733;</span>
                <span  data-value="2" title="Vote 2 stars">&#9733;</span>
                <span  data-value="3" title="Vote 3 stars">&#9733;</span>
                <span  data-value="4" title="Vote 4 stars">&#9733;</span>
                <span  data-value="5" title="Vote 5 stars">&#9733;</span>
                <span  data-value="6" title="Vote 6 stars">&#9733;</span>
                <span  data-value="7" title="Vote 7 stars">&#9733;</span>
                <span  data-value="8" title="Vote 8 stars">&#9733;</span>
                <span  data-value="9" title="Vote 9 stars">&#9733;</span>
                <span  data-value="10" title="Vote 10 stars">&#9733;</span>
            </div>
        </div>
    )
}

export default StarRating;