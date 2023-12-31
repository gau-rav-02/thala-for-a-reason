import React, { useContext, useState } from 'react';
import { PopupContext } from '../context/popup';

const PopupCard = (props) => {

    const popupcontext = useContext(PopupContext);

    return (props.trigger) ? (
            <div className='popupcard'>
                <div className='popupcard-heading'>
                    <h4>{popupcontext.thala[2]}</h4>
                    <button onClick={(e) => {popupcontext.setValue(false)}}><i className='fa fa-close'></i></button>
                </div>
                <img src={popupcontext.thala[0]} alt='gif' />
                <audio autoPlay loop>
                    <source src={popupcontext.thala[1]} type='audio/ogg'/>
                </audio>
            </div>
    ) : "" ;
}

export default PopupCard;