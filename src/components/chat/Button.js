

const Button = ({ onClick = null, children = null }) => (
    <button className="btn btn-transparent mb-5 mt-4" onClick={onClick}>{children}</button>
);

export default Button;