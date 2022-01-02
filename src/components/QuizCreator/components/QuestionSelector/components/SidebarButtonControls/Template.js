import Style from './Template.module.scss';
function Template() {
    return (
        <span className={Style.Main}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </span>
    )
}

export default Template;