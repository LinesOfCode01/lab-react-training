import React from 'react';
import Ratings from './Ratings';

function DriverCard(props) {
    return (
        <div>
            <div>
                <img style={{ width: "100px"}} src={props.img} alt='person'/>
            </div>
       

        <div>
            <span>{props.name}</span>
            <Ratings>{props.ratings}</Ratings>
            <span>
                {props.car.model} - {props.car.licensePlate}
            </span>
        </div>
        </div>
    );
}

export default DriverCard;