import '../css/main.css';

import {Form, FormDescription, FormDescriptionRow, FormWithRows, InputField, PasswordGroupField, radioInputField} from "../components/Form"
import React, { Component } from 'react';

export class ExampleForm extends Component <{}, {}> {

    render() {
        const nameInputField: InputField = {type: "text", placeholder: "Enter your name", label: "Your name"}
        const firstNameInputField: InputField = {type: "text", placeholder: "Enter your first name", label: "Firstname"}
        const emailInputField: InputField = {type: "email", placeholder: "Enter your email", label: "Email"}
        const passwordInputField: PasswordGroupField = {type: "password-group", placeholder: "Create your password", label: ["Password", "Confirm password"]}
        const birthDateInputField: InputField = {type: "date", placeholder: "Enter your birth date", label:"Birth date"}
        const phoneNumberInputField: InputField = {type: "number", placeholder: "Enter your phone Number", label:"Phone number"}
        const streetInputField: InputField = {type: "text", placeholder: "Enter your street", label: "Street"}
        const zipCodeInputField: InputField = {type: "number", placeholder: "Enter your zip Code", label:"Zip code"}
        const cityCodeInputField: InputField = {type: "text", placeholder: "Enter your City", label:"City"}
        const countryCodeInputField: InputField = {type: "text", placeholder: "Enter your Country", label:"Country"}
        const radio1InputField: InputField = {type: "radio", placeholder: "Female", label:"Female"}
        const radioInputField: radioInputField = {type:"radio", values:['female', 'male', 'others'], label: "Gender" }
        const rating: radioInputField = {type:"radio", values:['yes', 'no', 'maybe later'], label: "Do you want to rate us?" }
        const checkbox: radioInputField = {type:"checkbox", values: ['yes', 'no'], label: "do you want to follow us?"}
        const nameForm: FormDescription = {
            inputFields: 
            [nameInputField, firstNameInputField, birthDateInputField, passwordInputField, 
            emailInputField, phoneNumberInputField, 
            streetInputField, zipCodeInputField, cityCodeInputField, countryCodeInputField, radio1InputField],
            radioInputFields: [radioInputField, rating, checkbox], 
            title: "Sign Up", 
            buttonTitle: "Submit form"}

        const nameFormAsRows: FormDescriptionRow = {
            inputFields: 
            [[nameInputField, firstNameInputField], 
            [birthDateInputField], 
            [streetInputField, zipCodeInputField, cityCodeInputField, countryCodeInputField], 
            [birthDateInputField, birthDateInputField]],  
            title: "Sign Up", 
            buttonTitle: "Submit form"}

        return  <div className="containerForm">
                        <Form formDetails={nameForm}/>
                        <FormWithRows formDetails={nameFormAsRows}/>
                </div>
    }
    
}