import React, { useEffect, useState } from 'react'
import classes from './Input_tip_group.module.css'

const Input_tip_group = (props) => {

    const [tip, setTip] = useState(0)
    const [isActive, setActive] = useState(0);
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
      setTip(isActive)
      props.onTipReceive(tip);
      // console.log(isActive, tip);
    },[tip,isActive])


  return (
    <>
    <div className={classes.tip_group}>
                    <label>Select Tip %</label>
                    <div className={classes.percentage_button_group}>
                            <button className={`${classes.btn} ${isActive===5?classes.active:''}`} type='button' value={5} onClick={(event)=>clickHandler('5%', event.target.value)}>5%</button>
                            <button className={`${classes.btn} ${isActive===10?classes.active:''}`} type='button' value={10} onClick={(event)=>clickHandler('10%', event.target.value)}>10%</button>
                            <button className={`${classes.btn} ${isActive===15?classes.active:''}`} type='button' value={15} onClick={(event)=>clickHandler('15%', event.target.value)}>15%</button>
                            <button className={`${classes.btn} ${isActive===25?classes.active:''}`} type='button' value={25} onClick={(event)=>clickHandler('25%', event.target.value)}>25%</button>
                            <button className={`${classes.btn} ${isActive===50?classes.active:''}`} type='button' value={50} onClick={(event)=>clickHandler('50%', event.target.value)}>50%</button>
                            <button className={classes.btn} type='button'>Custom</button>
                    </div>
                </div>
    </>
    )
}

export default Input_tip_group