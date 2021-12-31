import {useRef} from 'react';
import Style from './TextArea.module.scss';
function TextArea({label}) {
    const textAreaRef = useRef();
    const expansionHandler = () => {
        const element = textAreaRef.current;
        element.style.height = "initial";
        element.style.height = `${element.scrollHeight}px`;
    }
    return (
        <div className={Style.Main} >
            <label>{label}</label>
            <textarea rows="1"
                onChange={(el) => console.log(el.target.value)}
                onInput={expansionHandler}
                ref={textAreaRef}>
            </textarea>
        </div>
    )
}

export default TextArea;