import Style from './ImageSection.module.scss';
function ImageSection() {
    return (
        <section className={Style.Main}>
            <input type="file" />
        </section>
    )
}

export default ImageSection;