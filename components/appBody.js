import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';

const AppBody = (props) => {
    return (
        <div>
            <Sidebar />
            <div className="pl-64">
                <div className="px-2 py-4">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default AppBody;
