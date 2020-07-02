import React, { useState } from "react";
import { Label } from 'reactstrap';


function InputText(props) {
    const [inputMail, setInputMail] = useState("");
    const [inputNumber, setInputNumber] = useState("");
    //props.dataItem(inputText);
    return (
        <div className="form">
            <form onSubmit={(event) => {
                event.preventDefault();
                let data = {
                    mail: { inputMail },
                    mob: { inputNumber }
                }
                props.dataItem(data)
                setInputMail("");
                setInputNumber("");
            }}>
                <Label>Email</Label>
                <input onChange={(event) => {
                    const newValue = event.target.value;
                    setInputMail(newValue);
                }} type="email" value={inputMail} />
                <Label>Number</Label>
                <input onChange={(event) => {
                    const newValue = event.target.value;
                    setInputNumber(newValue)
                }} type="number" value={inputNumber} /> <br />
                <button type="submit">
                    <span>Add More</span>
                </button>
            </form>
        </div>
    );
}

export default InputText;