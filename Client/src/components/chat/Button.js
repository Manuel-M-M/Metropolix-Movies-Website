

const Button = ({ onClick = null, children = null }) => (
    <button className="btn btn-transparent" onClick={onClick}>{children}</button>
);

export default Button;