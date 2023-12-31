import { createContext, useState } from 'react';

export const PopupContext = createContext(null);

export const PopupProvider = (props) => {

    const [value, setValue] = useState(false);
    const [text, setText] = useState("");
    const [thala, setThala] = useState([]);

    return(
        <PopupContext.Provider value={{value, setValue, text, setText, thala, setThala}}>
            {props.children}
        </PopupContext.Provider>
    )
} 