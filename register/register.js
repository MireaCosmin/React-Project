import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearRegisterData, doRegister, reqRegisterData } from './../../slices/userSlice';
import { useHistory } from "react-router-dom";

export function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm_password, setConfirmPassword] = useState();
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const registerResponse = useSelector(reqRegisterData);

    useEffect(() => {
        if (registerResponse && registerResponse._id) {
            history.push("/login");
            dispatch(clearRegisterData());

        }
        setIsValid(!(name && email && password && confirm_password));
    }, [registerResponse, name, email, password, confirm_password]);

    const register = () => {
        console.log(name, email, password, confirm_password);

        const data = {
            name,
            email,
            passwords: {
                password,
                confirm_password
            }
        };

        console.log(data);
        if (!isValid)
            dispatch(doRegister(data))
    };



    return ( < > < h1 > REGISTER < /h1>  



            {
                isValid ?
                    ( < div className = "alert alert-danger" > Formul este invalid < /div>) :
                        ( < div className = "alert alert-success" > Formul este valid < /div>)
                        }

                        {
                            isValid && ( <
                                div className = "alert alert-danger" > Formul este invalid < /div>
                            )
                        }

                        <
                        input type = "text"
                        className = "form-control"
                        placeholder = "Nume..."
                        onChange = {
                            (event) => setName(event.target.value)
                        }
                        value = { name }
                        />

                        <
                        input type = "text"
                        className = "form-control"
                        placeholder = "Email..."
                        onChange = {
                            (event) => setEmail(event.target.value)
                        }
                        value = { email }
                        />

                        <
                        input type = "password"
                        className = "form-control"
                        placeholder = "Parola..."
                        onChange = {
                            (event) => setPassword(event.target.value)
                        }
                        value = { password }
                        />

                        <
                        input type = "password"
                        className = "form-control"
                        placeholder = "Confirma parola..."
                        onChange = {
                            (event) => setConfirmPassword(event.target.value)
                        }
                        value = { confirm_password }
                        />

                        <
                        button className = "btn btn-success"
                        disabled = { isValid }
                        onClick = { register } > Register < /button>   <
                        />
                    );
            }