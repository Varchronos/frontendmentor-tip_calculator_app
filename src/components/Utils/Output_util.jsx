import React, { useEffect, useState } from 'react'
import classes from './Output_util.module.css'
const Output_util = (props) => {
let amtvalue = 0.00
    if(props.identifier === 'tip')
    {
        amtvalue = props.per_person_tip.toFixed(2);
    }
    else if(props.identifier === 'totalamount'){
        amtvalue = props.per_person_amount.toFixed(2);
    }
    useEffect(()=>{
    }, [])
    return (
        <>
        <div className={classes.amount_group}>
                    <div className="text_label">
                        <h2>{props.children}</h2>
                        <h3>/ person</h3>
                    </div>
                    <h1>${isNaN(amtvalue)?0:amtvalue}</h1>
                </div>
        </>
        )
}

export default Output_util