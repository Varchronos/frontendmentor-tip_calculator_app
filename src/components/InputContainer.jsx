import React, { useEffect, useState } from 'react'
import Input_util from './Utils/Input_util'
import Input_tip_group from './Input_tip_group'
import classes from './Input_container.module.css'

const InputContainer = (props) => {
    const [data, setData] = useState('')
    const [tip_data, setTipData] = useState('')

    const recieveHandeler = (event) => {
        setData(event)
    }
    const receiveTipHandler = (event) => {
        setTipData(event)
    }

    useEffect(() => {
        props.receiveApp(data)
        // console.log(data)
    }, [data])

    useEffect(() => {
        props.receiveAppTip(tip_data);
        // console.log('inputcontainer '+tip_data)
    }, [tip_data])


    return (
        <>
            <div className={classes.input_container}>
                <form>
                    <Input_util
                        identifier='bill'
                        onDataRecieve={recieveHandeler}
                    >Bill
                    </Input_util>
                    <Input_tip_group onTipReceive={receiveTipHandler} />
                    <Input_util
                        identifier='people'
                        onDataRecieve={recieveHandeler}
                    >Number of people
                    </Input_util>
                </form>
            </div>
        </>
    )
}

export default InputContainer