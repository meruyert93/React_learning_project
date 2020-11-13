import {Form, FormDescription, InputField } from "../components/Form"
import React, { Component } from 'react';
import '../css/main.css';


export class ExampleForm extends Component <{}, {}> {

    render() {
        const textInputField: InputField = {type: "text", placeholder: "Your name", label: "Enter your name"}
        const textInputField2: InputField = {type: "text", placeholder: "Your first name", label: "Enter your name"}
        // const textInputField3: InputField = {type: "text-area", placeholder: "", label: "Enter your name"}
        // const textInputField4: InputField = {type: "password", placeholder: "", label: "Enter your password"}
        const nameForm: FormDescription = {inputFields: [textInputField, textInputField2], title: "Sign Up", buttonTitle: "Submit form"}
        
        
       
        

        return  <div className="containerForm">
                    <div>
                        <Form formDetails={nameForm}/>
                    </div>
                </div>
    }
    
}