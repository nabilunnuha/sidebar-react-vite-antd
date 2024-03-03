import { Layout, Flex, Switch, Typography, Tooltip, Avatar, Image } from 'antd'
import SideBar from '../components/sideBar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import MainContent from './mainContent';
import viteLogo from '../assets/vite.svg'

const { defaultAlgorithm, darkAlgorithm } = theme;
const { Header, Sider, Content } = Layout;

const Layouts = () => {
    const location = useLocation();
    const section = location.pathname.split('/')[1];
    const storedDarkMode = localStorage.getItem('isDarkMode');
    const parsedDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;
    const [isDarkMode, setIsDarkMode] = useState(parsedDarkMode);
    const [username, setUsername] = useState('username');
    const bgColor = isDarkMode ? '#141414' : 'white'

    useEffect(() => {
        switch (isDarkMode) {
            case true:
                localStorage.setItem("isDarkMode", 'true');
                break;
            case false:
                localStorage.setItem("isDarkMode", 'false');
                break;
            default:
                break;
        }

    }, [isDarkMode]);

    const handleClick = (checked) => {
        if (checked) {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
        }
    }

    return (
        <>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                }}>
                <Layout style={{
                    minHeight: '100vh',
                    backgroundColor: bgColor,
                    display: 'flex'
                }}>
                    <Sider width='250px' style={{
                        minHeight: '100vh',
                        backgroundColor: bgColor,
                    }}>
                        <Header align='center' style={{
                            backgroundColor: bgColor,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Link to='/'>
                                <Flex gap={10}>
                                    <img src={viteLogo} width={22} />
                                    <Typography style={{
                                        fontSize: 20,
                                        fontWeight: 500,
                                        letterSpacing: '0.5px'
                                    }}>
                                        Headers
                                    </Typography>
                                </Flex>
                            </Link>
                        </Header>

                        <Flex vertical align='center'>
                            <SideBar active={section} />
                            <Flex gap={'small'} justify='space-between' style={{
                                position: 'fixed',
                                width: '250px',
                                bottom: 0,
                                padding: '5px 30px 15px 30px',
                                backgroundColor: bgColor,
                            }}>
                                <Link to='/setting'>
                                    <Tooltip title='Edit'>
                                        <Flex gap={7} align='center'>
                                            <Avatar size={24} icon={<LuUser2 />} />
                                            <Typography editable level={5} style={{
                                                textTransform: 'capitalize',
                                                fontWeight: 400,
                                                fontSize: 15
                                            }}>
                                                {username}
                                            </Typography>
                                        </Flex>
                                    </Tooltip>
                                </Link>
                                <Switch
                                    onChange={handleClick}
                                    checkedChildren={<MdOutlineDarkMode />}
                                    unCheckedChildren={<MdLightMode />}
                                    checked={isDarkMode}
                                />
                            </Flex>
                        </Flex>
                    </Sider>
                    <Layout>
                        <Content style={{
                            textAlign: 'center',
                            lineHeight: '120px',
                            backgroundColor: isDarkMode ? '#1b1c1a' : 'white',
                            overflow: 'auto'
                        }}>
                            <MainContent path={section} />
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </>
    )
}

export default Layouts
