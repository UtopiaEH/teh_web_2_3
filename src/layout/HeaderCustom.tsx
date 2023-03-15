import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, theme } from 'antd'


const { Header } = Layout;

const HeaderCustom = ({sidebarIsOpen, setSidebarOpen}: {sidebarIsOpen: any, setSidebarOpen: (param: boolean) => any}) => {
    
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(sidebarIsOpen ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setSidebarOpen(!sidebarIsOpen),
            })}
        </Header>
    )
}

export default HeaderCustom