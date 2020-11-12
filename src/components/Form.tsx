import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Form.css'


export type FormDescription = {
    inputFields: InputField[];
    title: string;
    buttonTitle: string;
}

export type InputField = {
    type: string; // text, phone, check-box, radio, text-area
    label: string;
    placeholder: string;
}

type RadioInputField = {
    type: string; // text, phone, check-box, radio
    values: string[];
}

export const Form: React.FC<{formDetails: FormDescription}> = (props) => {

    const details =  props.formDetails
    console.log(details)
    return (
        <div className="simpleForm">
            <h1>
                {details.title}
            </h1>
            {details.inputFields.map((inputField) => {     
                if (inputField.type === "text") {
                    return <TextField label={inputField.placeholder}/>
                }
                // TODO add support for input type text-area
                if (inputField.type === 'text-area') {
                    return <TextareaAutosize
                    rowsMin={20}
                    aria-label="Here some text"
                    placeholder="Enter your text"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                    />
                }
                // TODO add support for input type password
                if (inputField.type === 'password') {
                    return <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                }
            }
            )}
            <button>
                {details.buttonTitle}
            </button>
        </div>
    )
}
