import React, {useState} from "react";
import "./ListItem.css"
import ImgDelete from "../../delete.svg";
import ImgEdit from "../../edit.svg"


function ListItem({item,id,handleDelete}) {
    const [isCompleted, setIsCompleted] = useState(false);
    let textClassName = '';

    if (isCompleted) {
        textClassName = 'text--crossed';
    }

    const handleCheck = (event) => {
        setIsCompleted(event.target.checked);
    };
    const handleClick = () => {
        handleDelete(id);
    }
    return (
        <div className="listItem">
            <div>
                <input type="checkbox" className='checkbox' onChange={handleCheck} id={item}/>
                <label className={textClassName} htmlFor={item}>{item}</label>
            </div>
            <div>
                <img src={ImgEdit} className="imgEdit" alt=""/>
                <img src={ImgDelete} className="imgDelete" onClick={handleClick}/>
            </div>

        </div>
    )

}

export default ListItem;