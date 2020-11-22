import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    inputFields: Field[];
    radioInputFields: radioInputField [];
    title: string;
    buttonTitle: string;
}

export type FormDescriptionRow = {
    inputFields: Field[][];
    title: string;
    buttonTitle: string;
}

export type Field = {
    type: string;
}

export type InputField = {
    type: string; // text, phone, check-box, radio, text-area
    label: string;
    placeholder: string;
}

export type PasswordGroupField = {
    type: string; // text, phone, check-box, radio, text-area
    label: string[];
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
    radio = "radio",
    checkbox = "checkbox"
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
                
                {details.inputFields.map((field) => {     
                    if (field.type === FormElementType.text) {
                        const inputField = field as InputField;
                        return <div style={{display: "flex" , width: "40%"}}>
                  
                        <TextField
                        type='text' 
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        /></div>
                    }
                    // TODO add support for input type text-area
                    if (field.type === FormElementType.textArea) {
                        const inputField = field as InputField
                        return <TextareaAutosize
                        rowsMin={20}
                        aria-label={inputField.label}
                        placeholder={inputField.placeholder}
                        defaultValue={inputField.label}
                        />
                    }
                    // TODO add support for input type password
                    if (field.type === FormElementType.passwordGroup) {
                        const inputField = field as PasswordGroupField
                        return  <div style={{display: "flex", width: "100%"}}>
                            {/* <FormGroup row>  */}
                            <TextField
                            type ='password'
                            label={inputField.label[0]}
                            placeholder={inputField.placeholder}
                            />
                            <TextField
                            type ='password'
                            label={inputField.label[1]}
                            placeholder={inputField.placeholder}
                            />
                            {/* </FormGroup> */}
                        </div>
                    }
                    //Support for input type email
                    if (field.type === FormElementType.email) {
                        const inputField = field as InputField
                        return <Box 
                        display="inline-flex"
                        flexWrap="nowrap"
                        ><TextField
                        type ='email'
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        />
                        </Box>
                    }
                    if  (field.type === FormElementType.date) {
                        const inputField = field as InputField
                        return <TextField
                        type = 'date'
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    }
                    if (field.type === FormElementType.number) {
                        const inputField = field as InputField
                        return <Box 
                        display="inline-flex"
                        flexWrap="nowrap"
                        > <TextField
                        type = 'number'
                        label={inputField.label}
                        placeholder={inputField.placeholder}
                        />
                        </Box>
                    }
                }
                )}
                 {details.radioInputFields.map((radioInputField) => {
                    if (radioInputField.type === FormElementType.radio) {
                    return <FormControl component="fieldset"> <FormLabel component="legend">{radioInputField.label}</FormLabel>
                                <RadioGroup  aria-label="gender" name="gender1"> {radioInputField.values.map((value) => {
                                   return <FormControlLabel value={value} control={<Radio />} label={value} />
                                    })}
                                </RadioGroup>
                            </FormControl>
                    }
                    if(radioInputField.type === FormElementType.checkbox) {
                    return  <FormControl component="fieldset">  <FormLabel component="legend">{radioInputField.label}</FormLabel>
                            <FormGroup row> 
                                {radioInputField.values.map((value) => {
                                    return   <FormControlLabel
                                    label={value}
                                    control={<Checkbox />}
                                    value={value}
                                    /> 
                                })}
                            </FormGroup>
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
export const FormWithRows: React.FC<{formDetails: FormDescriptionRow}> = (props) => {
    const details =  props.formDetails;
    const classes = useStyles();
    return (
        <div className="div-100-width">
            <div className="main-title"> 
            <h1 className="title">
                {details.title}
            </h1>
            </div>
            <div className="main-form"> 
                {/* [1, 2, 3, 4]
                [[1, 2], [3], [4]] */}
                {details.inputFields.map((row) => {    
                    return <div style={{display:"flex", margin: "10px", alignItems:"stretch", width: "80%"}}> 
                                {row.map((field) => {
                                if (field.type === FormElementType.text) {
                                    const inputField = field as InputField;
                                    return <div style={{display: "flex" , width: "80%"}}>
                                                <TextField
                                                type='text' 
                                                label={inputField.label}
                                                placeholder={inputField.placeholder}
                                                />
                                            </div>
                                }
                                // TODO add support for input type text-area
                                if (field.type === FormElementType.textArea) {
                                    const inputField = field as InputField
                                    return <TextareaAutosize
                                            rowsMin={20}
                                            aria-label={inputField.label}
                                            placeholder={inputField.placeholder}
                                            defaultValue={inputField.label}
                                            />
                                }
                                // TODO add support for input type password
                                if (field.type === FormElementType.passwordGroup) {
                                    const inputField = field as PasswordGroupField
                                    return  <div style={{display: "flex", width: "68%"}}>
                                                <TextField
                                                type ='password'
                                                label={inputField.label[0]}
                                                placeholder={inputField.placeholder}
                                                />
                                                <TextField
                                                type ='password'
                                                label={inputField.label[1]}
                                                placeholder={inputField.placeholder}
                                                />
                                            </div>
                                }
                                //Support for input type email
                                if (field.type === FormElementType.email) {
                                    const inputField = field as InputField
                                    return <div style={{display: "flex", width: "50%"}}>
                                                <TextField
                                                type ='email'
                                                label={inputField.label}
                                                placeholder={inputField.placeholder}
                                                />
                                            </div>
                                }
                                if  (field.type === FormElementType.date) {
                                    const inputField = field as InputField
                                    return <div style={{display: "flex", width: "50%", marginLeft: "25%"}}>
                                                <TextField
                                                type = 'date'
                                                label={inputField.label}
                                                placeholder={inputField.placeholder}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                />
                                            </div>
                                }
                                if (field.type === FormElementType.number) {
                                    const inputField = field as InputField
                                    return <div style={{display: "flex", width: "50%", justifyContent: "center"}}>
                                                <TextField
                                                type = 'number'
                                                label={inputField.label}
                                                placeholder={inputField.placeholder}
                                                />
                                             </div>
                                
                                }
                                if (field.type === FormElementType.radio) {
                                    const radioInputField = field as radioInputField
                                return <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                                            <FormControl component="fieldset"> <FormLabel component="legend">{radioInputField.label}</FormLabel>
                                                <RadioGroup  aria-label="gender" name="gender1"> {radioInputField.values.map((value) => {
                                                return <FormControlLabel value={value} control={<Radio />} label={value} />
                                                    })}
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                }
                                if(field.type === FormElementType.checkbox) {
                                    const radioInputField = field as radioInputField
                                return  <div style={{display: "flex", width: "100%", justifyContent: "center"}}><FormControl component="fieldset">  <FormLabel component="legend">{radioInputField.label}</FormLabel>
                                        <FormGroup row  style={{display: "flex", width: "100%", justifyContent: "center"}}> 
                                            {radioInputField.values.map((value) => {
                                                return   <FormControlLabel
                                                label={value}
                                                control={<Checkbox />}
                                                value={value}
                                                /> 
                                            })}
                                        </FormGroup>
                                        </FormControl>
                                         </div>
                                }
                                })}
                            </div>
                    })}        
            </div>
            <div className="submitButton"> 
            <button  style={{display: "flex", width: "15%", justifyContent: "center"}}>
                {details.buttonTitle}
            </button>
            </div>
        </div>
    )
}