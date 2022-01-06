const SidebarHeading = (props) => {
    const text = props.text;
    return(
        <div className="px-1 py-2">
            <span className="text-white font-bold text-lg">{text}</span>
        </div>
    );
}

export default SidebarHeading;