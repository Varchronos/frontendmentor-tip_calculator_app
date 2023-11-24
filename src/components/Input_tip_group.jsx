import React, { useEffect, useState } from 'react'
import classes from './Input_tip_group.module.css'

const Input_tip_group = (props) => {

    const [tip, setTip] = useState(0)
    const [isActive, setActive] = useState(0);
    const [customValue, setCustomValue] = useState('Custom');
    const [buttonType, setButtonType] = useState('button');

    const customValueHandeler = (event)=>{
      setCustomValue(event.target.value)
    }


    const typeChangeHandeler = (event)=>{
      if(buttonType==='button')
      {
        setButtonType('text')
        setCustomValue('')
      }
      else if(buttonType==='text')
      {
        setButtonType('button')
        setCustomValue('Custom')
      }
    }

    const clickHandler = (identifier, event)=>{
      switch(identifier)
      {
        case  '5%': isActive===5?setActive(0):setActive(5); break;
        case '10%': isActive===10?setActive(0):setActive(10);break;
        case '15%': isActive===15?setActive(0):setActive(15);break;
        case '25%': isActive===25?setActive(0):setActive(25);break;
        case '50%': isActive===50?setActive(0):setActive(50);break;
      }
    }



    useEffect(()=>{
      if(buttonType==='text'){
        setTip(customValue)
        setActive(0)
      }
      else setTip(isActive)
    // console.log(customValue, tip)
      props.onTipReceive(tip);
      // console.log(isActive, tip);
    },[tip,isActive, buttonType, customValue])


  return (
    <>
    <div className={classes.tip_group}>
                    <div className={classes.label_group}>
                    <label>Select Tip %</label>
                    {buttonType==='text' && <label className={classes.custom_button_prompt}>click again to close</label>}
                    </div>
                    <div className={classes.percentage_button_group}>
                            <button className={`${classes.btn} ${isActive===5?classes.active:''}`} type='button' value={5} onClick={(event)=>clickHandler('5%', event.target.value)}>5%</button>
                            <button className={`${classes.btn} ${isActive===10?classes.active:''}`} type='button' value={10} onClick={(event)=>clickHandler('10%', event.target.value)}>10%</button>
                            <button className={`${classes.btn} ${isActive===15?classes.active:''}`} type='button' value={15} onClick={(event)=>clickHandler('15%', event.target.value)}>15%</button>
                            <button className={`${classes.btn} ${isActive===25?classes.active:''}`} type='button' value={25} onClick={(event)=>clickHandler('25%', event.target.value)}>25%</button>
                            <button className={`${classes.btn} ${isActive===50?classes.active:''}`} type='button' value={50} onClick={(event)=>clickHandler('50%', event.target.value)}>50%</button>
                            <input type={buttonType} className={`${classes.btn} ${buttonType==='text'?classes.text_button:''}`}  value={customValue} onClick={typeChangeHandeler} onChange={customValueHandeler} />
                    </div>
                </div>
    </>
    )
}

export default Input_tip_group