import React from 'react';
import { useSelector } from 'react-redux';

const TextDisplay = () => {
    const textList = useSelector((state) => state.textList);

    return (
        <div>
            {textList.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    );
};

export default TextDisplay;
