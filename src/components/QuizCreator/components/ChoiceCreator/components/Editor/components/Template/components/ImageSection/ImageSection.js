import {useState} from 'react';
import Style from './ImageSection.module.scss';
import FileInput from 'elements/FileInput/FileInput';
function ImageSection() {
    const [imageData, setImageData] = useState({url: null, name: null});
    const changeCallback = (data) => {
        setImageData(data);
    }
    return (
        <section className={Style.Main}>
            {imageData.url ? (
                <>
                    <div className="preview--container">
                        <img src={imageData.url} alt="" className="preview" />
                    </div>
                    <div className="name">{imageData.name}</div>
                </>
                ) : null
            }
            <FileInput {...{changeCallback}} />
        </section>
    )
}

export default ImageSection;