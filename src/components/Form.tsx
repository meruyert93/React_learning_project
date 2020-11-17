import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


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
    title: string;
    buttonTitle: string;
}

export type InputField = {
    type: string; // text, phone, check-box, radio, text-area
    label: string;
    placeholder: string;
}

export type RadioInputField = {
    type: string; // text, phone, check-box, radio
    values: string[];
}

//

export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState('female');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    );
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
                        placeholder="Create your password"
                        />
                    }
                    //Suppor
                    if (inputField.type === "email") {
                        return <TextField
                        label="Email"
                        placeholder="email@sample.com"
                        />
                    }
                }
                )}
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>

                
                <RadioButtonsGroup/>
                <div> 
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

                <TextField
                    id="standard-password-input"
                    label="Confirm"
                    type="password"
                    autoComplete="current-password"
                />
          
                </div> 
                <div> 
                <TextField
                    type="email"
                    label="Email"
                    placeholder="email@sample.com"
                />
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="standard-multiline-static"
                            label="Additional comments"
                            multiline
                            rows={4}
                            defaultValue="Please, add anything you want us to consider"
                        />
                    </div>
                </form>     
            </div>
            <button>
                {details.buttonTitle}
            </button>
        </div>
    )
}
