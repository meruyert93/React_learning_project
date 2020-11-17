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
        const cityCodeInputField: InputField = {type: "text", placeholder: "Enter your zip City", label:"City"}
        const countryCodeInputField: InputField = {type: "text", placeholder: "Enter your zip Country", label:"Country"}
        const radioInputField: radioInputField = {type:"radio", value:["Female"] }
        const nameForm: FormDescription = {
            inputFields: 
            [nameInputField, firstNameInputField, passwordInputField, 
            emailInputField, birthDateInputField, phoneNumberInputField, 
            streetInputField, zipCodeInputField, cityCodeInputField, countryCodeInputField],
            radioInputFields: [radioInputField], 
            title: "Sign Up", 
            buttonTitle: "Submit form"}

        return  <div className="containerForm">
                        <Form formDetails={nameForm}/>
                </div>
    }
    
}