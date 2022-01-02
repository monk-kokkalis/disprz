import Style from './SidebarButton.module.scss';
function SidebarButton({template, callback}) {
    return (
        <button className={Style.Main} onClick={callback}>
            {template}
        </button>
    )
}

export default SidebarButton;