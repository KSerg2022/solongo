import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({title, className, ...props}) => {

    const rootClasses = [classes.myBtn]
    if (className) {
        rootClasses.push(className);
    }

    return (
        <button className={rootClasses.join(' ')} {...props}>
            {title}
        </button>
    );
};

export default MyButton;