import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


  //Styling
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        root: {
            '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            },
        },
    }),
);

export type FormDescription = {
    inputFields: InputField[];
    radioInputFields: radioInputField [];
    title: string;
    buttonTitle: string;
}

export type InputField = {
    type: string; // text, phone, check-box, radio, text-area
    label: string;
    placeholder: string;
}

export type radioInputField = {
    type: string; // text, phone, check-box, radio
    values: string[];
    label: string;
}

export enum FormElementType {
    text = "text",
    textArea = "text-area",
    password = "password",
    passwordGroup = "password-group",
    email = "email",
    date = "date",
    number = "number",
  }

export const Form: React.FC<{formDetails: FormDescription}> = (props) => {

    const details =  props.formDetails;
    const classes = useStyles();

    console.log(details)
    return (
        <div className="div-100-width">
            <h1 className="title">
                {details.title}
            </h1>
            <div className="main-form"> 
                
                {details.inputFields.map((inputField) => {     
                    if (inputField.type === "text") {
                        return <TextField
                        type='text' 
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        />
                    }
                    // TODO add support for input type text-area
                    if (inputField.type === 'text-area') {
                        return <TextareaAutosize
                        rowsMin={20}
                        aria-label={inputField.label}
                        placeholder={inputField.placeholder}
                        defaultValue={inputField.label}
                        />
                    }
                    // TODO add support for input type password
                    if (inputField.type === 'password') {
                        return <TextField
                        type ='password'
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        />
                    }
                    //Support for input type email
                    if (inputField.type === "email") {
                        return <TextField
                        type ='email'
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        />
                    }
                    if  (inputField.type === "date") {
                        return <TextField
                        type = 'date'
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    }
                    if (inputField.type === "number") {
                        return <TextField
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        />
                    }
                }
                )}
                 {details.radioInputFields.map((radioInputField) => {
                    if (radioInputField.type === "radio") {
                    return <FormControl component="fieldset"> <FormLabel component="legend">{radioInputField.label}</FormLabel>
                                <RadioGroup  aria-label="gender" name="gender1"> {radioInputField.values.map((value) => {
                                   return <FormControlLabel value={value} control={<Radio />} label={value} />
                                    })}
                                </RadioGroup>
                            </FormControl>
                    }
                 } 
                 )}
            </div>
            <button>
                {details.buttonTitle}
            </button>
        </div>
    )
}
