import Style from './Option.module.scss';
import TextArea from 'elements/TextArea/TextArea';
function Option({option, index}) {
    return (
        <div className={Style.Main} onClick={() => {
            console.log('click click')
        }}>
            <TextArea
                label={`Option ${index + 1}`}
                value={option.value}
                changeCallback={(value) => {
                    console.log(`Option ${index + 1}: `, value);
                }}
            />
        </div>
    )
}

export default Option;