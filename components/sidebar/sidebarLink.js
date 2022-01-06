const SidebarLink = (props) => {
    const text = props.text;
    const href = props.href || "#";
    return(
        <li className="px-1 hover:bg-gray-700 py-2 cursor-pointer">
            <a className="text-white" href={href}>{text}</a>
        </li>
    );
}
export default SidebarLink;