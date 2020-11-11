import { Form, FormDescription, InputField } from "../components/Form"
import React, { Component } from 'react';

export class ExampleForm extends Component <{}, {}> {

    render() {
        const textInputField: InputField = {type: "text", placeholder: "Your name", label: "Enter your name"}
        const textInputField2: InputField = {type: "text", placeholder: "Your first name", label: "Enter your name"}
        const exampleForm: FormDescription = {inputFields: [textInputField, textInputField2], title: "Simple Form", buttonTitle: "Submit form"}

        return <div><Form formDetails={exampleForm}/></div>
    }
    
}