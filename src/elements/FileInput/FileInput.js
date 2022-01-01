import Style from './FileInput.module.scss';
function FileInput({changeCallback}) {
    const fileChangeHandler = (event) => {
        const target = event.target;
        const url = URL.createObjectURL(target.files[0]);
        const name = target.files[0].name 
        changeCallback({url, name})
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