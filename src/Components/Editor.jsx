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
                <span id="sizee" >
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
                <div className="dropdown mt-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Font Color
                    </button>
                    <ul className="dropdown-menu">
                        <li><button type="button" onClick={() => setFontColor('blue')} className="btn btn-primary">Blue</button></li>
                        <li><button type="button" onClick={() => setFontColor('gray')} className="btn btn-secondary">Gray</button></li>
                        <li><button type="button" onClick={() => setFontColor('green')} className="btn btn-success">Green</button></li>
                        <li><button type="button" onClick={() => setFontColor('red')} className="btn btn-danger">Red</button></li>
                        <li><button type="button" onClick={() => setFontColor('yellow')} className="btn btn-warning">Yellow</button></li>
                        <li><button type="button" onClick={() => setFontColor('aqua')} className="btn btn-info">Aqua</button></li>
                        <li><button type="button" onClick={() => setFontColor('white')} className="btn btn-light">White</button></li>
                        <li><button type="button" onClick={() => setFontColor('black')} className="btn btn-dark">Black</button></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-primary mt-1 apply translate">Apply</button>
            </span>
        </div>
    );
}

export default Editor;
