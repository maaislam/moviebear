import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class LogInForm extends Component {
    
    
    
    
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
        console.log(meta)
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

   googleSignInRequest = () => {
       this.props.googleSignInRequest()
   }

    render() {
        return (
            <div className= "ui centered card" >
                <div className="ui menu">
                    <div className="item active">Sign In</div>
                    <div className="item">Sign Up</div>
                </div>
                <div className = "content">
                    <div className="ui one column grid center aligned">
                        <div className="row" >
                             <button onClick = {this.googleSignInRequest} className="ui button google plus">Log in with Google</button>
                        </div>
                        <div className="row">
                             <button className="ui button facebook">Log in with Facebook</button>
                        </div>
                    </div>
                </div>
                <div className="ui segments">
                    <div className="ui raised segment">
                        
                        <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form error">
                            <Field name = "email" type = "text" component = {this.renderInput} label = "Enter Email" className = "field"/>
                            <Field name = "password" type = "password" component = {this.renderInput} label = "Enter Password" className = "field"/>
                            <button className="ui button primary">Sign In</button>
                            <button className="ui button negative">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.email) {
        errors.email = 'You must enter a email'
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password'
    }
    return errors;
};


export default reduxForm({
    form:'LogInForm',
    validate
})(LogInForm);



 