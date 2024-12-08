import React from 'react';

// A reusable Button component that accepts props for label and click handler
const Button = (props) => {
    return (
        <button
            className="ButtonStyle"
            value={props.label} // The value of the button
            onClick={props.ClickHandle} // The function to call when clicked
        >
            {props.label} {/* The text displayed on the button */}
        </button>
    );
};

export default Button;
