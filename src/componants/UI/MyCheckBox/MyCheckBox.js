import React from 'react';
import classes from "./MyCheckBox.module.css";

export const MyCheckBox = (props) => {
    return (
        <label className="col" htmlFor={props.id}>
            <input {...props} className={classes.myCheckBoxInput}/>
            {props.name}
        </label>
    );
};

export default MyCheckBox;