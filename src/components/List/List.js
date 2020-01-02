import React, {useState} from "react";
import './List.css';
import ListItem from "../ListItem/ListItem";

const toDo = [
    {
        toDo: "Eat"
    },
    {
        toDo: "Code"
    },
    {
        toDo: "Drink Coffee"
    },
    {
        toDo: "Repeate"
    },
    {
        toDo: "Sleep"
    },
    {
        toDo: "Run"
    }

];

function List() {
    const [value, setValue] = useState("");
    const [array, setArray] = useState(toDo);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleClick = () => {
        setArray([...array, {toDo: value}]);
        setValue('');
    };
    return (
        <div className="list">

            {
                array.map((element) => {
                    return (
                        <ListItem item={element.toDo}/>
                    )

                })
            }

            <div className="input">
                <input type='text' className='text' value={value} onChange={handleChange}/>
                <input type="button" className="button" value="Add" onClick={handleClick}/>
            </div>

        </div>

    )

}


export default List;
