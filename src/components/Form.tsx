import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


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

// export type DataField =  {
//        type: Date;
// }  

export const Form: React.FC<{formDetails: FormDescription}> = (props) => {

    const details =  props.formDetails;
    const classes = useStyles();

    console.log(details)
    return (
        <div>
            <h1 className="title">
                {details.title}
            </h1>
            <div> 
                
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
                        defaultValue="2017-05-24"
                        autoComplete="current-password"
                        />
                    }
                }
                )}
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>


            </div>
            <button>
                {details.buttonTitle}
            </button>
        </div>
    )
}
