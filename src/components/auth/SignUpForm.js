import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class SignUpForm extends Component {
    
    
    
    
    renderError = ({error, touched}) => {

        if(touched && error){
            return(
                <div className = "ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };
    
    
    renderInput = ({input, label, meta, type}) => {
        
        const className = `field ${meta.error && meta.touched? 'error' : ''}`
       
        return (
            <div className = {className}>
                <label className = "left aligned"><h4>{label}</h4></label>
                <input {...input} type={type}/>
                <div>{this.renderError(meta)}</div>
            </div>
        )
    };

    
    
    onSubmit = (formValues) => {
       this.props.onSubmit(formValues)
       console.log(formValues)

    };



    render() {
        return (
             
                <div className="ui segments">
                    <div className="ui raised segment">
                        
                        <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form error">

                            <Field name = "name" type = "text" component = {this.renderInput} label = "Enter Your Name" className = "field"/>
                            <Field name = "email" type = "text" component = {this.renderInput} label = "Enter Email" className = "field"/>
                            <Field name = "password" type = "password" component = {this.renderInput} label = "Enter Password" className = "field"/>
                            <button className="ui fluid button primary">Sign Up</button>
                        </form>
                    </div>
                </div>
            
        );
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.name) {
        errors.name = 'You must enter your name'
    }
    if (!formValues.email) {
        errors.email = 'You must enter a email'
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password'
    }
    return errors;
};


export default reduxForm({
    form:'SignUpForm',
    validate
})(SignUpForm);



 