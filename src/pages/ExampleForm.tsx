import {Form, FormDescription, InputField, radioInputField } from "../components/Form"
import React, { Component } from 'react';
import '../css/main.css';


export class ExampleForm extends Component <{}, {}> {

    render() {
        const nameInputField: InputField = {type: "text", placeholder: "Enter your name", label: "Your name"}
        const firstNameInputField: InputField = {type: "text", placeholder: "Enter your first name", label: "Firstname"}
        const emailInputField: InputField = {type: "email", placeholder: "Enter your email", label: "Email"}
        const passwordInputField: InputField = {type: "password", placeholder: "Create your password", label: "Password"}
        const birthDateInputField: InputField = {type: "date", placeholder: "Enter your birth date", label:"Birth date"}
        const phoneNumberInputField: InputField = {type: "number", placeholder: "Enter your phone Number", label:"Phone number"}
        const streetInputField: InputField = {type: "text", placeholder: "Enter your street", label: "Street"}
        const zipCodeInputField: InputField = {type: "number", placeholder: "Enter your zip Code", label:"Zip code"}
        const cityCodeInputField: InputField = {type: "text", placeholder: "Enter your City", label:"City"}
        const countryCodeInputField: InputField = {type: "text", placeholder: "Enter your Country", label:"Country"}
        const radio1InputField: InputField = {type: "radio", placeholder: "Female", label:"Female"}
        const radioInputField: radioInputField = {type:"radio", values:['female', 'male', 'others'], label: "Gender" }
        const rating: radioInputField = {type:"radio", values:['yes', 'no', 'maybe later'], label: "Do you want to rate us?" }
        const nameForm: FormDescription = {
            inputFields: 
            [nameInputField, firstNameInputField, passwordInputField, 
            emailInputField, birthDateInputField, phoneNumberInputField, 
            streetInputField, zipCodeInputField, cityCodeInputField, countryCodeInputField, radio1InputField],
            radioInputFields: [radioInputField, rating], 
            title: "Sign Up", 
            buttonTitle: "Submit form"}

        return  <div className="containerForm">
                        <Form formDetails={nameForm}/>
                </div>
    }
    
}