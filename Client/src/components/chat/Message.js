import { formatRelative } from 'date-fns';

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
    // photoURL = '',
}) => {
    if (!text) return null;

    return ( 
        <div>
            {displayName ? <p>{displayName}</p> : null}
            {createdAt?.seconds ? (
                <span>
                    {formatDate(new Date(createdAt.seconds * 1000), new Date())}
                </span>
            ) : null }
            <p>{text}</p>
        </div>
    );
};

export default Message;