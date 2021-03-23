
function HeaderBody (headerBody) {

    return (
        <div className="title-page d-flex justify-content-center align-items-center">
            <button className="btn btn-transparent mr-5"
                onClick={() => {
                    window.history.back();
                }}
            >Go Back
            </button>
            <h1 className="h1">{headerBody.title}</h1>
        </div>
    )
}

export default HeaderBody;
