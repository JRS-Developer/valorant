const ActionButton = ({ color, text }) => {
    if (color === "black") {
        return <div className="action-button action-button--black"><span className="action-button--text">{text}</span></div>;
    } else if (color === "pink") {
        return <div className="action-button action-button--pink"><span className="action-button--text">{text}</span></div>;
    } else if (color === "white") {
        return <div className="action-button action-button--white"><span className="action-button--text">{text}</span></div>;
    }
};

export default ActionButton;
