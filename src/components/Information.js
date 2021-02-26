import React from 'react'

export default function Information(props) {

    const {setCardNumber,
        setHolderName,
        setExpirationMonth,
        setExpirationYear} = props
    const yearOptions = []
    const monthOptions = []
    const year = new Date().getFullYear();
    for(var i=year; i <year+10;i++){
        yearOptions.push(<option key={i} value={String(i).substring(2)}>{i}</option>)
    }

    for(var i=1; i<13; i++){
        if(i<10){
            monthOptions.push(<option key={i} value={String("0"+i)}>0{i}</option>)
        }
        else{
            monthOptions.push(<option key={i} value={i}>{i}</option>)
        }
    }

    const cardInputHandler = e => {
        setCardNumber(e.target.value)
    }

    const holderInputHandler = e => {
        setHolderName(e.target.value)
    }

    const monthInputHandler = e => {
        setExpirationMonth(e.target.value)
        console.log(String(e.target.value))
    }
    
    const yearSelectorHandler = e => {
        setExpirationYear(e.target.value)
    }

    return (
        <>
            <div className="infos">
                <div className="inputlist">
                    <input type="text" onChange={cardInputHandler} placeholder="card number..." maxLength="16" />
                    <input type="text" onChange={holderInputHandler} placeholder="full name..."/>
                    <div className= "exp">
                        <select placeholder="exp. Month" id="month" onChange={monthInputHandler}>
                            {monthOptions}
                        </select>
                        <select placeholder="exp. Year" id="year" onChange={yearSelectorHandler}>
                            {yearOptions}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
