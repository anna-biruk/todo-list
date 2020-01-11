import React, {useState} from "react";
import "./Login.css"
import { useHistory } from "react-router-dom";


function Login() {
    const history=useHistory();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleChangeLogin = (event) => {
        setLogin(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeSurname = (event) => {
        setSurname(event.target.value)
    }
    const handleClickRegister = (event) => {
        event.preventDefault();
        history.push("/");
        const registerData = {login, password, name, surname};
        console.log(registerData);
    }

    return (
        <div className="login">
            <form className='form'>
                <input type="text" className='formItem' placeholder='Login' name="login" onChange={handleChangeLogin}/>
                <input type="password" className='formItem' placeholder="Password" name="password"
                       onChange={handleChangePassword}/>
                <input type="text" className='formItem' placeholder="Name" name="name" onChange={handleChangeName}/>
                <input type="text" className='formItem' placeholder="Surname" name="surname"
                       onChange={handleChangeSurname}/>
                    <input type="submit" value="Register" onClick={handleClickRegister}/>
            </form>
        </div>
    )

}

export default Login;