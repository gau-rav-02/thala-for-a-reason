import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PopupContext } from '../context/popup';

const CheckButton = (props) => {

    const popupcontext = useContext(PopupContext);

    function checkForThala() {
        if(popupcontext.text.length == 7 || popupcontext.text == 7 || popupcontext.text == "seven" || popupcontext.text == "SEVEN" || popupcontext.text == "Seven"){
            popupcontext.setThala([require('../images/dhoni.gif'), require('../music/BoleJo.mp3'), 'Thala For a Reason...']);
            popupcontext.setValue(true);
        }
        else{
            popupcontext.setThala([require('../images/cry.gif'), require('../music/moye-moye.mp3'), 'No Thala For You...']);
            popupcontext.setValue(true);
        }
    }

    return(
        <Button className='button' onClick={(e) => {checkForThala()}} variant='dark'>Check for Thala</Button>
    )
}

export default CheckButton;