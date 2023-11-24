import React, { useEffect, useRef } from 'react'
import classes from './Input_util.module.css'
import { useState } from 'react';
const Input_util = (props) => {

    const [value, setValue] = useState('');

    const changeHandler = (identifier, event) => {
        setValue(event)
    }
    let value_cant_be_zero_label = <></>;
    useEffect(() => {
        const data = { identifier: props.identifier, value: value }

        if (props.identifier === 'people' && value === '0') {
            // console.log('people cannot be zero')
            return;
        }
        if(isNaN(parseInt(value)) && value!='')return;
        // console.log(value)
        props.onDataRecieve(data);
        // console.log(value)
    }, [value])



    return (
        <>
            <div className={classes.input_group}>
                <div className={classes.label_group}>
                    <label>{props.children}</label>
                    {props.identifier === 'people' && value === '0' && <label className={classes.error_label}>can't be zero</label>}
                    {isNaN(parseInt(value)) && value!=='' && <label className={classes.error_label}>numbers only!</label>}
                </div>
                <input type="text" 
                    className={`${classes.input} ${(props.identifier==='people' && value==='0')?classes.error_input:''}`}  placeholder='$'
                    value={value}
                    onChange={(event) => changeHandler(props.identifier, event.target.value)}
                    inputMode="numeric"
                />
            </div>
        </>
    )
}

export default Input_util