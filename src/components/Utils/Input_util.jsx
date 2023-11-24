import React, { useEffect, useRef } from 'react'
import classes from './Input_util.module.css'
import { useState } from 'react';
const Input_util = (props) => {

    const [value, setValue] = useState('');

    const changeHandler = (identifier, event)=>{
        setValue(event)
    }

    useEffect(()=>{
        const data = {identifier: props.identifier, value:value}
        props.onDataRecieve(data);
        // console.log(value)
    },[value])
    
    

    return (
        <>
        <div className={classes.input_group}>
                    <label htmlFor="bill">{props.children}</label>
                    <input type="number" placeholder='$'
                    value={value}
                    onChange={(event)=>changeHandler(props.identifier, event.target.value)}
                    //  onChange={(event)=>focusHandeler(props.identifier, event.target.value)}
                     />
                </div>
        </>
    )
}

export default Input_util