import Style from './FileInput.module.scss';
function FileInput({changeCallback}) {
    const fileChangeHandler = (event) => {
        const target = event.target;
        changeCallback({image: target.files[0]})
    }
    return (
        <div className={Style.Main}>
            <label>
                <input type="file" onChange={fileChangeHandler} />
                <span className="label--text">Select File</span>
            </label>
        </div>
    )
}

export default FileInput;