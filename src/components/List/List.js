import React, {useState} from "react";
import './List.css';
import ListItem from "../ListItem/ListItem";

const toDo = [
    {
        toDo: "Eat",
        id: "1"

    },
    {
        toDo: "Code",
        id: "2"
    },
    {
        toDo: "Drink Coffee",
        id: "3"
    },
    {
        toDo: "Repeate",
        id: "4"
    },
    {
        toDo: "Sleep",
        id: "5"
    },
    {
        toDo: "Run",
        id: "6"
    }

];


function List() {
    const [value, setValue] = useState("");
    const [array, setArray] = useState(toDo);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleCreate = () => {
        setArray([...array, {toDo: value,id:value}]);
        setValue('');
    };
    const removeItem = (id) => {
        console.log(id);
        const newArray = array.filter((element)=>{
            if (element.id===id){
                return false;
            } else {
                return  true;
            }
        })
        setArray(newArray);
    }
    return (
        <div className="list">

            {
                array.map((element) => {
                    return (
                            <ListItem item={element.toDo} id={element.id} handleDelete={removeItem}/>
                    )
                })
            }

            <div className="input">
                <input type='text' className='text' value={value} onChange={handleChange}/>
                <input type="button" className="button" value="Add" onClick={handleCreate}/>
            </div>

        </div>

    )

}


export default List;
