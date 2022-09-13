import React from 'react';

interface props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    value: string
    id: string
    checkVal: string
    inputName: string
}
const RadioInput = ({handleChange,name,value,checkVal,id,inputName}: props) => {
    return (
        <div className="flex flex-row w-full ">
            <input
                type={"radio"}
                id={id}
                name={name}
                value={value}
                checked={value === checkVal}
                onChange={handleChange}

            />
            <label htmlFor='{id}'>{inputName}</label>
            <p className="ml-auto">${value}.00</p>
        </div>
    );
};

export default RadioInput;