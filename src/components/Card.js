import React, {useEffect, useState} from 'react';
import * as AiIcons from 'react-icons/ai';

export default function Card({cardNumber, holderName, expirationMonth, expirationYear}) {

    const _defaultNumber = "1234567890123456";
    const _defaultName = "FULL NAME"
    const [xCardNumber, setXCardNumber] = useState(_defaultNumber)
    const [xHolderName, setXHolderName] = useState("")
    const [xExpitionMonth, setXExpirationMonth] = useState("01")
    const [xExpitionYear, setXExpirationYear] = useState("21")
    useEffect(() => {
        //Formats text and sets white space between every four Characters
        const formatedText = (cardNumber, holderName, expirationMonth, expirationYear) => {
            let _cardNumber = cardNumber.match(/.{1,4}/g);
            let _holderName = holderName.toUpperCase() + _defaultName.substring(holderName.length);
            setXCardNumber(_cardNumber.join(' '));
            setXHolderName(_holderName);
            setXExpirationMonth(expirationMonth);
            setXExpirationYear(expirationYear)
        }

        //Replaces card number to match the input
        const UpdateInfos = (cardNumber, holderName, expirationMonth, expirationYear)=> {
            const NewCardNumber = cardNumber + _defaultNumber.substring(cardNumber.length);
            formatedText(NewCardNumber, holderName, expirationMonth, expirationYear);
        }
        
        UpdateInfos(cardNumber, holderName, expirationMonth, expirationYear);
      }, [cardNumber, holderName, expirationMonth, expirationYear])

    return (
        <>
            <div className="card">
                <span className="cardType visa">
                    <svg width="106.5" height="36" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M52.3974 1.01093L51.5589 5.99054C49.0449 4.56717 43.3231 4.23041 43.3231 6.85138C43.3231 7.89285 44.6177 8.60913 46.1781 9.47241C48.5445 10.7817 51.5221 12.4291 51.5221 16.062C51.5221 21.8665 45.4732 24 41.4646 24C37.4559 24 34.8326 22.6901 34.8326 22.6901L35.7066 17.4848C38.1115 19.4688 45.4002 20.032 45.4002 16.8863C45.4002 15.5645 43.9656 14.785 42.302 13.8811C40.0062 12.6336 37.2742 11.1491 37.2742 7.67563C37.2742 1.30988 44.1978 0 47.1133 0C49.8102 0 52.3974 1.01093 52.3974 1.01093ZM66.6054 23.6006H72L67.2966 0.414276H62.5732C60.3923 0.414276 59.8611 2.14215 59.8611 2.14215L51.0996 23.6006H57.2233L58.4481 20.1566H65.9167L66.6054 23.6006ZM60.1406 15.399L63.2275 6.72235L64.9642 15.399H60.1406ZM14.7942 16.3622L20.3952 0.414917H26.7181L17.371 23.6012H11.2497L6.14548 3.45825C2.83218 1.41281 0 0.807495 0 0.807495L0.108643 0.414917H9.36819C11.9161 0.414917 12.1551 2.50314 12.1551 2.50314L14.1314 12.9281L14.132 12.9294L14.7942 16.3622ZM25.3376 23.6006H31.2127L34.8851 0.414917H29.0095L25.3376 23.6006Z" fill="white"/>
                    </svg>
                </span>
                <span className="cardType masterCard">
                <svg width="60" height="36" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.4077 2.56665H14.5923V21.4333H25.4077V2.56665Z" fill="#FF5F00"/>
                    <path d="M15.279 12C15.279 8.16664 17.133 4.76664 19.9828 2.56664C17.8884 0.966636 15.2446 -3.05176e-05 12.3605 -3.05176e-05C5.5279 -3.05176e-05 0 5.36664 0 12C0 18.6333 5.5279 24 12.3605 24C15.2446 24 17.8884 23.0333 19.9828 21.4333C17.133 19.2666 15.279 15.8333 15.279 12Z" fill="#EB001B"/>
                    <path d="M40 12C40 18.6333 34.4721 24 27.6395 24C24.7553 24 22.1116 23.0333 20.0172 21.4333C22.9013 19.2333 24.721 15.8333 24.721 12C24.721 8.16667 22.8669 4.76667 20.0172 2.56667C22.1116 0.966667 24.7553 0 27.6395 0C34.4721 0 40 5.4 40 12Z" fill="#F79E1B"/>
                </svg>
                </span>
                <h3 className="cardNumber">{xCardNumber}</h3>
                <div className="holderInfos">
                    <p className="holder-title">card Holder</p>
                    <h2 className="holderName">{xHolderName}</h2>
                </div>
                <div className="expiration">
                    <h4>EXP</h4>
                    <AiIcons.AiFillCaretRight />
                    <h4>{xExpitionMonth}/{xExpitionYear}</h4>
                </div>
            </div>
        </>
    )
}
