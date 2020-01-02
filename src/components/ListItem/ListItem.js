import React, {useState} from "react";
import "./ListItem.css"

function ListItem({item}) {
    const [isCompleted, setIsCompleted] = useState(false);
    let textClassName = '';

    if (isCompleted) {
        textClassName = 'text--crossed';
    }

    const handleCheck = (event) => {
        setIsCompleted(event.target.checked);
    };

    return (
        <div>
            <input type="checkbox" className='checkbox' onChange={handleCheck} id={item}/>
            <label className={textClassName} htmlFor={item}>{item}</label>
        </div>
    )

}

export default ListItem;