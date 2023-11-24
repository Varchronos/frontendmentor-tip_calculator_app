import React from 'react'
import Output_util from './Utils/Output_util'
import classes from './Output_container.module.css';

const Output_container = (props) => {
    
    return (
        <>
            <div className={classes.output_container}>
                <Output_util identifier ='tip' per_person_tip = {props.per_person_tip} >Tip Amount</Output_util>
                <Output_util identifier='totalamount' per_person_amount={props.per_person_amount}>Total</Output_util>
                <button className={classes.btn} type='submit'>RESET</button>
            </div>
        </>
    )
}

export default Output_container