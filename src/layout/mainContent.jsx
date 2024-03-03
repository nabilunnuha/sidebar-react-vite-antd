import Dashboard from "../components/dashboard";
import Check from "../components/check";
import Archive from "../components/archive";
import AutoOnline from "../components/autoOnline";
import CreateVoucher from "../components/createVoucher";
import Delete from "../components/delete";
import EmailTools from "../components/emailTools";
import Launch from "../components/launch";
import MessageBot from "../components/messageBot";
import Setting from "../components/setting";
import UpProduct from "../components/upProduct";

const MainContent = ({ path }) => {
    const contentMapping = {
        dashboard: <Dashboard />,
        check: <Check />,
        archive: <Archive />,
        auto_online: <AutoOnline />,
        create_voucher: <CreateVoucher />,
        delete: <Delete />,
        email_tools: <EmailTools />,
        launch: <Launch />,
        message_bot: <MessageBot />,
        up_product: <UpProduct />,
        setting: <Setting />,
    };

    const contentPath = contentMapping[path] || <Dashboard />;

    return <>{contentPath}</>;
};

export default MainContent;
