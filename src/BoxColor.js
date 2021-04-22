import React from 'react';

function BoxColor(props) {
    
    let bgColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color:  'white',
        padding: '50px',
    }

    return (
        <div className={'container'} style={bgColor}>
            rgb({props.r}, {props.g}, {props.b})
        </div>
    );
}

export default BoxColor;