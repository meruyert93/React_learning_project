import Checkbox from '@material-ui/core/Checkbox';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import IconButton from '@material-ui/core/IconButton';



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
    checkbox = "checkbox", 
  }

  export interface State {
    showPassword: boolean;
  }

export const FormWithRows: React.FC<{formDetails: FormDescriptionRow}> = (props) => {
    const details =  props.formDetails;
    const classes = useStyles();
    const[values, setValues] = React.useState<State>({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    
    return (
        <div className="div-80-width">
            <div className="main-title"> 
            <h1 className="title">
                {details.title}
            </h1>
            </div>
            <div className="main-form"> 
                {/* [1, 2, 3, 4]
                [[1, 2], [3], [4]] */}
                {details.inputFields.map((row) => {    
                    return <div style={{display:"flex", margin: "10px", alignItems:"stretch", width: "100%"}}> 
                                {row.map((field) => {
                                if (field.type === FormElementType.text) {
                                    const inputField = field as InputField;
                                    return <div style={{display: "flex" , width: "100%"}}>
                                                <TextField
                                                type='text' 
                                                placeholder={inputField.placeholder}
                                                label={inputField.label}
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
                                    return  <div style={{display: "flex", width: "67%"}}>
                                                <TextField
                                                type = {values.showPassword ? 'text' : 'password'}
                                                label={inputField.label[0]}
                                                placeholder={inputField.placeholder}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        >
                                                        {values.showPassword ? <VisibilityTwoToneIcon style={{ fontSize: 30 }} color="primary"/> : <VisibilityOffTwoToneIcon style={{ fontSize: 30 }} color="primary"/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                    ),
                                                    }}
                                                />
                                                <TextField
                                                type = {values.showPassword ? 'text' : 'password'}
                                                label={inputField.label[1]}
                                                placeholder={inputField.placeholder}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        >
                                                        {values.showPassword ? <VisibilityTwoToneIcon style={{ fontSize: 30 }} color="primary"/> : <VisibilityOffTwoToneIcon style={{ fontSize: 30 }} color="primary"/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                    ),
                                                    }}
                                                />
                                            </div>
                                }
                                //Support for input type email
                                if (field.type === FormElementType.email) {
                                    const inputField = field as InputField
                                    return <div style={{display: "flex", width: "100%"}}>
                                                <TextField
                                                type ='email'
                                                label={inputField.label}
                                                placeholder={inputField.placeholder}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                    <EmailTwoToneIcon style={{ fontSize: 30 }} color="primary"/>
                                                    </InputAdornment>
                                                    ),
                                                    }}
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
                                    return <div style={{display: "flex", width: "100%",}}>
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
                                                return <FormControlLabel value={value} control={<Radio color="primary"/>} label={value} />
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
                                                control={<Checkbox  color="primary"/>}
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
            <button  style={{display: "flex", width: "30%", justifyContent: "center"}}>
                {details.buttonTitle}
            </button>
            </div>
        </div>
    )
}