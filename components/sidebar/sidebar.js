import SidebarLink from "./sidebarLink";
import SidebarHeading from "./sidebarHeading";

const Sidebar = () => {
    return(
        <div className="sidebar bg-gray-800 w-64 h-full fixed left-0 top-0 bottom-0">
            <SidebarHeading text="Heading" />
            <nav>
                <ul>
                    <SidebarLink text="Item 1" />
                    <SidebarLink text="item 2" />
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;