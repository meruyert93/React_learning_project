import 'date-fns';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';

import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone';

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
    fieldType: string | undefined; //name, street, zipcode
    // mandatory: boolean;
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
    datePicker = "date-picker"
  }

export enum PasswordHintTextState {
    initial,
    success,
    error
}

export interface State {
    showPassword: boolean;
  }

export const FormWithRows: React.FC<{formDetails: FormDescriptionRow}> = (props) => {
    const details =  props.formDetails;
    const [password, setPassword] = React.useState("");
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [showPassword, setShowPassWord] = React.useState<State>({
        showPassword: false,
        });

    const [errorsPassword, setErrorsPassword] = React.useState(''); ///that should be string 
    const [errorsEmail, setErrorsEmail] = React.useState(false);
    const [errorsDate, setErrorsDate] = React.useState(false);
    const [passwordHelperText, setPasswordHelperText] = React.useState('');
    const [iconForPasswordHelperText, setIconForPasswordHelperText] = React.useState(PasswordHintTextState.initial);

    const handleClickShowPassword = () => {
        setShowPassWord({ ...showPassword, showPassword: !showPassword.showPassword });
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const iconForInputField = (inputField: InputField) => {
        if (inputField.fieldType === "name" || inputField.fieldType === "first-name") {
            return <AccountCircleIcon style={{ fontSize: 30 }} color="primary"/>
        }
        if (inputField.fieldType === "city") {
            return <LocationCityTwoToneIcon style={{ fontSize: 30 }} color="primary"/>
        }
        if (inputField.fieldType === "country") {
            return <PublicTwoToneIcon style={{ fontSize: 30 }} color="primary"/>
        }
        if (inputField.fieldType === "phone") {
            return <PhoneIphoneTwoToneIcon style={{ fontSize: 30 }} color="primary"/>
        }
            return <div/>
    }

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
      );

    const [didDateChange, setDidDateChange] = React.useState(false);
    
    const handleDateChange = (date: Date | null) => {
        console.log(date);
        setSelectedDate(date);
        setDidDateChange(true);
    };
  
    const checkPasswords = () => {
        if (password === '') {
            setErrorsPassword('This field is required');
            return false
        }
        if (password !== passwordConfirmation) {
            setErrorsPassword('Password dont match');
            return false
        }
        else {
            setErrorsPassword('')
            return true;
        }
    }

    const checkPasswordStrength = (event: any) => {
        let regStrength = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])").test(event.target.value);
        let regLength = new RegExp("(?=.{8,})").test(event.target.value);
        if (!regStrength) {   
            setPasswordHelperText('Your password must contain at least 1 lowercase, 1 uppercase, 1 numeric and 1 special character')
            setIconForPasswordHelperText(PasswordHintTextState.error);
            return false
        }
        if (!regLength) {
            setPasswordHelperText('Your password must be at least eight characters or longer')
            setIconForPasswordHelperText(PasswordHintTextState.error);
            return false
        }
        else {
            setPasswordHelperText('');
            setIconForPasswordHelperText(PasswordHintTextState.success);
            return true
        }
    }

    const iconForPasswordHint = () => {
        if (iconForPasswordHelperText === PasswordHintTextState.initial) {
            return null
        } 
        if (iconForPasswordHelperText === PasswordHintTextState.error) {
            return  <WarningTwoToneIcon/>
        }
        if (iconForPasswordHelperText === PasswordHintTextState.success) {
            return null
        }
    }

    const checkEmail = () => {
        if (email === "") {
            return (
                setErrorsEmail(true));
        } else {
            return (setErrorsEmail(false));
        }
    };

    const checkDate = () => {
        if(didDateChange === false) {
                setErrorsDate(true)
                return true
        } else {
                setErrorsDate(false)
                return false
        }
    }

    const submitButton = () => {
        checkPasswords();
        checkEmail();
        checkDate();
    }

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
                    return <div style={{display:"flex", margin: "10px", alignItems:"stretch", width: "100%"}} key={Math.random()}> 
                                {row.map((field) => {
                                if (field.type === FormElementType.text) {
                                    const inputField = field as InputField;
                                    return <div style={{display: "flex" , width: "100%"}} key={Math.random()}>
                                                <TextField
                                                type='text' 
                                                placeholder={inputField.placeholder}
                                                label={inputField.label}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        {iconForInputField(inputField)}
                                                    </InputAdornment>
                                                    ),
                                                    }}
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
                                    return  <div className="passwordAndHelperText">
                                                <div className="passwordGroup"> 
                                                <TextField
                                                error={errorsPassword.length > 0}
                                                type = {showPassword.showPassword ? 'text' : 'password'}
                                                label={inputField.label[0]}
                                                placeholder={inputField.placeholder}
                                                value={password}
                                                required={true}
                                                onChange={(event)=> {checkPasswordStrength(event); setPassword(event.target.value)}}
                                                helperText={errorsPassword}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        >
                                                        {showPassword.showPassword ? <VisibilityTwoToneIcon style={{ fontSize: 30 }} color="primary"/> : <VisibilityOffTwoToneIcon style={{ fontSize: 30 }} color="primary"/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                    ),
                                                    }}
                                                />
                                                <TextField
                                                error={errorsPassword.length > 0}
                                                type = {showPassword.showPassword ? 'text' : 'password'}
                                                label={inputField.label[1]}
                                                placeholder={inputField.placeholder}
                                                value={passwordConfirmation}
                                                required={true}
                                                onChange={(event)=> {setPasswordConfirmation(event.target.value)}}
                                                // helperText={errorsPassword}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        >
                                                        {showPassword.showPassword ? <VisibilityTwoToneIcon style={{ fontSize: 30 }} color="primary"/> : <VisibilityOffTwoToneIcon style={{ fontSize: 30 }} color="primary"/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                    ),
                                                    }}
                                                />
                                                </div>
                                                <div className="passwordHelperText">
                                                     <FormHelperText className="formHelperText">
                                                            {iconForPasswordHint()}
                                                            {/* {iconForPasswordHelperText === PasswordHintTextState.success ? <CheckCircleTwoToneIcon/> : <WarningTwoToneIcon/>} */}
                                                              {passwordHelperText}    
                                                 </FormHelperText> 
                                                </div>
                                            </div>
                                }
                                //Support for input type email
                                if (field.type === FormElementType.email) {
                                    const inputField = field as InputField
                                    return <div style={{display: "flex", width: "100%"}}>
                                                <TextField
                                                error={errorsEmail}
                                                helperText={errorsEmail ? 'The field is required ' : ''}
                                                type ='email'
                                                label={inputField.label}
                                                required={true}
                                                placeholder={inputField.placeholder}
                                                onChange={(event)=> {setEmail(event.target.value)}}
                                                value={email}
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
                                if  (field.type === FormElementType.datePicker) {
                                    const inputField = field as InputField
                                    return <div style={{display: "flex", width: "50%", marginLeft: "25%"}}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}> 
                                                <KeyboardDatePicker
                                                    error={errorsDate}
                                                    helperText={errorsDate ? 'The field is required ' : ''}
                                                    fullWidth
                                                    label={inputField.label}
                                                    format="MM/dd/yyyy"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    keyboardIcon={<Icon><CalendarTodayTwoToneIcon style={{ fontSize: 25 }} color="primary"/></Icon>}
                                                />
                                                </MuiPickersUtilsProvider>
                                            </div>
                                }
                                if (field.type === FormElementType.number) {
                                    const inputField = field as InputField
                                    return <div style={{display: "flex", width: "100%",}}>
                                                <TextField
                                                type = 'number'
                                                label={inputField.label}
                                                placeholder={inputField.placeholder}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        {iconForInputField(inputField)}
                                                    </InputAdornment>
                                                    ),
                                                    }}
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
                                                key={Math.random()}
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
            <button  style={{display: "flex", width: "30%", justifyContent: "center"}} onClick={() => submitButton  ()}>
                {details.buttonTitle}
            </button>
            </div>
        </div>
    )
}