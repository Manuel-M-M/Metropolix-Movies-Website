import { formatRelative } from 'date-fns';
import './Chat.css';

const formatDate = date => {
    let formattedDate = '';
    if (date) {
        //Convert date in words relative to the current date
        formattedDate = formatRelative(date, new Date());
        //Uppercase the first letter
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
};

const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = '',
}) => {
    if (!text) return null;

    return ( 
        <div className="container-message">
            <div className="wrap-data">
                {photoURL ? (
                    <img
                    src={photoURL}
                    alt="Avatar"
                    className="rounded-full mr-4"
                    width={45}
                    height={45}
                    />
                ) : null}
                {displayName ? <p className="name">{displayName}</p> : null}
                {createdAt?.seconds ? (
                    <span className ="date">
                        {formatDate(new Date(createdAt.seconds * 1000), new Date())}
                    </span>
                ) : null }
            </div>
            <div className="wrap-message">
                <p className="message-text">{text}</p>
            </div>
        </div>
    );
};

export default Message;