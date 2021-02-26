import './assets/stylesheets/global.css'
import Card from './components/Card'
import React,{useState} from 'react'
import Information from './components/Information';

function App() {
  const [cardNumber, setCardNumber] = useState("")
  const [holderName, setHolderName] = useState("")
  const [expirationMonth, setExpirationMonth] = useState("")
  const [expirationYear, setExpirationYear] = useState("")

  return (
    <div>
      <Card cardNumber = {cardNumber} 
            holderName={holderName}
            expirationMonth = {expirationMonth}
            expirationYear = {expirationYear}
      />

      <Information 
        cardNumber = {cardNumber} 
        setCardNumber = {setCardNumber}
        holderName={holderName}
        setHolderName = {setHolderName}
        expirationMonth = {expirationMonth}
        setExpirationMonth = {setExpirationMonth}
        expirationYear = {expirationYear}
        setExpirationYear = {setExpirationYear}
      />
    </div>
  );
}

export default App;
