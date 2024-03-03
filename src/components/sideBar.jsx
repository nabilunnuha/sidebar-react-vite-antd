import { Menu } from "antd"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits, MdOutlineArchive, MdOutlineDiscount, MdOutlineAttachEmail } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiDeleteBin6Line, RiRadioButtonLine } from "react-icons/ri";
import { FaRegCaretSquareUp, FaRegWindowRestore } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";

function getItem(label, key, icon, children, type) {
    return {
        label,
        key,
        icon,
        children,
        type,
    };
}

const SideBar = ({ active }) => {
    const [selected, setSelected] = useState('dashboard')
    const items = [
        getItem(<Link to='/dashboard'>Dashboard</Link>, 'dashboard', <AiOutlineHome size={18} />, null),
        getItem('Product', 'product', <MdOutlineProductionQuantityLimits size={18} />, [
            getItem(<Link to='/check'>Check</Link>, 'check', <FaRegCircleCheck size={17} />),
            getItem(<Link to='/delete'>Delete</Link>, 'delete', <RiDeleteBin6Line size={17} />),
            getItem(<Link to='/archive'>Archive</Link>, 'archive', <MdOutlineArchive size={18} />),
            getItem(<Link to='/up_product'>Up Product</Link>, 'up_product', <FaRegCaretSquareUp size={16} />),
        ]),
        getItem(<Link to='/launch'>Launch</Link>, 'launch', <FaRegWindowRestore size={16} />, null),
        getItem(<Link to='/auto_online'>Auto Online</Link>, 'auto_online', <RiRadioButtonLine size={18} />, null),
        getItem(<Link to='/create_voucher'>Create Voucher</Link>, 'create_voucher', <MdOutlineDiscount size={18} />, null),
        getItem(<Link to='/message_bot'>Message Bot</Link>, 'message_bot', <LuMessagesSquare size={18} />, null),
        getItem(<Link to='/email_tools'>Email Tools</Link>, 'email_tools', <MdOutlineAttachEmail size={18} />, null),
        getItem(<Link to='/setting'>Setting</Link>, 'setting', <IoSettingsOutline size={18} />, null),
    ];

    const onSelectItem = ({ item, key, keyPath, domEvent }) => {
        setSelected(key)
    }

    useEffect(() => {
        setSelected(active)
    }, [active])

    return (
        <>
            <Menu mode="inline"
                items={items}
                selectedKeys={[selected]}
                onClick={onSelectItem}
                style={{
                    width: '250px'
                }}
            />
        </>
    )
}

export default SideBar