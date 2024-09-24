import React, { useState, useEffect } from 'react';
import './Editor.css';

function Editor() {
    const [fontFamily, setFontFamily] = useState('Roboto, sans-serif');
    const [fontSize, setFontSize] = useState('medium');
    const [fontColor, setFontColor] = useState('black');

    useEffect(() => {
        // Apply the selected styles to the body when the user clicks "apply"
        document.body.style.fontFamily = fontFamily;
        document.body.style.fontSize = fontSize;
        document.body.style.color = fontColor;
    }, [fontFamily, fontSize, fontColor]);

    return (
        <div className="container">
            <span className="editor">
                <b>Font Family:</b>
                <select 
                    id="fontlist" 
                    value={fontFamily} 
                    onChange={(e) => setFontFamily(e.target.value)}
                    className='mt-2'
                >
                    <option value="Roboto, sans-serif">Roboto</option>
                    <option value="Montserrat, sans-serif">Montserrat</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="PT Serif">PT Serif</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Raleway">Raleway</option>
                    <option value="Lato">Lato</option>
                    <option value="Tiny5">Tiny5</option>
                </select>
                <br />
                <span id="sizee">
                    <b>Font Size:</b>
                    <select 
                        id="sizelist" 
                        value={fontSize} 
                        onChange={(e) => setFontSize(e.target.value)}
                    >
                        <option value="large">Large</option>
                        <option value="medium">Medium</option>
                        <option value="small">Small</option>
                    </select>
                </span>
                <br />
                <span id="color">
                    <b>Font Color:</b>
                    <select
                        id="colorlist"
                        value={fontColor}
                        onChange={(e) => setFontColor(e.target.value)}
                        className="mt-2"
                    >
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="gray">Gray</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="aqua">Aqua</option>
                        <option value="white">White</option>
                    </select>
                </span>
            </span>
        </div>
    );
}

export default Editor;
