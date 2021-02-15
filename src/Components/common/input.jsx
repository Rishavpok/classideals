import React, { Component } from 'react';

const Input = ({ type,  name , label, error ,...rest }) => {
    return (
        <div 
                    className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input 
                    {...rest}
                    name={name}
                    id={name}
                    type={type}
                    className="form-control"/>
                    { error && <div className="alert alert-danger">{error}</div>}
        </div>
      );
}
 
export default Input;