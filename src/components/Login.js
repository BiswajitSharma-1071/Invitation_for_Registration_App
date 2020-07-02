import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"

function Login(props) {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const year = new Date().getFullYear();

    function handleClick() {
        // if (username === "Biswajit" && password === "biswajit") {
        //     props.loggedIn(true);
        // }
        var data = {
            username: { username },
            password: { password }
        }

        axios.get('http://13.235.134.196:8006/login/')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        props.loggedIn(true);


        axios.post('http://13.235.134.196:8006/login/', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        props.loggedIn(true);
        console.log(data)


    }

    return (
        <div>
            <Form className="login-form">
                <h1 className="font-weight-bold text-center loginheader">Mailer App</h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text" placeholder="Username" value={username}
                        onChange={(event) => {
                            const name = event.target.value
                            setusername(name)
                        }} />
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" value={password}
                        onChange={(event) => {
                            const pass = event.target.value
                            setpassword(pass)
                        }} />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" onClick={handleClick}>Log In</Button>
            </Form>
            <footer>
                <p>Copyright ⓒ Biswajit Sharma {year}</p>
            </footer>
        </div>
    );
}

export default Login;