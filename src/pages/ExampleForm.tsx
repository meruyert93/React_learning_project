import '../css/main.css';

import {FormDescriptionRow, FormWithRows, InputField, PasswordGroupField, radioInputField} from "../components/Form";
import React, { Component } from 'react';

export class ExampleForm extends Component <{}, {}> {

    render() {
        const nameInputField: InputField = {type: "text", placeholder: "Enter your name", label: "Your name", fieldType: "name"}
        const firstNameInputField: InputField = {type: "text", placeholder: "Enter your first name", label: "Firstname", fieldType: "first-name"}
        const emailInputField: InputField = {type: "email", placeholder: "Enter your email", label: "Email", fieldType: undefined}
        const passwordInputField: PasswordGroupField = {type: "password-group", placeholder: "Create your password", label: ["Password", "Password Confirmation"] }
        const birthDateInputField: InputField = {type: "date-picker", placeholder: "", label:"Birth date", fieldType: undefined}
        const phoneNumberInputField: InputField = {type: "number", placeholder: "Enter your phone Number", label:"Phone number", fieldType: "phone"}
        const streetInputField: InputField = {type: "text", placeholder: "Enter your street", label: "Street", fieldType: undefined}
        const zipCodeInputField: InputField = {type: "number", placeholder: "Enter your zip Code", label:"Zip code", fieldType: undefined}
        const cityCodeInputField: InputField = {type: "text", placeholder: "Enter your City", label:"City", fieldType: "city"}
        const countryCodeInputField: InputField = {type: "text", placeholder: "Enter your Country", label:"Country", fieldType: "country"}
        const radioInputField: radioInputField = {type:"radio", values:['female', 'male', 'others'], label: "Gender" }
        // const rating: radioInputField = {type:"radio", values:['yes', 'no', 'maybe later'], label: "Do you want to rate us?" }
        const checkbox: radioInputField = {type:"checkbox", values: ['yes', 'no'], label: "do you want to receive more information about us?"}
        // const datePickerField : DatePickerField = {type: "date", label: "Your Birthdate"}
        const nameFormAsRows: FormDescriptionRow = {
            inputFields: 
            [[nameInputField, firstNameInputField], 
            [birthDateInputField],
            [radioInputField],
            [passwordInputField],
            [emailInputField, phoneNumberInputField], 
            [streetInputField, zipCodeInputField], 
            [cityCodeInputField, countryCodeInputField], 
            [checkbox]],  
            title: "Sign Up", 
            buttonTitle: "Submit form"}

        return  <div className="containerForm">
                        <FormWithRows formDetails={nameFormAsRows}/>
                </div>
    }
    
}