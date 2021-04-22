import React, {useState} from 'react';

function ClickablePicture(props) {

    let [toggle, setToggle] = useState(false);
    const switchPicture = () => {
        setToggle(!toggle)
    }

    return (
        <div>
         <img onCLick={switchPicture} src={toggle ? props.imgClicked : props.img} alt=''/>   
        </div>
    );
}

export default ClickablePicture;