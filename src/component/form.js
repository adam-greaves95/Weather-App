import React from 'react';

const Form = (props)=>{
    return(
        <form onSubmit={props.loadWeather} className="formbody">
            <input type="text" name="city" placeholder="Cities" className="input"/><br/>
            <input type="text" name="country" placeholder="Countries" className="input" /><br/>
            <button>Get</button>
        </form>
    );
}

export default Form;