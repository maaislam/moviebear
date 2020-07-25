
import React, { Component } from 'react';
import {  Field, reduxForm  } from 'redux-form'

class SearchInput extends Component {


    renderError = ({error, touched}) => {

        if(touched && error){
            return(
                <div className = "ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };
    
    
    renderSearch = ({input, meta, type, placeholder}) => {
        
        const className = `ui input icon field ${meta.error && meta.touched? 'error' : ''}`
       // console.log(placeholder)
        return (
            <div className = {className}>
                <input {...input} type={type} placeholder = {placeholder}/>
                <i onClick = {this.props.handleSubmit(this.onSubmit)} className="search link icon"></i>
                
            </div>
        )
    };

    onSubmit = (formValues) => {
        this.props.onSearchSubmit(formValues)
       // console.log(formValues)
        
     };
 

    render() {
        return (
            <>
            <form   onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form error">
                <Field name = "search" component = {this.renderSearch} type="text" placeholder={this.props.rederPlaceholder}/>
                
            </form>
            </>
        );
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.search) {
        errors.search = 'You must enter your name'
    }
    
    return errors;
};



export default reduxForm({
    form:'SearchInput',
    validate
}) (SearchInput);
