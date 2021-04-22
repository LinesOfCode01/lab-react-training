import React from 'react';

function Ratings(props) {

    let roundedNum = Math.round(props.children)
    
    return (
        <div>
            {'★'.repeat(roundedNum) + '☆'.repeat(5 - roundedNum)}
        </div>
    );
}

export default Ratings;