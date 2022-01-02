import Style from './SidebarButtonTemplate.module.scss';
function SidebarButtonTemplate() {
    return (
        <span className={Style.Main}>
            <span className='upper'></span>
            <span className="middle"></span>
            <span className="lower"></span>
        </span>
    )
}

export default SidebarButtonTemplate;