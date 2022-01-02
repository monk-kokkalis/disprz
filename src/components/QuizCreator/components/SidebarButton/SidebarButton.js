import Style from './SidebarButton.module.scss';
function SidebarButton({template}) {
    return (
        <button className={Style.Main}>
            {template}
        </button>
    )
}

export default SidebarButton;