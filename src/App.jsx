import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'
import Output_container from './components/Output_container'
import InputContainer from './components/InputContainer'
const App = () => {

  const [bill_data, setBillData] = useState(0);
  const [people_data, setPeopleData] = useState(1)
  const [per_person_amount, setPerpersonamount] = useState(0);
  const [tip_data, setTipData] = useState(0);
  const [per_person_tip, setPerpersontip] = useState(0);

  const receiveHandeler = (event) => {
    if (event.identifier === 'bill') setBillData(event.value)
    if (event.identifier === 'people') setPeopleData(event.value)
  }
  const receiveTipHandler = (event) => {
    setTipData(event)
  }

  useEffect(() => {
    let pertip = ((bill_data * tip_data) / 100) / (people_data === '' ? 1 : people_data);
    // console.log('bill: '+bill_data, 'people: '+people_data, 'tip: '+tip_data, 'pertip: '+pertip)
    setPerpersontip(parseFloat(pertip))
    setPerpersonamount(parseFloat(people_data === '' ? bill_data : bill_data / people_data) + parseFloat(pertip))
    // console.log(pertip)
  }, [bill_data, people_data, tip_data])



  return (
    <>
      <img className='logo' src={logo} alt="logo" />
      <div className="container">
        <main>
          <InputContainer
            receiveApp={receiveHandeler}
            receiveAppTip={receiveTipHandler}
          />

          <Output_container
            per_person_amount={per_person_amount}
            per_person_tip = {per_person_tip}
          />
        </main>
      </div>
    </>
  )
}

export default App