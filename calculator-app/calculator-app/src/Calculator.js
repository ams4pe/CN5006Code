import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import computerPic from './computerPic.jpg';

function Calculator() {
    const [text1, setText] = useState(""); 
    const [showImage, setShowImage] = useState(false);

    const ClickHandle = (e) => {
        if (e.target.value === "C") {
            setText(""); 
        } else if (e.target.value === "=") {
            try {
                setText(eval(text1).toString()); 
            } catch {
                setText("Error"); 
            }
        } else {
            setText(text1 + e.target.value); 
        }
    };

    const handleShowMeClick = () => {
        setShowImage(true); 
    };

    const handleSquareClick = () => {
        const number = parseFloat(text1);
        if (!isNaN(number)) {
            setText((number ** 2).toString());
        } else {
            setText("Error");
        }
    };

    const handleResetClick = () => {
        setText(""); 
        setShowImage(false); 
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>
            <div className="Keypad">
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>
            <div className="BottomButtons">
                <Button label="Square" ClickHandle={handleSquareClick} />
                <Button label="Show Me" ClickHandle={handleShowMeClick} />
                <Button label="Reset" ClickHandle={handleResetClick} />
            </div>
            {showImage && (
                <div>
                    <img
                        src={computerPic}
                        alt="Computer"
                        style={{ width: "150px", height: "150px", marginTop: "10px" }}
                    />
                </div>
            )}
        </div>
    );
}

export default Calculator;
