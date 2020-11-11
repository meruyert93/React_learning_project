import React from 'react'
import TextField from '@material-ui/core/TextField';

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
        <div>
            <h1>
                {details.title}
            </h1>
            {details.inputFields.map((inputField) => {     
                if (inputField.type === "text") {
                    return <TextField label={inputField.placeholder}/>
                }
                // TODO add support for input type text-area

                // TODO add support for input type password
            }
            )}
            <button>
                {details.buttonTitle}
            </button>
        </div>
    )
}
