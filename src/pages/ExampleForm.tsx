import {Form, FormDescription, InputField } from "../components/Form"
import React, { Component } from 'react';
import '../css/main.css';


export class ExampleForm extends Component <{}, {}> {

    render() {
        const textInputField: InputField = {type: "text", placeholder: "Your name", label: "Enter your name"}
        const textInputField2: InputField = {type: "text", placeholder: "Your first name", label: "Enter your name"}
        const textInputField3: InputField = {type: "email", placeholder: "Enter your email", label: "Enter your email"}
        const textInputField4: InputField = {type: "password", placeholder: "Create your password", label: "Create your password"}
        const nameForm: FormDescription = {inputFields: [textInputField, textInputField2, textInputField4, textInputField3], title: "Sign Up", buttonTitle: "Submit form"}

        return  <div className="containerForm">
                        <Form formDetails={nameForm}/>
                </div>
    }
    
}