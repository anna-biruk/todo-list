import React, {useState} from "react";
import "./ListItem.css"
import ImgDelete from "../../delete.svg";
import ImgEdit from "../../edit.svg"


function ListItem({item, id, handleDelete,handleEdit}) {
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
    const [isEditing, setIsEditing] = useState(false);
    const [value,setValue]=useState('');

    const handleEditingClick = () => {
        setIsEditing(true);
    }
    const handleSaveClick = () => {
        setIsEditing(false)
        if (value!==""){
            handleEdit(id,value)
        }
    }

    const handleEditChange = (event) => {
        setValue(event.target.value);

    }
    return (
        <div className="listItem">

            {isEditing ? (
                <>
                    <input type="text" defaultValue={item} className="edit" onChange={handleEditChange}/>
                    <input type="button" value='Save' onClick={handleSaveClick}/>
                </>

            ) : (
                <>
                    <div>
                        <input type="checkbox" className='checkbox' onChange={handleCheck} id={item}/>
                        <label className={textClassName} htmlFor={item}>{item}</label>
                    </div>
                    <div>
                        <img src={ImgEdit} className="imgEdit" alt="" onClick={handleEditingClick}/>
                        <img src={ImgDelete} className="imgDelete" onClick={handleClick}/>
                    </div>
                </>
            )}
        </div>
    )

}

export default ListItem;