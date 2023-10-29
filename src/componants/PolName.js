import React from 'react';

export const PolName = ({id, name}) => {

    const nameTitle = () => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <h5>{id}. {nameTitle()}</h5>
    );
};

export default PolName;