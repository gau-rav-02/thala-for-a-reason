import React, {useContext} from 'react';
import PopupCard from './PopupCard';
import CheckButton from './CheckButton';
import { PopupContext } from '../context/popup';

const Card = () => {

    const inputtext = useContext(PopupContext);

    return (
        <div className='Card'>
            <input className='input' id='input' placeholder='Enter Text Here' type='text' onChange={(e) => {inputtext.setText(e.target.value)}} />
            <PopupCard />
            <CheckButton />
        </div>
    )
}

export default Card;