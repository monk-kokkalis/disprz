import {useEffect, useRef} from 'react';
import Style from './TextArea.module.scss';
function TextArea({label, value, changeCallback}) {
    const textAreaRef = useRef();

    const changeHandler = (element) => {
        changeCallback(element.target.value);
    }

    useEffect(function updateHeight() {
        const element = textAreaRef.current;
        element.style.height = "initial";
        element.style.height = `${element.scrollHeight}px`;
    }, [value])
    
    return (
        <div className={Style.Main} >
            <label>{label}</label>
            <textarea rows="1"
                onChange={changeHandler}
                ref={textAreaRef}
                value={value}>
            </textarea>
        </div>
    )
}

export default TextArea;