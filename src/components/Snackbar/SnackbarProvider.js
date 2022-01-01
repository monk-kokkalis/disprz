import React, {useState} from 'react';

function SnackbarProvider({children}) {
    const [timeStamp, setTimeStamp] = useState(0);
    const [text, setText] = useState('');
    const map = {text, timeStamp, show};

    function show({text}) {
        setText(text);
        setTimeStamp(Date.now());
    }

    return (
        <SnackbarContext.Provider value={map}>
            {children}
        </SnackbarContext.Provider>
    )
}

export const SnackbarContext = React.createContext();
export default SnackbarProvider;